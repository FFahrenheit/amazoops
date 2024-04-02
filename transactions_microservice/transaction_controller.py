from database import Database
import json

class TransactionController:
    def __init__(self) -> None:
        self.db = Database()

    def process_transaction(self, body):
        request = json.loads(body)
        order = request['order']
        payment = request['payment']

        db_order = self.db.get(order)
        product_stocks = self.db.find({
            "type": "product"
        }) 
        # Products Map
        products = {}
        total = 0
        success = True
        updated_docs = []


        for product in product_stocks:
            products[product['_id']] = product

        # Check stock
        for product in db_order['products']:
            db_product = products[product['_id']]
            if db_product['stock'] >= product['quantity']:
                total += product['total']
                db_product['stock'] -= product['quantity']
                updated_docs.append(db_product)
            else:
                success = False
                break

        print(total, db_order['total'])

        if success:
            if round(total, 2) != round(db_order['total'], 2):
                print('Orden confirmada')
                db_order['status'] = 'En investigación'
                updated_docs = [ db_order ]
            else:
                print('Orden confirmada')
                db_order['status'] = 'Confirmada y preparando envio'
                updated_docs.append(db_order)
        else:
            print('Orden cancelada, no hay suficiente stock')
            db_order['status'] = 'Cancelada: No hay suficiente stock'
            updated_docs = [ db_order ]

        self.db.update_bulk(updated_docs)