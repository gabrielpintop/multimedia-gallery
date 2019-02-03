from django.contrib import admin
from .models import Multimedia, Category, Comment, User, Type, Clip

# Register your models here.
admin.site.register(Multimedia)
admin.site.register(Category)
admin.site.register(Comment)
admin.site.register(User)
admin.site.register(Type)
admin.site.register(Clip)
