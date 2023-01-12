from django.shortcuts import render
from django.http import HttpResponse
from .models import User
from django.views.decorators.csrf import csrf_exempt



def checkConnection(request):
    return HttpResponse("The server is live on PORT 8000!")

@csrf_exempt
def createNewUser(request):
    firstName = request.POST.get('firstName')
    lastName = request.POST.get('lastName')
    email = request.POST.get('email')
    fromCity = request.POST.get('fromCity')
    isMale = request.POST.get('isMale')
    fromCountry = request.POST.get('fromCountry')
    birthDate = request.POST.get('birthDate')
    isUserInfoPresent = firstName and lastName and email and fromCity and fromCountry and birthDate
    
    if (request.method == "POST") and isUserInfoPresent:
        if (type(isMale) == 'string'):
            isMale = True if (isMale.lower() == "true") else False

        newUser = User.create(isMale, birthDate, fromCity, fromCountry)

        print('newUser: ', newUser)

        try:
            newUser.save()
            print("User successfully created.")
            return HttpResponse("User was saved into the database.")
        except Exception as error:
            print("An error has occurred in saving user into the database.")
            return HttpResponse("Failed to save user into the database. Please try again.", status=500)

    return HttpResponse("User info is not present.", status=404)

            
        