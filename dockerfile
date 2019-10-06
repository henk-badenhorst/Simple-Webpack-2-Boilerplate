# Build App
FROM node:lts-alpine as builder
RUN mkdir -p /var/tmp/frontend
WORKDIR /var/tmp/
COPY /package.json /package-lock.json /frontend/
RUN cd /frontend && npm install
COPY . /frontend/
RUN cd /frontend && npm run build

# Serve Build with Nginx
FROM nginx:stable-alpine
COPY /nginx.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /var/www/frontend
COPY --from=builder /frontend/dist /var/www/frontend
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]