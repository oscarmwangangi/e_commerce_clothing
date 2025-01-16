from rest_framework import serializers
from .models import ProductsOne, ProductsTwo, ProductsThree, Carousel,CarouselOne

class ProductsOneSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductsOne
        fields = '__all__'

class ProductsTwoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductsTwo
        fields = '__all__'

class ProductsThreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductsThree
        fields = '__all__'

class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carousel
        fields = '__all__'

class CarouselOneSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarouselOne
        fields = '__all__'
