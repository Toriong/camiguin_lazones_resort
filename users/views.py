from django.shortcuts import render
from django.http import HttpResponse

def checkConnection(request):
    return HttpResponse("The connection is established.")
