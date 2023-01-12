from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid


class User(AbstractUser, models.Model):
   id=models.AutoField(primary_key=True, null=False, default=uuid.uuid4)
   isMale = models.BooleanField(default=True) 
   birth_date = models.DateField(null=True, blank=True)
   from_city = models.CharField(max_length=150)
   from_country = models.CharField(max_length=150)
   referral_count_num = models.IntegerField(default=0)

   @classmethod
   def create(cls, isMale, birth_date, from_city, from_country):
        return cls(isMale=isMale, birth_date=birth_date, from_city=from_city, from_country=from_country)
