from django.db import models

class ProductsOne(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    color = models.CharField(max_length=50)
    size = models.CharField(max_length=50)
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='products_one/')  # Add ImageField

    def __str__(self):
        return self.name


class ProductsTwo(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    color = models.CharField(max_length=50)
    size = models.CharField(max_length=50)
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='products_two/')  # Add ImageField

    def __str__(self):
        return self.name


class ProductsThree(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    color = models.CharField(max_length=50)
    size = models.CharField(max_length=50)
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='products_three/')  # Add ImageField

    def __str__(self):
        return self.name


class Carousel(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2, default="0.0")
    description = models.TextField()
    color = models.CharField(max_length=50)
    size = models.CharField(max_length=50, default="size")
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='carousel/')  # Add ImageField

class CarouselOne(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2, default="0.0")
    description = models.TextField()
    color = models.CharField(max_length=50)
    size = models.CharField(max_length=50, default="size")
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='carouselOne/')  # Add ImageField
    def __str__(self):
        return self.title
