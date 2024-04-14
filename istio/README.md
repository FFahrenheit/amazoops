# Uso de Istio

Istio es una plataforma de malla de servicios con tecnología de open source que permite controlar el intercambio de datos entre los microservicios. Incluye API que le permiten integrarse a cualquier plataforma de registro, telemetría o sistema de políticas. El diseño de esta plataforma facilita su ejecución en distintos entornos: locales, alojados en la nube, en contenedores de Kubernetes y en servicios que se ejecutan en máquinas virtuales, entre otros.
Istio gestiona los flujos de tráfico entre servicios, aplica políticas de acceso y agrupa datos de telemetría sin modificar el código de las aplicaciones. 

## Implementación de Istio

En este caso, de forma local decidimos usar Istio para analizar la el flujo de transacciones de los pods, previamente inyectos con el servicio de Istio, que tenemos en Kubernetes

Podemos verificar qué pods tienen inyectado istio con el comando
`kubectl get pods -n istio-system`

Vamos a correr los addons de istio que nos permiten visualizar las métricas del microservicio
`kubectl apply -f samples/addons`

Y verlo en el dashboard de kiali, ubicado en el puerto 20001
`istioctl dashboard kiali`