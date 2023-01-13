from django.contrib import admin
from django.urls import path, include

from .views import testConnection, createUser




urlpatterns = [
    path('', testConnection, name='connectionCheck'),
    path('create-user', createUser, name='create-container'),
]