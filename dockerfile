# Stage 1: Build the app
FROM node:18-alpine AS build

WORKDIR /app

# Copy only package files first (for build caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of your project
COPY . .

# Build the site
RUN npm run build

# Stage 2: Static file server with Nginx
FROM nginx:alpine

# Remove default Nginx page and copy your build output
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html

# Optionally, add a custom Nginx config if you need SPA routing
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
