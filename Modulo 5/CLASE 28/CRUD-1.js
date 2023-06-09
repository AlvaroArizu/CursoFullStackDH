/*
? Que es un CRUD?
* Hace referencia a las siglas: Create, Read, Update y Delete. Es un proceso que nos permite crear, leer, actualizar y borrar registros de nuestra base de datos. Un proceso muy natural para cualquier persona que trabaje del lado del back-end.
* Para llevar a cabo dicho proceso vamos a sustentarnos en los métodos de HTTP

! Metodos HTTP
! Procesamiento GET
! Procesamiento POST
! Procesamiento PUT y DELETE
! Error 404
! Path y FS

TODO Metodos HTTP 
El protocolo HTTP define reglas para que la info pueda ser procesada correctamente

*Metodos de transaccion
Es un flujo de transaccion, en expresse se ejecuta sobre app.js o router.js

*Metodo GET: 
con este metodo se solicita datos al servidor 

*Metodo POST: 
con este metodo podemos enviarle datos al servidor, sirve para crear registros. Post es mas seguro que get

*Metodo PUT: 
con este metodo se remplaza info existente. Ej cambiar el usuario 

*Metodo DELETE: 
con este metodo podemos borrar un registro exitente en el servidor

TODO: Los formularios de HTML no soportan los metodos: PUT, PATH, DELETE.

TODO Procesamiento GET
Las peticiones que se hacen por GET son todas aquellas donde la info viene directamente ene la URL 

*Se usa GET para:
    - Retornar vistas
    - Retornar archivos
    - Retornas datos
Las rutas reciben 2 parametros: un string y un callback

*Peticiones por GET 
//Enrutadorador
router.get("/peliculas", (req, res) => { res.render('peliculas')} );

// Enrutador con controlador
const controller = {
    todas: (req, res) => { res.render('peliculas')}
};
router.get("/peliculas", controller.todas );

// Sobre la ejecución de Express
app.get("/peliculas", (req, res) => { res.render('peliculas')} );
{}

* Query string
Es una cadena de texto —conocida como cadena de consulta— que viaja en la 
URL al momento de hacer una petición al servidor mediante GET.
● Comienza al final de la ruta con el signo ?. 
● Está formado por uno o más pares clave=valor. 
● En el caso de haber más de un par, son separados por el caracter &.

Para acceder al query string dentro del callback que maneja la petición lo 
haremos a través de la propiedad query del objeto request.
Esta propiedad es un objeto literal, cuyas claves y valores serán las mismas 
que viajen en la URL

!console.log(req.query.video)  "Propiedas req.query"


const express = require('express');
const router = express.Router();

const celulares = [
    {
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];

router.get('/celulares', (req, res) => {
    res.send('celulares');
    res.send(req.query.max)
})

TODO Procesamiento POST
Usamos post para:
    -Enviar info sensible al servidor.
    -Crear un nuevo recurso.
    -2 parametros: string y un callback.

*   Peticiones POST
En un contexto en donde quisiéramos agregar una nueva película a nuestro 
sistema, tendríamos que crear dos rutas: una que muestre el formulario de 
creación y otra que se encargue de procesar la información

// ruta que envía un formulario a la vista → GET
router.get('/pelicula/crear', (req,res) => {res.render('crear')});
// ruta que procesa la información del formulario → POST
router.post('/pelicula/crear', (req,res) => {...})

*Configurar el formulario
Para enviar peticiones por POST es necesario tener un formulario, y se debe onfigurar 2 propiedades.
    ? Method: define el metodo de HTTP que usaremis para enviar la info 
    ? Action: define la ruta a donde viajera esa info para ser procesada

! <form method="POST" action="/pelicula/crear">


* Capturar la info en formato JSON
Se agregan 2 lineas de codigo en app.js

! app.use(express.urlencoded({ extended: false }));
! app.use(express.json());

(Se aclara que todo la info que llegue de un formulario sea capturada en forma de objeto literal y poder convertila en formato JSON)

* req.body
La propiedad body, es un objeto literal que contendra todo la info del formulario
● El nombre de cada clave de ese objeto, será el nombre del atributo  
name de cada input del formulario.
● El valor será el dato que se haya ingresado en ese campo

* res.redirect('/')
Es para hacer un redireccionamineto

! res.redirect('/peliculas');


TODO Procesamiento PUT y DELETE
La info que viaje como peticion con estos metodos debe hacerla a traves de un formulario

* Peticiones PUT
Se usa para:
    Enviar info sensible al servidor de manera segura
    Modificar un recurso existente

En todos los casos las rutas recibirán dos parámetros:
● Un string con la ruta que estaremos procesando.
● Un callback donde definiremos qué lógica ejecutaremos cuando el 
cliente pida esa ruta.

En un contexto en donde quisiéramos modificar datos de una película 
almacenada en nuestro sistema, tendríamos que crear dos rutas: una que 
muestre el formulario de edición y otra que se encargue de procesar la 
información


// ruta que envía un formulario de edición a la vista → GET
router.get('/pelicula/:id/editar', (req,res) => {res.render('editar')});
// ruta que procesa la información del formulario → PUT
router.put('/pelicula/:id/editar', (req,res) => {...});
{}

* Peticiones DELETE
Se usa para
    Eliminar un recurso existente

// ruta que procesa la información del formulario → DELETE
router.delete('/pelicula/:id/eliminar', (req,res) => {...})


* Peticiones PUT y DELETE
En el callback de las peticiones DELETE y PUT tendremos que definir la 
lógica de lo que queremos implementar con esa información que recibimos.
Normalmente al terminar de procesar el pedido haremos un 
redireccionamiento hacia otra página que muestre el resultado de la acción.
router.post('/pelicula/:id/eliminar', (req,res) => {
    // Eliminamos la película solicitada
    // Si todo sale bien, redirigimos al listado de películas.
    res.redirect('/peliculas');
});
{}

* Habilitar métodos HTTP
Los métodos PUT y DELETE no son soportados por los formularios de HTML. 
Para poder recibir información usando estos métodos es necesario instalar el 
paquete method-override:
!npm install method-override --save>

Una vez instalado, hay que configurar la aplicación en app.js para poder 
sobreescribir el método original y poder implementar los métodos PUT o 
DELETE:
! const methodOverride = require('method-override');
! app.use(methodOverride('_method'));{}


*Configurar el form
Hay que agregar un query string al action deo formulario, segun el metodo a utilizar:
● ?_method=PUT
● ?_method=DELETE

<form method="PUT" action="/pelicula/:id/editar?_method=PUT"

TODO Error 404
Es un error que envía el servidor 
cuando no encuentra un recurso 
que solicitó el cliente.

* Preparando el sistema
Cada sistema debe estar preparado para manejar las solicitudes erradas. 
Express trae consigo una respuesta automatizada para cuando el usuario 
solicita un contenido que ya no existe en el servidor

? En app.js: 
app.use((req, res, next) => {
    res.status(404).render('not-found');
})

TODO Path y FS
! Lectura y escritura de archivos

? readFileSync()
Es un método que trae el paquete nativo file system que nos permite 
recuperar datos de un archivo para poder usarlos.
1er parametro: recibe la ruta del archivo que queremos leer
! const fs = require('fs')
! let sitcoms = fs.readFileSync('sitcoms.txt');

Para poder decodificar los datos que el método devuelve es fundamental pasarle un segundo parámetro aclarando el tipo de encoding.
! let sitcoms = fs.readFileSync('sitcoms.txt', 'utf-8');

* Si estamos leyendo un archivo JSON, hay que convertir ese string en un objeto literal para poder manipular los datos usando el metodo JSON.parse()
! let users = fs.readFileSync('users.json', 'utf-8');
! let usersJson = JSON.parse(users);

? writeFileSync()
Es un método que trae el paquete nativo file system que nos permite escribir 
archivos. 
Recibe dos parámetros:
● El primero, el archivo en donde queremos escribir.
● El segundo, el contenido que queremos escribir.

Algo importante a tener en cuenta es que, si le pasamos el nombre de un 
archivo que aún no existe, el mismo método se encargará de crearlo.
Otra cosa importante a tener en cuenta es que este método borra todo el 
contenido existente y lo reemplaza por el nuevo

!const fs = require('fs');
!fs.writeFileSync('estrenos-2020.txt','Titanic 2');

*Preparando el contenido
Los métodos de escritura de archivos que trae file system solo pueden 
recibir contenido que sea de tipo string.
Para convertir en JSON: utilizamos el método JSON.stringify()
! const fs = require('fs');

! let pelicula = {
!   titulo: 'Titanic', 
!    minutos: 560
!};

! let peliculaJson = JSON.stringify(pelicula);

! fs.writeFileSync('titanic.json', peliculaJson);

? appendFileSync()
Es un método que trae el paquete nativo file system que nos permite 
agregar contenido a archivos. 
Recibe dos parámetros:
● El primero, el archivo en donde queremos escribir.
● El segundo, el contenido que queremos escribir.

Al igual que writeFileSync(), si le pasamos el nombre de un archivo que aún 
no existe, el mismo método se encargará de crearlo.

A diferencia de writeFileSync(), este método agrega contenido al final del 
contenido existente sin borrarlo

!const fs = require('fs');
!fs.apppendFileSync('estrenos-2021.txt','Titanic 3');



    
*/