# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /frontend

# Create a non-root user and switch to it
RUN useradd -m myuser

# Change the ownership of the WORKDIR to the non-root user
RUN chown -R myuser:myuser /frontend
USER myuser

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies in the container
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Specify the command to run when the container starts
CMD ["npm", "start"]
