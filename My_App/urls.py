# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.index, name='index'),  # Routes to the 'home' view
# ]

from django.urls import path
from .views import ExampleView
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import CarouselViewSet, ProductsOneViewSet, ProductsTwoViewSet, ProductsThreeViewSet,CarouselOneViewSet

urlpatterns = [
    
    path('api/example/', ExampleView.as_view(), name='example'),
    path('api/products/', views.get_products_by_category, name='get_products_by_category'),
    
    
]


router = DefaultRouter()
router.register(r'products_one', ProductsOneViewSet)
router.register(r'products_two', ProductsTwoViewSet)
router.register(r'products_three', ProductsThreeViewSet)
router.register(r'carousel', CarouselViewSet)
router.register(r'carouselOne', CarouselOneViewSet)
urlpatterns = [
    path('api/', include(router.urls)),
]
