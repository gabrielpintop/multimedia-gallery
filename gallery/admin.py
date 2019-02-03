from django.contrib import admin
from .models import Image, Category, Comment, Multimedia, User

# Register your models here.
admin.site.register(Image)
admin.site.register(Category)
admin.site.register(Comment)
admin.site.register(Multimedia)
admin.site.register(User)
