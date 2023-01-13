from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
import uuid


class UserManager(BaseUserManager):
   pass

   def create_user(self, firstName, lastName, email, password, date_of_birth, fromCity, fromCountry):
      if not email:
         raise ValueError('Users must have an email address')

      user = self.model(email=self.normalize_email(email), date_of_birth=date_of_birth, firstName=firstName, lastName=lastName, fromCity=fromCity, fromCountry=fromCountry)

      user.set_password(password)
      return user


class User(AbstractBaseUser):
    objects = UserManager()
    isMale = models.BooleanField(default=True)
    birth_date = models.DateField(null=True, blank=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=150, unique=True)
    from_city = models.CharField(max_length=150)
    from_country = models.CharField(max_length=150)
    referral_count_num = models.IntegerField(default=0)
    USERNAME_FIELD = 'email'

