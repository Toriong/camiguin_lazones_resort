from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def testConnection(request):
    return HttpResponse("Sever is live on PORT: 8000")

@csrf_exempt 
def createUser(request):
    print("request: ", request)


    return HttpResponse("Request does not have a name.")