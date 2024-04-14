# Microservicio Productos

Este microservicio es un ligero servidor express de Node.js que se encarga de gestionar operaciones públicas y solo de lectura, las cuales son principalmente
- Listar todos los productos
- Hacer una búsqueda simple de productos basado en palabras clave
- Obtener información de un solo producto

### Dependencias
Este microservicio solamente utiliza un par de librerias para funcionar, las cuales son
- express: Para crear el servidor HTTP
- nano: Para gestionar la conexión con la base de datos de CouchDB
- http: Ya que CouchDB es una base de datos NoSQL basada en HTTP, creamos una pool de conexiones a dicha base de datos, lo cual permite limitar la carga de peticiones, así como mantener recursos equilibrados
- dotenv: Para guardar variables de entorno y contraseñas

### Justificación
Este servicio solo cuenta con operaciones de lectura, por lo cual
- Está disponible públicamente, sin restringir los orígenes de las conexiones
- No usa autenticación

### Kubernetes
Este servicio, al estar expuesto al "público", fue el elegido para hacer las pruebas de Kubernetes, tanto de chaostoolkit como de istio