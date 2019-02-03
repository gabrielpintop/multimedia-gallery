from django.db import models
from django.forms import ModelForm

# Create your models here.


class Image(models.Model):
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=1000)
    description = models.CharField(max_length=1000, null=True)
    type = models.CharField(max_length=5, blank=True)

    def __str__(self):
        return 'Image: ' + self.name


class ImageForm(ModelForm):
    class Meta:
        model = Image
        fields = ['name', 'url', 'description', 'type']

#Tabla categoria
class Category(models.Model):
    name = models.CharField(max_length=100, null=False)

class CategoryForm(ModelForm):
    class Meta:
        model = Category
        fields=['name']

#Tabla comentarios
class Comment(models.Model):
    comment = models.CharField(max_length=300, null=False)
    userId = models.CharField(max_length=100, null=False)

class  CommentForm(ModelForm):
    class Meta:
        model = Comment
        fields =['comment','userId']