#!/bin/bash

ENV_FILE=".env"

# Check if the .env file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "Creating $ENV_FILE with predefined parameters..."

    # Define your predefined parameters here
    cat <<EOF > "$ENV_FILE"
    DB_NAME=mydatabase
    DB_USER=user
    DB_PASSWORD=password
    DB_HOST=localhost
    DB_PORT=5432
    EOF
else
    echo "$ENV_FILE already exists. Skipping creation."
fi

# Run docker-compose up
docker-compose up
