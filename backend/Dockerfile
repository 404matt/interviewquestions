FROM python:3.9

# Environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Copy the entrypoint script into the container
COPY ./entry-and-populate-db.sh /entry-and-populate-db.sh
# Make the script executable
RUN chmod +x /entry-and-populate-db.sh

# Install dependencies
RUN pip install --upgrade pip
COPY requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

# Set working directory
WORKDIR /backend
