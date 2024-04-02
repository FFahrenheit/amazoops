import os
import couchdb2
from dotenv import load_dotenv

load_dotenv()

class Database:
    def __init__(self) -> None:        
        try:
            database_url = os.getenv('DB_URL') or 'http://localhost:5984'
            database_name = os.getenv('DB_NAME') or 'amazoops'
            self.server = couchdb2.Server(database_url)
            self.db = couchdb2.Database(self.server, database_name)
            print(f"Conectado exitosamente a [{database_name}]")
        except Exception as e:
            print(e)

    def get(self, document_id):
        try:
            result = self.db.get(document_id)
            return result
        except Exception as e:
            print(e)
    def find(self, query, fields=[]):
        try:
            result = self.db.find(selector=query, fields=fields)
            return result['docs']
        except Exception as e:
            print(e)

    def update(self, doc):
        try:
            return self.db.put(doc)
        except Exception as e:
            print(e)
    
    def update_bulk(self, docs):
        try:
            return self.db.update(docs)
        except Exception as e:
            print(e)