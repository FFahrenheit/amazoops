# Microservicio Productos

Este microservicio es un ligero servidor express de Node.js que se encarga de gestionar operaciones de lectura y escritura sobre sesiones y usuarios, principalmente aquellos relacionados al usuario y sus órdenes
- Listar sus órdenes y el estado de ellas
- Iniciar sesión
- Crear usuarios

### Dependencias
Este microservicio utiliza un par de librerias para consultar los datos, protecciones de datos, transferencia, comunicaciones, cifrados, etc.
- pika: Para actuar como un worker en la cola de mensajes, recibiendo las transacciones en orden, garantizando la no-pérdida de órdenes y validando su procesamieento
- couchdb2: Para gestionar la conexión con la base de datos de CouchDB
- python-dotenv: Para guardar variables de entorno y contraseñas

### Justificación
Este servicio maneja datos sensibles, estrictamente en órden
- Su acceso está limitado a solamente el microservicio de placement, mediante el correcto protocolo
- Las colas de mensaje permiten un correcto órden de recepción, garantizan la llegada de mensajes, incluso si no hay clientes que lo puedan recibir, y, en caso de necesitarlo, pueden crear otro worker