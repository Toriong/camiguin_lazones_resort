from django.contrib import admin

from .models import User
from django.contrib import admin

class Admin(admin.ModelAdmin):
    readonly_fields = ('id')

admin.site.register((User))
