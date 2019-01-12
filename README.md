Aplicación realizada con MongoDB, Spring Boot y ReactJS

Sólo se ha de instalar MongoDB y Node.js como tecnologías

Usando Mac, una vez instalado MongoDB, si no está siendo ejecutado como servicio, utilizar el comando:

        mongod

y dejar funcionando ese terminal.

-> Para crear la base usar el comando:

        mongo

    abrirá la shell de mongo, luego usar:

    use nombreBaseDeDatos

    y con eso ya se habrá creado la base de datos.

-> Para ver la base de datos por la shell de mongo, usar el comando:

        show dbs

    (Las bases de datos recién creadas no se verán hasta que se le introduzca al menos un dato)


-> En la ruta:

        IdeasHunterProject/src/main/resources/application.properties

    Están las configuraciones de la base de datos.



Dependencias a instalar dentro de la carpeta frontend:

    npm install

    npm install --save react-router-dom

    npm install --save-dev bootstrap

    npm install --save axios

    npm install moment

Consideraciones:

    -> Cada vez que se desea que los cambios en el frontend se hagan efectivos en el
       localhost:8080 se debe usar el siguiente comando dentro de la carpeta frontend:

        npm run build

        esto debe ser con el backend parado.

    -> Para trabajar sólo en el frontend utilizar:

        npm start

        accesible desde:

        localhost:3000

    -> El backend se puede echar a andar utilizando el siguiente comando:

        ./gradlew bootRun

        dentro de la carpeta ideashunter y se es accesible a él por la ruta:

        localhost:8080
