from database import Database
import json

class TransactionController:
    def __init__(self) -> None:
        self.db = Database()

    def process_transaction(self, body):
        request = json.loads(body)
        print('TODO: Process request')
        print(request, type(request))
