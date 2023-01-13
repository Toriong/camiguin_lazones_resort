# users/models.py

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
from .manager import UserManager

class User(AbstractUser):
    username = None # remove username field, we will use email as unique identifier
    email = models.EmailField(unique=True, null=True, db_index=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    REQUIRED_FIELDS = []
    USERNAME_FIELD = 'email'

    objects = UserManager()


class Member(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True,related_name="user_profile")
    phoneNum = models.CharField(max_length=255,blank=True,null=True)
    password = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_anonymous = models.BooleanField(default=False)
    is_authenticated = models.BooleanField(default=True)

    REQUIRED_FIELDS = ['password']
    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.user.email
