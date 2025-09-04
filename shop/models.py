from django.db import models

# Create your models here.

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, default='')
    subcategory = models.CharField(max_length=50,default='')
    description = models.TextField(default=0)
    image = models.ImageField(upload_to="shop/images/",default='')
    date = models.DateField()

    def __str__(self):
        return self.name