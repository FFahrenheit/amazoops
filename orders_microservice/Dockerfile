# Node version
FROM node:20-bullseye-slim

WORKDIR /app-orders

COPY . .

RUN npm install

EXPOSE 3302

CMD ["npm", "start"]
