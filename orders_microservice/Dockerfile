# docker build . -t node-api-orders:latest
# docker run --env-file=./.env node-api-orders:latest -p 3302:3002
# docker rm orders_microservice
# docker-compose up -d

FROM node:20-bullseye-slim

WORKDIR /app-orders

COPY . .

RUN npm install

EXPOSE 3302

CMD ["npm", "start"]
