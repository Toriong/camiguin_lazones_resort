from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings 
from django.contrib.auth.models import User


# class AuthenticatedUser(AbstractUser):
    # pass


class Member(models.Model):
    # email = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    email = models.ForeignKey(User, on_delete=models.CASCADE) 
    birth_date = models.DateField(default=None, null=True)
    from_city = models.CharField(max_length=100, default="")
    from_country = models.CharField(max_length=100, default="")
    referral_count_num = models.IntegerField(default=0)
    isMale = models.BooleanField(default=True)
    phone_num = models.CharField(max_length=50)