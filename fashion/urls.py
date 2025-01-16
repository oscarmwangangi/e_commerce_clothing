"""
URL configuration for fashion project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.shortcuts import redirect
from django.http import HttpResponse
from django.conf import settings
from django.conf.urls.static import static
from My_App.views import ExampleView 

urlpatterns = [
    path('admin/', admin.site.urls),
       path('', include('My_App.urls')),  # Include app URLs
       path('api/example/', ExampleView.as_view(), name='example'),
    path('', lambda request: redirect('/api/example/')),  # Redirect to your API
    
    
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# def home_view(request):
#     return HttpResponse("Welcome to the Fashion API backend. Go to /api/example/ to see the API.")

# # urlpatterns = [
# #     path('admin/', admin.site.urls),
# #     path('api/example/', ExampleView.as_view(), name='example'),  # Your API endpoint
# #     path('', home_view),  # Root path
# # ]