from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, get_object_or_404
from math import  ceil

from unicodedata import category

from .models import Product


# Create your views here.

def index(request):
    categories = Product.objects.values_list('category', flat=True).distinct()

    category_products = {}
    for cat in categories:
        category_products[cat] = Product.objects.filter(category=cat)

    params = {'category_products': category_products}
    return render(request, 'shop/index.html', params)

def about(request):
    return render(request, 'shop/about.html')
def contact(request):
    return HttpResponse("<h1>Contact</h1>")

def tracker(request):
    return HttpResponse("<h1>Tracker</h1>")

def search(request):
    return HttpResponse("<h1>Search</h1>")
def checkout(request):
    return HttpResponse("<h1>Checkout</h1>")


def productview(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    products = Product.objects.filter(category=product.category)
    return render(request, 'shop/product_view.html', {'product': product,'products':products})

def view_cart(request):
    # Backend only renders empty cart page; frontend JS will load cart from localStorage
    return render(request, "shop/cart.html")