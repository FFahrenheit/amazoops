# Uso de SonarQube

SonarQube es una plataforma de código abierto para la inspección continua de la calidad del código a través de diferentes herramientas de análisis estático de código fuente. Proporciona métricas que ayudan a mejorar la calidad del código de un programa permitiendo a los equipos de desarrollo hacer seguimiento y detectar errores y vulnerabilidades de seguridad para mantener el código limpio.

## Implementación

Para usar SonarQube podemos instalarlo en un servidor remoto y correr la inspección directamente del repisotorio usando GitHub Actions, Azure, etc. En este caso, lo podemos intalar de forma local y correrlo con el .bat proporcionado.

En este caso, se instaló en ` D:\sonarqube-10.4.1.88267\bin\windows-x86-64>` y podemos correrlo usando `.\StartSonar.bat`

Creamos en la raíz del proyecto nuestro archivo `sonar-project.properties` con las propiedades del proyecto creado en la interfaz local de SonrQube

Finalmente, analizaremos el código con el comando 

```
sonar-scanner.bat -D"sonar.projectKey=amazoops" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar token=sqp_b634724ff9a80be9ac0ec16a2db2020b43dc0014"
```

Y veremos los resultados en la consola