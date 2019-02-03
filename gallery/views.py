from django.urls import reverse
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Multimedia, MultimediaForm,UserForm,User
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

