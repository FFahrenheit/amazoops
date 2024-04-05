# Front end 
cd ../client_ui
docker build . -t angular-client:latest
docker run --name client_ui -p 8080:80 --network api_gateway  angular-client:latest

# Product microservice
cd ../products_microservice
docker build . -t node-api-products:latest
docker run --name products_microservice --env-file=./.env --network api_gateway -p 3301:3301 node-api-products:latest