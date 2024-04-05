# docker build . -t node-api-placement:latest
# docker run --env-file=./.env node-api-placement:latest -p 3303:3303
# docker rm placement_microservice
# docker-compose up -d

FROM node:20-bullseye-slim

WORKDIR /app-placement

COPY . .

RUN npm install

EXPOSE 3303

CMD ["npm", "start"]
