from django.db import models
from django.forms import ModelForm, Form, CharField, TextInput, EmailField, PasswordInput
from django.contrib.auth.models import User

# Create your models here.

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)


class Category(models.Model):
    name = models.CharField(max_length=100, null=False)


class CategoryForm(ModelForm):
    class Meta:
        model = Category
        fields = ['name']


class Type(models.Model):
    typeId = models.CharField(max_length=200)


class TypeForm(ModelForm):
    class Meta:
        model = Type
        fields = ['typeId']


class Multimedia(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    creationDate = models.CharField(max_length=20, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    city = models.CharField(max_length=100, null=True)
    country = models.CharField(max_length=100, null=True)
    url = models.CharField(max_length=1000)

    def __str__(self):
        return 'Multimedia: ' + self.title


class MultimediaForm(ModelForm):
    class Meta:
        model = Multimedia
        fields = ['title', 'author', 'user', 'creationDate', 'category', 'type', 'city', 'country', 'url']

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


# Tabla comments
class Comment(models.Model):
    comment = models.CharField(max_length=300, null=False)
    userId = models.CharField(max_length=100, null=False)


class CommentForm(ModelForm):
    class Meta:
        model = Comment
        fields =['comment', 'userId']


# Clip model
class Clip(models.Model):
    name = models.CharField(max_length=200)
    initialSec = models.SmallIntegerField(default=0)
    finalSec = models.SmallIntegerField(default=0)
    userId = models.CharField(max_length=100, null=False)


class ClipForm(ModelForm):
    class Meta:
        model = Clip
        fields = ['name', 'initialSec', 'finalSec', 'userId']


class SignInForm(Form):
        username = CharField(max_length=50, widget = TextInput(
            attrs = {'class': 'form-control'}
        ), required=True)
        password = CharField(min_length=8, max_length=10, widget = PasswordInput(
            attrs = {'class': 'form-control'}
        ), required=True)

