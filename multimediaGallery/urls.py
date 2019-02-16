from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from django.conf import settings

admin.autodiscover()


# To add a new path, first import the app:
# import blog
#
# Then add the new path:
# path('blog/', blog.urls, name="blog")
#
# Learn more here: https://docs.djangoproject.com/en/2.1/topics/http/urls/

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/', include('gallery.urls', namespace="multimedia")),
]

urlpatterns += [
    path(r'^api/auth', include('rest_framework.urls', namespace='rest_framework'))
]