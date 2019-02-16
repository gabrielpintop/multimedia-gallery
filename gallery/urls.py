from django.conf.urls import url, include
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


app_name = 'gallery'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^signIn/$', views.sign_in, name='signIn'),
    url(r'^add/$', views.add_multimedia, name='addMultimedia'),
    url(r'^logOut/$', views.log_out, name='logOut'),
    url(r'^signUp/$', views.signUp, name='signUp'),
    url(r'^userDetails/$', views.get_user, name='userDetails'),
    url(r'^userDetails/editUser/$', views.edit_profile, name='editUser'),
    url(r'^change_password/$', views.change_password, name='change_password'),
    url(r'^getMulti/$', views.getMulti, name='getMulti'),
    url(r'^getUser/$', views.getUser, name='getUser'),
]

urlpatterns += staticfiles_urlpatterns()