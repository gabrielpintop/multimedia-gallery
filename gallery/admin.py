from django.contrib import admin
from .models import Image, Category, Comment

# Register your models here.
admin.site.register(Image)
admin.site.register(Category)
admin.site.register(Comment)
