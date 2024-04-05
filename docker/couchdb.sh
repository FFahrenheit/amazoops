docker run --name my-couchdb -p 15984:5984 --network api_gateway -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=Fallas2024 -d couchdb

docker run --name my-couchdb-app -p 15984:5984 --link my-couchdb:couchdb -d node-api-products:latest