# Guía de inicio

Para correr el proyecto de forma local y comenzar a jugar un poco, es importante considerar los siguientes requerimientos

Cada carpeta de este proyecto contiene un archivo `README.md` para consultar los objetivos de cada microservicio, así como comandos y explicación de cómo ejecutar el proyecto.
Asimismo, los archivos `.sh`, `Dockerfile` y `docker-compose` cuentan con comentarios útiles para su uso.

## 1. Requirimientos de software

### 1.1 Requerimientos para deploy
Estos son los requerimientos necesarios para construir las imágenes correspondientes y correr los microservicios
- Docker Desktop
- docker-compose
- Kubernetes (habilitar dentro de Docker)
- CouchDB (se puede usar [este backup](./backup.json) para tener datos cargados)
- RabbitMQ 

### 1.2 Requerimientos para desarrollo
Para modificar el código existente, agregar funcionalidades, etc..., es necesario contar con las siguientes herramientas de desarrollo
- Node >= 16 con npm
- Framework de Angular 
- Python >= 3.9 con pip

### 1.3 Requerimientos para pruebas de tolerancia a fallas / scans
- SonarQube (local)
- Chaos Toolkit
- Istio (local)

## 2. Configuración de entornos

### 2.1 Construcción y levantamiento de imágenes
En cada microservicio existe un archivo `Dockerfile` y `docker-compose`, dentro del primero se encuentran, como comentario, los comandos para construir la imágen usando docker-compose, así como aquellos comandos para ejecutarla

### 2.2 Archivos .env
Cada microservicio utiliza archivos `.env` para colocar variables de entorno. Existe un archivo `.example.env` dentro de cada microservicio con aquellas variables que deben de colocarse dependiendo de la instalación de otros microservicios u otras credenciales (e.g. logins de CouchDB)
Para correr el entorno de desarrollo se utiliza `.env`, pero los archivos docker-compose pueden configurar un archivo `.env.production.local`, que contendrá las variables de entorno que se correran en la imagen en cuestión

## 3. Ejecución

### 3.1 Ejecución del proyecto
Una vez levantados los microservicios y el software local, es posible acceder al front-end del proyecto a través del puerto configurado en el Dockerfile o en el archivo de entorno (.env)


### 3.2 Ejecución de pruebas
Dentro de cada carpeta de pruebas (chaos, sonarqube, istio, docker), existe un archivo `README.md` con instrucciones para la ejecución de las pruebas correspondientes