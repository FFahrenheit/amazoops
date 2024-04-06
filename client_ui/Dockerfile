# docker build . -t angular-client:latest
# docker run -p 8080:80 angular-client:latest
# docker rm client_ui
# docker-compose up -d

FROM node:20-bullseye-slim as angular

WORKDIR /app-client

COPY . .
RUN npm install
RUN npm run build

FROM httpd:alpine3.16

WORKDIR /usr/local/apache2/htdocs
COPY --from=angular /app-client/dist/client_ui .
