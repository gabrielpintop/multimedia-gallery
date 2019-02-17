from .models import Multimedia, User, Category, Type
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ('id', 'typeId')


class CatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class MultimediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Multimedia
        fields = ('id', 'title', 'author', 'city', 'category',
                  'user', 'type', 'country', 'url', 'imageFile')

    def to_representation(self, instance):
        self.fields['user'] = UserSerializer(read_only=True)
        self.fields['category'] = CatSerializer(read_only=True)
        self.fields['type'] = TypeSerializer(read_only=True)
        return super(MultimediaSerializer, self).to_representation(instance)