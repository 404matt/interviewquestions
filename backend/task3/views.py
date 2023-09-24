
# Create your views here.
# your_app_name/views.py

from rest_framework import generics
from django.shortcuts import render
from .models import ArtPiece
from .serializers import ArtPieceSerializer

class ArtPieceList(generics.ListAPIView):
    queryset = ArtPiece.objects.all()
    serializer_class = ArtPieceSerializer
