# Clase 42

* Entender cómo consumir una API de terceros.

* Saber leer la información de una API de terceros para consumir la misma dentro de nuestro sistema

* Consumir la API de terceros dentro de nuestros controladores para contar con esta información directamente en el back-end

* Cómo trabajar con distintos llamados a varias APIs al mismo tiempo.


# PostMan
Es una herramienta que simplifica la tarea de probar el funcionamiento de una API. Especialmente si el front-end aún no está desarrollado, ya que directamente nos podemos conectar a la API y testear cada uno de los endpoints que la misma provee, sean puntos que atienden peticiones de tipo GET, POST, PUT o DELETE.

# Node Fetch
Es un paquete npm que nos permite hacer pedidos a una API desde nuestro back-end

## Instalacion
```
npm install node-fetch
```

## Implementacion en el controller
Para implementarlo hay que requerirlo

```javascript
const fetch = require('node-fetch');
module.exports = {
   read: (req, res) => {
      fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
   .then(countries => {
           res.render('countries' , { countries })
       })
   }
}
```
* Utiliza promesas para realizar pedidos. Una vez indicamos  nuestro endponit dentro del fetch, utilizamos .then() para indicar que queremos que haga con la respuesta de nuestros pedidos. En este caso, lo convertimos a JSON.

* Una vez el pedido este en formato JSON, con otra promesa podemos hacer con nuestra respuetsa lo que queramos. Por ej, mandarla como variable a una vista 


