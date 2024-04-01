# Para correr imagen docker de RabbitMQ
# docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.13-management
from transactions_worker import TransactionsWorker

if __name__ == '__main__':
    worker = TransactionsWorker()
    worker.start_consuming()