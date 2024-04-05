from transactions_worker import TransactionsWorker

if __name__ == '__main__':
    print('Starting worker...')
    worker = TransactionsWorker()
    worker.start_consuming()