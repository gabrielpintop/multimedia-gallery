from .models import Multimedia, User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class MultimediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Multimedia
        fields = ('id', 'title', 'author', 'city', 'category',
                  'user', 'type', 'country', 'url', 'imageFile')





