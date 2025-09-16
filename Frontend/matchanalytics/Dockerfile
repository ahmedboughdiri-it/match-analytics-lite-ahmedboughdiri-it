# Stage 0: Build Angular app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --force

# Copy all source files
COPY . .

# Build Angular app for production
RUN npm run build

# Stage 1: Serve with nginx
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output to nginx html folder
COPY --from=build /app/dist/matchanalytics /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
