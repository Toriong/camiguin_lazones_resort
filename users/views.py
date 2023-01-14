from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
from .models import User

# Create your views here.
def testConnection(request):
    return HttpResponse("Sever is live on PORT: 8000")

@csrf_exempt 
def createUser(request):
    print("request: ", request)

    if request.POST and (request.POST.get('name') == 'createUser'):
        email = request.POST.get('email')
        password = request.POST.get('password')
        firstName = request.POST.get('firstName')
        lastName = request.POST.get('lastName')
        birthDate = request.POST.get('birthDate')
        fromCity = request.POST.get('fromCity')
        fromCountry = request.POST.get('fromCountry')
        sex = request.POST.get('sex')
        phoneNum = request.POST.get('phoneNum')
        print(email, password, firstName, lastName, birthDate, phoneNum, fromCity, fromCountry, sex)
        isAllUserInfoPresent = (email and password and firstName and lastName and birthDate and phoneNum and fromCity and fromCountry and sex)

        if isAllUserInfoPresent:
            try:
                User.objects.create(email=email, date_of_birth=birthDate, password=make_password(password)) 
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
                print("An error occurred while saving the user into the database: " + error)
                return HttpResponse("User info may not have been saved. Have client refresh the page.", status=404)
        else:
            return HttpResponse("Did not receive an email, password, first name, or a last name.", status=404)
        


    return HttpResponse("Request does not have a name.")