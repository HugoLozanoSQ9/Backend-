# Node Js

¿Qués es Back End?

Es todo lo que está detras del front-end

Cualquier lenguaje puede realizar este proceso de "comunicación" en cambio lo veremos enfocado a JS 

Cuando hablamos de backend hablamos de servicios y servidores

# ¿Qué es NODE?

NODE no es un lenguaje de programación 
El lenguae es Js

Node es un Run-Time (entorno de ejecución)

también existe deno y bun js 
ambos son entornos de ejecución de js

para crear node se ocupo V8 
V8 es un programa que creo google para ejecutar Js

# ¿Como instalamos?

nvm: node version manager

Antes de instalar node primero se instala el nvm por lo que ingresamos a:
https://github.com/nvm-sh/nvm

y de ahí seleccionamos installing and updating
seleccionamos la opción que comienza con curl y enter

# Inicializar un proyecto de NODE 

npm init 

Al ejecutarlo nos va a crear un archivo package.json
En donde ( es similar al de git )
una vez hecho el npm init se procede a llenar la info que nos solicite, nose genera el json y listo :D!

se debe siempre ignorar el repositorio node_modules

##  .gitignore
dado que la carpeta de node_modules se va a ignorar
al momento de descargar el repositorio para instalar las dependencias se corre el comando: npm install

## package_lock.json
trae un resumen de las dependencias que manejamos en el proyecto es importante que se encuentre dentro del repositorio
No debe borrarse, y en caso de tener algún conflicto de got, se puede resolver corriendo npm istall para generarlo nuevamente 
## Versiones 
tanto como el package-lock.json como el package.json deben estar actualizados con las versiones

