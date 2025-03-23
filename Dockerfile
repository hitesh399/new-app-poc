# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

# Build the Next.js application
RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "dev" ]

# Inform Docker that the container listens on the specified port at runtime.
EXPOSE 3000