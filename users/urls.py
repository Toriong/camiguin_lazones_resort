from django.contrib import admin
from django.urls import path, include

from .views import checkConnection, createNewUser




urlpatterns = [
path('', checkConnection, name='connectionCheck'),
path('create-user', createNewUser, name='createNewUser')
]