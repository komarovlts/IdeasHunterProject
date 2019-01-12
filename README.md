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
