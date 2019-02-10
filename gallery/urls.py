from django.conf.urls import url, include
from . import views

app_name = 'gallery'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^signIn/$', views.sign_in, name='signIn'),
    url(r'^add/$', views.add_multimedia, name='addImage'),
    url(r'^logOut/$', views.log_out, name='logOut'),
    url(r'^signUp/$', views.signUp, name='signUp'),
    url(r'^userDetails/$', views.get_user, name='userDetails'),
    url(r'^userDetails/editUser/$', views.edit_profile, name='editUser'),
    url(r'^change_password/$', views.change_password, name='change_password'),
]
