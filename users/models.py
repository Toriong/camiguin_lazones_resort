# from django.db import models
# from django.contrib.auth.models import BaseUserManager, AbstractUser
# import uuid


# class UserManager(BaseUserManager):
#     pass

#     def create_user(self, firstName, lastName, email, password, date_of_birth, fromCity, fromCountry):
#         if not email:
#             raise ValueError('Users must have an email address')

#         user = self.model(email=self.normalize_email(email), date_of_birth=date_of_birth,
#                           firstName=firstName, lastName=lastName, fromCity=fromCity, fromCountry=fromCountry)

#         user.set_password(password)
#         return user


# class Abstract_User(AbstractUser):
#     pass

# class User(models.Model):
#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['password']
#     user = models.OneToOneField(Abstract_User, on_delete=models.CASCADE, unique=True)
#     is_authenticated = models.BooleanField(default=True)
#     is_anonymous = models.BooleanField(default=False)
#     isMale = models.BooleanField(default=True)
#     birth_date = models.DateField(null=True, blank=True)
#     first_name = models.CharField(max_length=150, default='')
#     last_name = models.CharField(max_length=150, default='')
#     email = models.CharField(max_length=150, unique=True, primary_key=True)
#     from_city = models.CharField(max_length=150)
#     from_country = models.CharField(max_length=150)
#     referral_count_num = models.IntegerField(default=0)

#     @classmethod
#     def createUser(cls, first_name, last_name, email, from_city, from_country, birth_date, isMale, email_field, password):
#         return cls(first_name=first_name, last_name=last_name, email=email, from_city=from_city, from_country=from_country, birth_date=birth_date, isMale=isMale, email_field=email_field, password=password)

