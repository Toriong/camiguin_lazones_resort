from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings 
from django.contrib.auth.models import User


# class AuthenticatedUser(AbstractUser):
    # pass




class Member(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birth_date = models.DateField(default=None, null=True)
    from_city = models.CharField(max_length=100, default="")
    from_country = models.CharField(max_length=100, default="")
    referral_count_num = models.IntegerField(default=0)
    is_male = models.BooleanField(default=True)
    phone_num = models.CharField(max_length=50)

    @classmethod
    def create(cls, birth_date, from_city, from_country, referral_count_num, is_male, phone_num):
        return cls(birth_date=birth_date,from_city=from_city,from_country=from_country, referral_count_num=referral_count_num, is_male=is_male, phone_num=phone_num)