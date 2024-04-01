import pika
import time
import os
from dotenv import load_dotenv

load_dotenv()

class TransactionsWorker:
    def __init__(self) -> None:
        try:
            host = os.getenv('QUEUE_HOST') or 'localhost'
            port = int(os.getenv('QUEUE_HOST_PORT')) or 5672
            self.queue_name = os.getenv('QUEUE_NAME') or 'amazoops_transactions'
            self.credentials = pika.PlainCredentials(os.getenv('QUEUE_USERNAME'), os.getenv('QUEUE_PASSWORD'))

            self.connection = pika.BlockingConnection(
                pika.ConnectionParameters(host, port=port, credentials=self.credentials))
            self.channel = self.connection.channel()

            self.channel.queue_declare(queue=self.queue_name, durable=True)
            print(' [*] Microservicio de transacciones corriendo')
        except Exception as e:
            print(e)

    def start_consuming(self):
        self.channel.basic_qos(prefetch_count=1)
        self.channel.basic_consume(queue=self.queue_name, on_message_callback=self.on_request)

        self.channel.start_consuming()
    
    def on_request(self, ch, method, properties, body):
        print(f" [x] Transacción recibida {body.decode()}")
        time.sleep(3)
        print(f" [x] Transacción validada")
        ch.basic_ack(delivery_tag=method.delivery_tag)