# management/commands/populate_database.py

from django.core.management.base import BaseCommand
import requests
from task3.models import ArtPiece

class Command(BaseCommand):
    help = 'Populate the database with art pieces from the Art Institute of Chicago API'

    def handle(self, *args, **kwargs):
        self.fetch_art_pieces_with_cats()
    def fetch_art_pieces_with_cats(n=25):
        API_ENDPOINT = "https://api.artic.edu/api/v1/artworks/search"
        
        # The parameters to search for artworks with "cats" and are in the public domain
        params = {
            'q': 'cats',
            'query[term][is_public_domain]': 'true',
            'limit': n,
            'fields': 'id,title,artist_title,date_start,image_id,thumbnail,description',
            # You can further include random sorting or any other parameters if needed
        }

        response = requests.get(API_ENDPOINT, params=params)
        if response.status_code == 200:
            data = response.json()
            artworks = data.get('data', [])

            # Convert API response to Django model (ArtPiece)
            for artwork in artworks:
                art_piece = ArtPiece(
                    title=artwork['title'],
                    artist=artwork['artist_title'],
                    date_created=artwork['date_start'],
                    image_url=f"https://www.artic.edu/iiif/2/{artwork['image_id']}/full/843,/0/default.jpg" if artwork['image_id'] else None,
                    description=artwork['description'],
                )
                art_piece.save()
        else:
            print(f"Failed to fetch data. Status code: {response.status_code}")

    fetch_art_pieces_with_cats()
