# task3/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('artpieces/', views.ArtPieceList.as_view(), name='artpiece-list'),
]
