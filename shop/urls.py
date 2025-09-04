from django.contrib import admin
from django.urls import path

from . import  views

urlpatterns = [
    path("", views.index, name="shopHome"),
    path("about/", views.about, name="AboutUs"),
    path("contact/", views.contact, name="ContactUs"),
    path("tracker/", views.tracker, name="TrackingStatus"),
    path("search/", views.search, name="Search"),
    path('product/<int:product_id>/', views.productview, name="ProductView"),
    # path('add-to-cart/', views.add_to_cart, name='add_to_cart'),
    path('cart/', views.view_cart, name='view_cart'),
    path("checkout/", views.checkout, name="Checkout"),
]
