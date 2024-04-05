from transactions_worker import TransactionsWorker

if __name__ == '__main__':
    worker = TransactionsWorker()
    worker.start_consuming()