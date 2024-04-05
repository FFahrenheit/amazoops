# RabbitMQ Docker image
# docker run -it --rm --name rabbitmq -p 5673:5672 -p 15673:15672 rabbitmq:3.13-management

# docker build . -t python-api-transactions:latest
# docker run --network api_gateway --env-file=./.env.production.local python-api-transactions:latest 
# docker-compose up -d

FROM python:3.9

WORKDIR /app-transactions

COPY . .

RUN pip install --no-cache-dir -r requires.txt

CMD ["python", "-u" ,"server.py"]
