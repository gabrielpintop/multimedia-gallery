from django.urls import reverse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect
from .models import Multimedia, MultimediaForm, User, SignInForm
from django.contrib import messages
from gallery.forms import RegistrationForm

# Create your views here.


def index(request):
    multimedia_list = Multimedia.objects.all()
    context = {'multimedia_list': multimedia_list}
    return render(request, 'gallery/multimedia.html', context)


def add_multimedia(request):
    if request.method == 'POST':
        form = MultimediaForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('multimedia:index'))
    else:
        form = MultimediaForm()

    return render(request, 'gallery/multimedia_form.html', {'form': form})

# Handles the sign in of an user
# If the user is already logged in, the user is redirected to the index page
def sign_in(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse('multimedia:index')) 
    else:     
        error = ''
        if request.method == 'POST':
            form = SignInForm(request.POST)
            if form.is_valid():
                username = request.POST['username']
                password = request.POST['password']
                user = authenticate(request, username=username, password=password)
                if user is not None:
                    login(request, user)
                    return HttpResponseRedirect(reverse('multimedia:index'))
                else:
                   error = 'Username or password not correct'
        else:
            form = SignInForm()

    return render(request, 'gallery/sign_in_form.html', {'form': form, 'error': error})

# Handles the log out of an user
def log_out(request):
    if request.user.is_authenticated:
        logout(request)
    
    return HttpResponseRedirect(reverse('multimedia:index'))




def signUp(request):
    if request.method == 'GET':
        form = RegistrationForm()
        args = {'form': form}
        return render(request, 'gallery/signUp.html', args)
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/signIn')
        else:
            messages.error(request, 'Su contraseña: no puede ser similar a su información personal, debe contener al menos 8 caracteres, no puede ser una contraseña de uso común y no puede ser solo numérica.')
            return HttpResponseRedirect('/signUp')


def get_user(request):
    if request.user.is_authenticated:
        return render(request, 'gallery/userDetails.html')

    return HttpResponseRedirect(reverse('multimedia:index')) 
