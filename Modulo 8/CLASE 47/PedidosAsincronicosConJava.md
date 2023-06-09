# CLASE 47

Pedidos asincrónicos, más exactamente de las funcionalidades que nos da FETCH

## Te mas de la clase 
* Fetch
* objeto location 
* almacenamiento local.

# Fetch
Las solicitudes asincrónicas son un pilar fundamental del desarrollo con JavaScript, sobre todo cuando nos encontramos del lado del front-end. Con ellas podremos hacer peticiones a distintas APIs y consumir los datos que estas nos proveen de forma dinámica y sin poner en riesgo la carga del resto de nuestra funcionalidad.

En la actualidad, JavaScript nos provee las funcionalidades de FETCH. Las cuales son de gran utilidad ya que nos permiten, de una manera sencilla y rápida, establecer una comunicación con un servidor a través de los distintos endpoints que nos provea su API.

**Fetch es una función nativa que nos permite hacer pedidos a una API desde nuestro front-end.**


Recibe como primer parámetro la URL del endpoint al cual estamos haciendo el llamado asincrónico. Al no saber cuándo se completa la petición, el servidor devuelve una promesa.

```js
fetch("https://restcountries.eu/rest/v2/")
```

## Resolvemos la promesa
El primer then será el encargado de recibir un callback y retornará la respuesta de ese llamado asincrónico en formato JSON.

```js
fetch("https://restcountries.eu/rest/v2/")
.then(function(response){
   return response.json();
})
```

## Obtenemos los datos
Una vez que la respuesta de nuestro pedido está en formato JSON, a través de otra promesa, podemos hacer con nuestra respuesta lo que queramos.

```js 
fetch("https://restcountries.eu/rest/v2/")
.then(function(response){
   return response.json();
})
.then(function(data){
   console.log(data)
})
```

## Atrapamos los errores
En el caso de haber algún error, el catch() se encargará de atraparlo y luego lo imprimirá por consola.

```js
fetch("https://restcountries.eu/rest/v2/")
.then(function(response){
   return response.json();
})
.then(function(data){
   console.log(data)
})
.catch(function(error){
   console.error(error)
})
```

# Objeto location
Acceder a él es tan sencillo como escribir location en nuestro archivo de JavaScript. Con él, vienen una serie de métodos y atributos muy interesantes.

* Si usamos el atributo href, nos devuelve toda la URL
```JS
console.log(location.href);
```

* Si queremos recargar la página, podríamos usar el método reload.
```js
location.reload();
```

## Query string
Cuando realizamos una petición por GET en una búsqueda, location nos provee un atributo llamado search para obtener el query string entero.Para utilizar esos datos debemos utilizar la interfaz de URLSearchParams.


```js
let query = new URLSearchParams(location.search);
if(query.has('search_query')){
  let search = query.get('search_query');
  console.log(search)
};
```

# Session storage y local storage

La función de ambos es almacenar datos en el navegador:

* LocalStorage nos permitirá almacenar información por tiempo indeterminado.
* SessionStorage nos permitirá guardar información en sesión. Eso quiere decir que si usamos esta opción y cerramos el navegador, la información aquí almacenada se perderá.

## Session storage
Nos permitirá guardar información en sesión. Es decir que si usamos esta opción y cerramos el navegador, la información aquí almacenada se perderá

```js
sessionStorage.setItem('key', 'value')
```
```js
sessionStorage.getItem('key')
```
```js
sessionStorage.removeItem('key');
```
* Solo podemos almacenar datos en formato STRING.

## Local storage
Los datos almacenados en localStorage no tienen fecha de expiración.
```js
localStorage.setItem('key', 'value')
```
```js
localStorage.getItem('key')
```
```js
localStorage.removeItem('key');
```
* Solo podemos almacenar datos en formato STRING.