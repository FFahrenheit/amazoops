# Microservicio Productos

Este microservicio es un ligero servidor express de Node.js que se encarga de gestionar operaciones de lectura y escritura sobre sesiones y usuarios, principalmente aquellos relacionados al usuario y sus órdenes
- Listar sus órdenes y el estado de ellas
- Iniciar sesión
- Crear usuarios

### Dependencias
Este microservicio solamente utiliza un par de librerias para consultar los datos y como protecciones
- express: Para crear el servidor HTTP
- nano: Para gestionar la conexión con la base de datos de CouchDB
- http: Ya que CouchDB es una base de datos NoSQL basada en HTTP, creamos una pool de conexiones a dicha base de datos, lo cual permite limitar la carga de peticiones, así como mantener recursos equilibrados
- dotenv: Para guardar variables de entorno y contraseñas
- crypto: Para cifrar las contraseñas del usuario, tanto para inicio de sesión como para validación de sesiones
- jsonwebtoken: Para crear JWT útiles para guardar las sesiones del usuario
- cors: Para limitar los orígenes de las peticiones que pueden entrar
- sanitize: Para limitar el tipo de los datos recibidos en endpoints sensibles

### Justificación
Este servicio maneja datos sensibles, como contraseñas y órdenes, por lo cual
- Su acceso está limitado a ciertos orígenes
- Usa librerías de criptografía para garantizar más datos sobre los datos manejados
- Usa tokens como medio de autenticación para obtener datos sobre ciertos usuarios
- Utiliza herramientas más específicas de validación de tipos y sanitizantes para evitar inyecciones