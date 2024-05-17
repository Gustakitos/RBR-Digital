# Use the official Node.js image.
FROM node:20-alpine

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

RUN npm install -g ts-node typescript

# Copy local code to the container image.
COPY . .

RUN npx tsc

# Start the backend service
CMD [ "npm", "run", "dev" ]
