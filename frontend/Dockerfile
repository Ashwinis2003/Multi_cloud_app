# Use a lightweight web server
FROM nginx:alpine

# Copy frontend files to the Nginx HTML directory
COPY public /usr/share/nginx/html

# Expose the port (should match the Kubernetes service port)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


