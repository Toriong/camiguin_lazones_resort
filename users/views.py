from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User


def generateToken(user):
    refresh = RefreshToken.for_user(user)

    return {'refresh': str(refresh), 'access': str(refresh.access_token)}


# Views below.


def testConnection(request):
    return HttpResponse("Sever is live on PORT: 8000")


def signIn(request):
    print("request: ", request)

    if request.GET and (request.GET.get('email') and request.GET.get('password')):
        email = request.GET.get('email')
        user = authenticate(request, email=email, password=request.GET.get('password'))

        if user is not None:
            targetUser = User.objects.get(email=email)
            user = { "token": generateToken(user), 'firstName': targetUser.first_name, 'lastName': targetUser.last_name }
            
            return JsonResponse({ "msg": "Sign-in was successful.", 'user': user })
        else:
            print("Invalid username or password.")

            return HttpResponse("Invalid username or password.", status=404)

    return HttpResponse("Invalid parameters.", status=404)


@csrf_exempt
def createUser(request):
    print("request: ", request)

    if request.POST and (request.POST.get('name') == 'createUser'):
        email = request.POST.get('email')

        if User.objects.get(email=email):
            print("The email was taken already.")
            return HttpResponse("There is an account with that email already.", status=409)

        password = request.POST.get('password')
        firstName = request.POST.get('firstName')
        lastName = request.POST.get('lastName')
        birthDate = request.POST.get('birthDate')
        fromCity = request.POST.get('fromCity')
        fromCountry = request.POST.get('fromCountry')
        sex = request.POST.get('sex')
        phoneNum = request.POST.get('phoneNum')
        isAllUserInfoPresent = (
            email and password and firstName and lastName and birthDate and phoneNum and fromCity and fromCountry and sex)

        if isAllUserInfoPresent:
            try:
                user = User.objects.create_user(
                    email=email, date_of_birth=birthDate, password=password)
                print("user after creation: ", user)
                newUser = User.objects.get(email=email)
                newUser.first_name = firstName
                newUser.last_name = lastName
                newUser.phone_num = phoneNum
                newUser.from_city = fromCity
                newUser.from_country = fromCountry
                newUser.sex = sex
                newUser.save()

                return HttpResponse("User was created successfully.")
            except Exception as error:
                print(
                    "An error occurred while saving the user into the database: ", error)
                return HttpResponse("User info may not have been saved. Have client refresh the page.", status=404)
        else:
            return HttpResponse("Did not receive an email, password, first name, or a last name.", status=404)

    return HttpResponse("Request does not have a name.")
