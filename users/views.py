from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User

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

        if email and password and firstName and lastName:
            user = User.objects.create_user(None, email, password)
            return HttpResponse("User was created successfully.")
        else:
            return HttpResponse("Did not receive an email, password, first name, or a last name.", status=404)
        


    return HttpResponse("Request does not have a name.")