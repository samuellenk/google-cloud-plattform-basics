# Use lightweight Node.js 12
FROM node:12-slim
# Create and change to the app directory
WORKDIR /usr/src/app
# Copy dependency manifests to container image
COPY package*.json ./
# Install production dependencies
RUN npm install --only=production
# Copy local code to container image
COPY . ./
# Run web service on container startup
CMD [ "npm", "start" ]
