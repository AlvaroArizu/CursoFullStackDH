/*
! Patrón de diseño MVC
! Controladores
! Rutas parametrizadas
! Sistema de ruteo 
! Express-generator

! Patron de diseño MVC 
PATRONES DE DISENIO: Estos resuelven los problemas más comunes con los que nos encontramos al momento de programar, son un conjunto de reglas que define la estructura de un sitema.


? MVC: un patrón de diseño que busca resolver de una manera estándar el problema habitual de comunicación entre el front-end y el back-end de nuestra aplicación.
? MVC hace referencia a las siglas: Modelo, Vista y Controlador. Y propone que cada uno de estos componentes resuelva y se encargue de una particularidad en específico, sin tomar atribuciones y responsabilidades de otros componentes.
    
    *Vista se encargará de la parte visual de la aplicación
    *Modelo, de administrar la información de la base de datos 
    *Controlador, de ser un puente de comunicación entre los otros dos

! Controladores 
El Controlador es lo que conocemos tradicionalmente como: el puente entre la Vista y el Modelo. 

El Controlador es quien toma un protagonismo importante. Solo él sabe atender a las peticiones, solicitar información a la base de datos si fuese necesario y definir cuál será la respuesta que tiene que dar ante una determinada petición

Son lineas de codigop cuyo fin es atender los pedidos que hace el cliente, proveen escalabilidad y mayor control sobre el codigo

*Crear una carpeta que se llame "controllers", dentro de ella se crea un controlador por cada recurso qeu tiene la app

    ?     productosController.js 

* Un controlador es un modulo de node, esto quiere decir que se requiere y se exporta
* Es un objeto literal 
    
    const controlador = {
        index: (req, res) => {
            res.send('Indez de productos');
        }
    };

    module.exports = controlaodr;\
    

    let express = requiere('express');
    let rutasProdctos = requiere('./routes/productos.js')
    let rutasMain = requiere('./routes/main.js')

    let app = express();

    app.listen(3000, () => console.log('Esto es exiyoso'));

    app.use('/productos', rutasProductos);
    app.use('/', rutaMain);

    CARPETA controllers y productosControllers.js, marcasControllers.js

        ? productosControllers.js :
            * const productosController = requiere ('../controllers/productosControllers');
            let productosControllers ={
                listado: function(){},
                crear: function(){},
                detalles: function(res, req){
                    res.send("Bienvenidos al detalle del productos")
                },
                detalleComentario: function(){},

            };

            module.exports = productosController;

            !DONDE ESTAN LAS RUTAS: router.get('/', productosController.listado);
            let productosControllers = requiere('../controllers/productosControllers')
        
            *en app.js: recursos y prefijos
            *en productos.js:  listado y diccionario de las rutas
            *en productosControllers.js: funcionalidad y consecuencia 



            TODO: LOS NOMBRES TIENE QUE SER LO MAS ESPECIFICOS POSIBLE

! Rutas parametrizadas
Una ruta dinámica es aquella que, tal como su nombre lo indica, muestra una información u otra dependiendo de ciertos criterios. Esto la diferencia de las rutas estáticas, que son las que hemos venido trabajando hasta el momento. 

*Ej: app.get('/productos/:id', function(req, res) {
*    let idProducto = req.params.id;
*    res.send('Elegiste el producto' + idProducto);
*} )


?En app.js:
? app.get('/productos/:idProducto', function(req, res){
?     res.send("Bienvenidos al detalle del producto" + req.params.idProducto);
?})

? app.get('/productos/:idProducto/comentarios/:idComentarios?', function(req, res){
?     res.send("Bienvenidos a los comentarios del producto" + req.params.idProducto);
?})
    req.params : es un objeto literal con "propiedad/valor"

! Sistema de ruteo 
Express nos da la posibilidad de crear distintos archivos que administren las posibles rutas de nuestro sitio. Siempre teniendo en cuenta que lo importante, en esta "atomización", es la organización de nuestros archivos dentro de nuestro proyecto. Todo con el objetivo de mantener lo más estable nuestro desarrollo.

De esta manera, podemos concluir, entonces, que el sistema de ruteo dentro de un proyecto de Express no es otra cosa más que una modularización de las rutas de nuestra aplicación, que las mismas estén divididas y organizadas dependiendo de su funcionalidad.

*Hay que crear una carpeta llamada: "routes"
routes
        main.js
        marca.js
                    let express = requiere('express');
                    let router = express.Router();

                    router.get('/', function(req, res){
                        res.send("BIENVENIDOS AL SITIO WEB");
                    });

                    module.exports = route
        productos.js
                    let express = requiere('express');
                    let router = express.Router();

                    router.get('/:idProductos', function(req, res) {
                            let idProducto = req.params.id;
                            res.send('Elegiste el producto' + idProducto);
                    });

                    module.exports = router;
app.js
let express = requiere('express');
let rutasProductos = requiere('./routes/productos.js');
let rutasMain = requiere('./routes/main.js')


app.use('/productos', rutasProductos);
app.use('/productos', rutasMain);

! Estructura de archivos
Foto en archivos

! Express-generator
Es un generador de proyectos de Express. ¿Y esto qué significa? Básicamente que, corriendo un solo comando en consola, vamos a tener un gran set de archivos y su correspondiente estructura, listos para utilizar. 

Si bien esto parece ser una GENIALIDAD, en ocasiones no es tan así. Después de todo, hay que tener en cuenta que cualquier herramienta que resuelva "muchas" cosas por nosotros, a su vez, nos está abstrayendo y alejando del entendimiento de "lo que hay bajo el capot". 

No está mal usar este tipo de herramientas, pero lo que estas resuelven seguramente lo vamos a poder lograr con un par de minutos de esfuerzo y varias líneas de código.



* j
! j
? j
TODO l
*/
