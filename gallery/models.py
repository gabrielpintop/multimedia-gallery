from django.db import models
from django.forms import ModelForm

# Create your models here.


# Tabla User
class User(models.Model):
    name = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    photo = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)


class UserForm(ModelForm):
    class Meta:
        model = User
        fields = ['name', 'lastName', 'photo', 'city', 'country', 'email', 'password']


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
    City = models.CharField(max_length=100, null=True)
    Country = models.CharField(max_length=100, null=True)
    url = models.CharField(max_length=1000)

    def __str__(self):
        return 'Multimedia: ' + self.title


class MultimediaForm(ModelForm):
    class Meta:
        model = Multimedia
        fields = ['title', 'author', 'user', 'creationDate', 'category', 'type', 'City', 'Country', 'url']


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
