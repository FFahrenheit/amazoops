# docker build . -t node-api-products:latest
# docker run --env-file=./.env -p 3301:3001 node-api-products:latest

FROM node:20-bullseye-slim

WORKDIR /app-products

COPY . .

RUN npm install

EXPOSE 3301

CMD ["npm", "start"]
