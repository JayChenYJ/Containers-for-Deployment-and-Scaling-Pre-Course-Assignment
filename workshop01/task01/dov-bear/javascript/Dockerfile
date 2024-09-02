FROM node:22

# Create a directory /app and set it as the working directory
WORKDIR /app

# Copy source files to the container
COPY main.js .
COPY package*.json .
COPY public public
COPY views views

# Install node modules
RUN npm ci

# Define environment variable for the app port
ENV PORT=5000
ENV INSTANCE_NAME=dov-bear
ENV INSTANCE_HASH=jaychenyj

# Expose the port that the app will run on
EXPOSE ${PORT}

# Run the application
ENTRYPOINT node main