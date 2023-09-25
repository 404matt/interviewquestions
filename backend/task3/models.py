# task3/models.py
from django.db import models

class ArtPiece(models.Model):
    title = models.CharField(max_length=255)
    artist = models.CharField(max_length=255, blank=True, null=True)
    date_created = models.IntegerField(blank=True, null=True)
    image_url = models.URLField(blank=True, null=True)
