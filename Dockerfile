# Use official Node.js image as the base image
FROM node:20.11-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js is running on
EXPOSE 3000

# Set environment variables for configuration
ENV NODE_ENV=production
ENV PORT=3000

# Add labels for better maintainability
LABEL maintainer="Adam Burucs"
LABEL description="Dockerfile for Meditation Calculator, Next.js version"

# Command to start the application
CMD ["npm", "start"]

#
# Build and run
# docker buildx build -t meditation-calculator-next:v01 .
# docker run -p 3000:3000 meditation-calculator-next:v01