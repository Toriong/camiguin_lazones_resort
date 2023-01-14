from django.contrib import admin
from django.urls import path, include

from .views import testConnection, createUser, signIn




urlpatterns = [
    path('', testConnection, name='connectionCheck'),
    path('create-user', createUser, name='create-container'),
    path('sign-in', signIn, name='sign-in'),
]