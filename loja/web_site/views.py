from django.shortcuts import render
from .models import Produto


def inicial(request):
    produtos = Produto.objects.all()
    return render(request, 'paginas/index.html', {'produtos': produtos})
