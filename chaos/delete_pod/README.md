# Borrando pods con Chaos Toolkit

Este experimento detiene pods de un microservicio usando Chaos Toolkit, de forma que comprobemos si Kubernetes maneja el reinicio de estos

Primero verificamos el estado de los pods usando
`kubectl get pods`

Para correr el experimento usamos
`chaos run .\experiments.json`

Veremos los resultados del experimento, podemos verificarlo usando nuevamente
`kubectl get pods`