from .models import Multimedia, User, Category, Type
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class UserCreateSeralizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'username',
            'password',
            'email',
            'first_name',
            'last_name'
        )
        extra_kwargs = {'password':
                            {"write_only": True}
                        }

    def create(self, validated_data):
        username = validated_data['username']
        email = validated_data['email']
        password = validated_data['password']
        user_obj = User(
            username = username,
            email =email
        )
        user_obj.set_password(password)
        user_obj.save()
        return validated_data


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
                  'user', 'type', 'country', 'url', 'imageFile', 'creationDate')

    def to_representation(self, instance):
        self.fields['user'] = UserSerializer(read_only=True)
        self.fields['category'] = CatSerializer(read_only=True)
        self.fields['type'] = TypeSerializer(read_only=True)
        return super(MultimediaSerializer, self).to_representation(instance)
