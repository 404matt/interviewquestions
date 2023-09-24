#!/bin/bash

# Sleep while postgres loads, ideally should be watching for pdb to load but I am using sleep 10 for sake of time 
sleep 10
# Apply migrations
python3 manage.py migrate

# Populate the database using Django management command
python3 manage.py populate_database

# Start the Django development server
python3 manage.py runserver 0.0.0.0:8000
