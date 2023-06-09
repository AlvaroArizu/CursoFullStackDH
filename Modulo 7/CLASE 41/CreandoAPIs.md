# Intro al Modulo
Las APIs son herramientas que podemos construir y consumir, las cuales nos proveen de información de manera sencilla y accesible en un formato que para esta altura no debe ser desconocido para nosotros: el formato JSON.
Los objetivos que queremos abarcar en este módulo son:

* Descomponer los distintos componentes que arman un servicio de API.
* Construir la API en sí.
* Testear el funcionamiento de la API.
* Usar un software que nos permita testear los distintos tipos de endpoints de nuestras API.

# Clase 41 - Creando nuestras propias APIs

* Q es el sistema de REST y para que lo usamos dentro de una API
* Como construir una API
* Como Postman nos permite tester algunos endpoints de nuestras APIs.

# Temas
* Intro
* REST
* Creacion de API propia

# Introduccion 
Endpoint, que no es otra cosa más que una URL a la cual podremos acceder para que el servidor nos dé como respuesta la información esperada

 * API: Application Programmaing Interface

Es una URL que devuelve informacion, para comunicarse entre apps

* Endpoint: es un punto de conexion donde necesitamos apuntar para obtener la info que queremos 

## REST
Una API REST es un sistema a través del cual un front-end se puede comunicar con un back-end de una manera mucho más organizada y funcional.

Un sistema REST busca implementar un esquema o protocolo que le permita a todos los sistemas que se comunican con él entender en qué forma lo tienen que hacer y bajo qué estructura deberán enviar sus peticiones para que sean atendidas.

### Arquitectura cliente-servidor:
Es una arquitectura del tipo cliente-servidor porque debe permitir que tanto la aplicación del cliente como la aplicación del servidor se desarrollen o escalen sin interferir una con la otra. Es decir, permite integrar con cualquier otra plataforma y tecnología tanto el cliente como el servidor.

![](/CLASE%2041/1.png)

### Recursos uniformes
Una arquitectura REST expone a los clientes a una interfaz uniforme
* Todos los recursos del servidor tienen un nombre en forma de URL o hipervínculo.
* Toda la información se intercambia a través del protocolo HTTP.

Esas URL son llamadas "Endpoinst"
(Conjuntos de endpoints: APIs)

El servidor nos expone la URL /productos/listar. Dicho endpoint estará ligado al recurso que nos devuelva el listado de los productos solicitados

![](/CLASE%2041/2.png)

### Sin estados (stateless)
REST propone que todas las interacciones entre el cliente y el servidor deben ser tratadas como nuevas y de forma absolutamente independiente sin guardar estado.
Es decir, debemos mandar toda la información de autenticación necesaria en cada petición que le hagamos a dicho servidor.

### Cacheable
En REST, el cacheo de datos es una herramienta muy importante, que se implementa del lado del cliente, para mejorar la performance y reducir la demanda al servidor


### Formatos 
Cuando el servidor envía una solicitud, este transfiere una representación del estado del recurso requerido a quien lo haya solicitado. Dicha información se entrega por medio de HTTP en uno de estos formatos: JSON (JavaScript Object Notation), RAW, XLT o texto sin formato, URL-encoded.

JSON es el más popular.

![](/CLASE%2041/3.png)

### JSON
Cuando queramos enviar datos en formato JSON debemos agregar un encabezado en los headers que diga:

```JSON
"Content-Type": "application/json"
{
   "id":1,
   "title": "..."
}
```
### RAW
Se utiliza para mandar datos con texto sin ningún formato en particular

### TEXT
Se utiliza para enviar datos que no sean en formato JSON como archivos HTML y CSS.

### URL-encoded
Indica que se nos van a enviar datos codificados en forma de URL. 

Por lo tanto, nos envía algo muy similar a un query string.Un dato enviado mediante este método se vería de la siguiente manera

```
email%3Dcosme%40fulanito.fox%26password%3Dverysecret
```

## RESUMEN
Una arquitectura REST se caracteriza por seguir los siguientes principios:
* Debe ser una arquitectura cliente-servidor.
* Tiene que ser sin estado, es decir, no hay necesidad de que los servicios guarden las sesiones de los usuarios (cada petición al servidor tiene que ser independiente de las demás).
* Debe soportar un sistema de cachés.
* Debe proveer una interfaz uniforme, para que la información se transfiera de forma estandarizada.
* Tiene que ser un sistema por capas invisible para el cliente.

# Creación de una API propia

* 1er paso: Identificar los objetos del modelo con sustantivos, definir coleciones y recursos individuales

* 2do paso: Crear las URL o EndPoints

* 3er paso: Lo que tiene que devolver el EndPoints(Analizar la estructura/Buen disenio)

* 4to paso: Asociar con los metodos HTTP
    * Get (Pedir info)
    * Post (Subir info)
    * Put y Patch (Actualizar)
    * Delete (Borrar)

(Cada ruta va a tener estas 5 operaciones)

USAR POSTMAN PARA CONSTRUIR UNA API

![](/CLASE%2041/Archivos/4.png)
![](/CLASE%2041/Archivos/5.png)
![](/CLASE%2041/Archivos/6.png)
![](/CLASE%2041/Archivos/7.png)


