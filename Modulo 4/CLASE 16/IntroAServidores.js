/*
ARQUITECTURA CLIENTE-SERVIDOR

-Cliente: quien hace peticion de servicios a un servidor
-Servidor: equipo q brinda ese servicio al clinete

+La app tiene 2 claros frentes:
   - Fron end: todo lo que pasa del lado del cliente en el navegador
      Html: estructura
      CSS: estilos visuales
      JS: interaccion
   - Back end: todo lo que sucede en el servidor
      PHP: para sitios web dinamicos
      MySQL: manejo de base de datos
      JS

INTRO A HTTP

Protocolo de Transferencia de HiperTexto— es un protocolo que sirve para gestionar la comunicación entre dos máquinas conectadas a una red. En donde una pide por un contenido específico y la otra se encarga de responder a dicha solicitud.

 URI:
    URL: Indica donde se encuentra el recurso que deseamos obtener y siempte comienza con un protocolo "http"
     ejemplo:

     http://www.digitalhouse.com/preguntas-frecuentes
   Protocolo     Host             Path de recurso
                               Puerto
              http://localhost:3000/un-path/de-recurso


    URN: nombre exacto del recurso informe
 
 Metodos de peticiones: indica la accion q se desea realizar con un recurso determinado
 Metodos mas utilizados:
        -GET: para solicitar datos
        -Post: enviat datos, es mas seguro
        -Put: enviar datos, reemplaza toda la info de un recurso
        -Patch: envia datos, reemplaza info parcial de un recurso
        -Delete: envia una peticion para eliminar un recurso del servidor

INTRO A EXPRESS

Va a permitirnos crear, con poco código, nuestro primer servidor web y hacer que este pueda escalar fácilmente y ser utilizado en el ámbito profesional

¿qué es un framework?

Un framework es un entorno de trabajo que trae resueltas una serie de tareas, automatizando así el desarrollo de cualquier aplicación. Los frameworks de Node.js se utilizan principalmente por su productividad, escalabilidad y velocidad.

Una vez instaldo "npm install express --save", en ek archivo .js hay que requirir el package.json

const express = requiere('expres'), esto tiene todo la funcionaliad del framework

const app = express(); , aca estan disponibles todo los metodos

npm init -y

SERVIDOR WEB CON EXPRESS

1er paso:

 npm install express --save, en la terminal
 const express = require('express');
 const = express();

 app.listen(3000, () => {
   console.log('Servidor corriendo)
 )}


INTRO A Routing y Response

const express = require('express');
const = express();

app.listen(3000, () => {
   console.log('Servidor corriendo)
)}

Como le explicamos las rutas del sitio we:

app.get('/contacto', function(req, res){
   ret.send('Dejanos tu contacto");
});

app.get('/', function(req, res){
   res.send('Bienvenidos al sitio');
});

[2 Parametros: req y res, ]

ENVIAMOS ARCHIVOS AL NAVEGADOR

res.sendFile()

path.join (ruta absoluta)

path.resolve

DIFERENCIA ENTRE AMBOS: Join es menos potente, con el resolve puedo obviar el __dirname(Este da la ruta absoluta)




*/