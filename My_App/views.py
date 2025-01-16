# from django.shortcuts import render

# # Create your views here.

# def index(request):
#     return render(request, 'index.html')

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .models import ProductsOne, ProductsTwo, ProductsThree, Carousel,CarouselOne
from .serializers import ProductsOneSerializer, ProductsTwoSerializer, ProductsThreeSerializer, CarouselSerializer, CarouselOneSerializer
from django.http import JsonResponse
from django.core import serializers


class ExampleView(APIView):
    def get(self, request):
        return Response({"message": "Hello from Django!"})

class CarouselViewSet(viewsets.ModelViewSet):
    queryset = Carousel.objects.all()
    serializer_class = CarouselSerializer

class CarouselOneViewSet(viewsets.ModelViewSet):
    queryset = CarouselOne.objects.all()
    serializer_class = CarouselOneSerializer

class ProductsOneViewSet(viewsets.ModelViewSet):
    queryset = ProductsOne.objects.all()
    serializer_class = ProductsOneSerializer

class ProductsTwoViewSet(viewsets.ModelViewSet):
    queryset = ProductsTwo.objects.all()
    serializer_class = ProductsTwoSerializer

class ProductsThreeViewSet(viewsets.ModelViewSet):
    queryset = ProductsThree.objects.all()
    serializer_class = ProductsThreeSerializer

# class CarouselViewSet(viewsets.ModelViewSet):
#     queryset = Carousel.objects.all()
#     serializer_class = CarouselSerializer

def get_products_by_category(request):
    category = request.GET.get('category', '')  # Get the category from query parameters

    if category:
        # Filter products by category from each table
        products_one = ProductsOne.objects.filter(category=category)
        products_two = ProductsTwo.objects.filter(category=category)
        products_three = ProductsThree.objects.filter(category=category)

        # Serialize the querysets to JSON
        products_one_data = serializers.serialize('json', products_one)
        products_two_data = serializers.serialize('json', products_two)
        products_three_data = serializers.serialize('json', products_three)

        # Combine the serialized data
        all_products = products_one_data + products_two_data + products_three_data
    else:
        # If no category is specified, return all products from all tables
        products_one = ProductsOne.objects.all()
        products_two = ProductsTwo.objects.all()
        products_three = ProductsThree.objects.all()

        products_one_data = serializers.serialize('json', products_one)
        products_two_data = serializers.serialize('json', products_two)
        products_three_data = serializers.serialize('json', products_three)

        all_products = products_one_data + products_two_data + products_three_data

    return JsonResponse({'products': all_products}, safe=False)
