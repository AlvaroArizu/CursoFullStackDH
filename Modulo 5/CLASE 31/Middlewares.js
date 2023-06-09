/*
! Características de los middlewares
! Middlewares: aplicacion global
! Middlewares: aplicacion por ruta
! Introduccion a express validator
! Express validator avanzado 
! Validcion completa con Express Validator

TODO Características de los middlewares

Que es? es una capa intermedia de procesamiento lógico, entre el request y el response.

*1 Express trata al request y response como objetos. Recibe una petición, la procesa y devuelve un objeto como respuesta.

*2 Toda petición requiere de una serie de pasos para ser procesada. Express divide esas responsabilidades en funciones denominadas middlewares.

*3 Los middlewares son funciones que se ejecutan en medio de la ejecución del pedido del cliente y la respuesta del mismo.

*4 Las rutas que requieran middlewares —además del request y el response— deberán recibir un tercer parámetro: la función next.

*5 Next permite la ejecución en cadena de todas las funciones necesarias que deberán ejecutarse antes de enviarle la respuesta al cliente.

*6 Con los middlewares podemos aislar código que nos permita resolver un escenario en particular e implementarlo en donde sea necesario, evitando así repetir código.

*7 Estas funciones agregan una capa de seguridad. Si la función que definimos como middleware no retorna lo esperado, la misma cortará la ejecución en cadena y devolverá la respuesta seteada para esos casos.

TODO Middlewares: aplicacion global
Son los middlewares que queremos que se ejecuten siempre que se haga un pedido a la aplicacion, sin importat a que ruta infrese el usuario

?Como se implementa?
Invocando el metodo app.use() podemos configurr un middlewares que se va aejecutar cada vez que se haga un pedido a  nuestro servidor

Este método recibe un callback con tres parámetros:
● el objeto request.
● el objeto response.
● la función next.
app.use(function(req, res, next) {
    ...
})

?Que es next()?
Es un callback que se va a encargar de apilar todos los middlewares que apliquen a una misma peticion y luego ejecutarlos uno tras otro.

app.use(function(req, res, next) {
    ...
})

? Implementando el error 404
Es el codigo de error que representa que la ruta solicitada no fue enecontrada
*En app.js: 
    app.use((req, res, next) => {
        res.status(404).render('404-page');
        next();
    });


TODO Middlewares: aplicacion por ruta
Son los middlewares que se aplicaran unicamente a la rutas en donde los definamos 

Recibe 3 parametros (req, res, next)

function rutaDeUsuario(req,res,next) {
   // verificamos si el usuario está logueado
   // si no está logueado, podemos enviarlo al login
   // si está logueado, ejecutamos next() para seguir con la ejecución
    next();
}

Como configurarlo?
const userRoute = require('../middlewares/userRoute');
router.get('/usuario/perfil', userRoute, usersController.profile);

¿Qué es ese callback?
Es nuestro middleware. Aquella funcionalidad que queremos implementar antes de que se ejecute la acción del controlador.


TODO Intro express validator
Nos permite manejar de manera relativamente sencilla, todas las validaciones de nuetros formularios desde el lado del back-end

*Express Validator paso a paso
Nos permite validar que la info que nos llega desde el form sea la que esperamos 

1ro instalar express validator : 
    npm i express-validator --save
2do crear un array con las validaciones de cada form
    
3ro agregarlo como middlewares de la ruta que procesa el form
4to vereficar si ubo errores en la validacion desde el controlador
5to enviar los errores a la vista


? npm i express-validator --save
?Requerirlo donde vayamos a realizar las validaciones: 
    const { check } = require('express-validator'); 
    let validateRegister = []  //validaciones aquí
    
    !Metodo check(): nos permite agregar validaciones para cualquiera de los campos del formulario. Como parámetro recibe el nombre del campo a validar. Si por ejemplo queremos validar el campo name:
        const validateRegister = [ check('name') ]
    !Suponiendo que quisiéramos validar que el campo no esté vacío, sobre el método anterior, ejecutamos el método notEmpty() de la siguiente manera:
        const validateRegister = [ 
            check('name').notEmpty()
        ]


?Tipos de valicdaciones

    check('campo')
   .notEmpty() // Verifica que el campo no esté vacío

   .isLength({ min: 5, max: 10 }) // Verifica la longitud de los datos

   .isEmail() // Verifica que sea un email válido

   .isInt() // Verifica que sea un número entero


?Manejar errores 
Permite enviar un msj por cada validacion que falle, utilizando el metodo withMessage()

    check('name')
        .notEmpty().withMessage('Debes completar el nombre')
        .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres')

?Cortando la cadena de validacion
Si no cortamos la validación, el usuario recibirá todos los errores juntos en 
lugar de solo el que corresponda.
Para esos casos, podemos implementar el método bail().

check('email')
    .notEmpty().withMessage('Debes completar el email').bail()
    // En caso de que la primera validación falle,
    // las siguientes no se ejecutan para ese campo.
    .isEmail().withMessage('Debes completar un email válido')

?Array de validaciones completo 
Cuando terminemos de escribir nuestras validaciones, tendremos 
un array, con un elemento por campo, con todas sus validaciones.

const validateRegister = [
    check('name')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
    check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debes completar un email válido'),
    check('password')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga')
]

?Agregando las validaciones en las rutas
Terminada las validaciones es hora de implementarlas y para eso las agregaremos en la ruta que procese el form que queremos validar
Este middleware, se ubica entre la ruta y la accion del controlador

const validateRegister = [ ... ];
// Procesamiento del formulario de creación

router.post('/', validateRegister, userController.processRegister);




TODO Express validator avanzado (Paso a paso)

*Existen 2 tipos de validaciones la del front y la del back

! 1 La instalacion
npm i express-validator

! 2 Implementacion en las rutas
const​ { ​check​ } ​=​ ​require​(​'express-validator'​); 

*Tipo de form
    <​form​ ​action​=​"/registro" ​method​=​"post"​> 
        <​label ​for​=​"name"​>Nombre:</​label​> 
        <​input​ ​type​=​"text"​ ​name​=​"name" ​id​=​"name"​> 

        <​label ​for​=​"email"​>Correo electrónico:</​label​> 
        <​input​ ​type​=​"email"​ ​name​=​"email" ​id​=​"email"​> 

        <​label ​for​=​"password"​>Contraseña:</​label​> 
        <​input​ ​type​=​"password"​ ​name​=​"password" ​id​=​"password"​> 

        <​button​ ​type​=​"submit"​>Registrarse</​button​> 
</​form​>

*Validacones con el metodo check
! const​ ​validateRegister​ ​=​ [] 
(variable que almacenara un array de validaciones)

! check​(​'first_name'​) 
(Como parametro check recibira el nombre del capo a validar/el atributo name en el form)

! check​(​'first_name'​).​notEmpty​()
Agregamos los metodos de validaciones.
   .notEmpty() // Verifica que el campo no esté vacío

   .isLength({ min: 5, max: 10 }) // Verifica la longitud de los datos

   .isEmail() // Verifica que sea un email válido

   .isInt() // Verifica que sea un número entero

! check​(​'first_name'​).​notEmpty​().​withMessage​(​'Debes completar el nombre'​)
Podemos configurar un msj de error utilizando el metodo withMessage()

!check​(​'first_name'​) 
!    .​notEmpty​().​withMessage​(​'...'​) 
!    .​isLength​({ ​min​: ​5​ }).​withMessage​(​'...'​), 
Para tener mas de una validacion por campo

! check​(​'first_name'​) 
!    .​notEmpty​().​withMessage​(​'...'​).​bail​() 
!    .​isLength​({ ​min​: ​5​ }).​withMessage​(​'...'​), 
El metodo bail() nos permitira cortar la cadena de validaciones en cualqueir momento.Por ejemplo si un campo es obligatorio, cuando no se cumpla no tiene sentido continuar con el resto de las validaciones 


* Todo junto: 

onst​ ​validateRegister​ ​=​ [ 
check​(​'first_name'​) 
        .​notEmpty​().​withMessage​(​'Debes completar el nombre'​).​bail​() 
        .​isLength​({ ​min​: ​5​ }).​withMessage​(​'El nombre debe tener al menos 5 
caracteres'​), 
    check​(​'last_name'​) 
        .​notEmpty​().​withMessage​(​'Debes completar el apellido'​).​bail​() 
        .​isLength​({ ​min​: ​5​ }).​withMessage​(​'El apellido debe tener al menos 
5 caracteres'​), 
    ​check​(​email​) 
        .​notEmpty​().​withMessage​(​'Debes completar el email).bail(​) 
        .​isEmail​().​withMessage​(​'Debes ingresar un email válido'​), 
    ​check​(​'password'​) 
        .​notEmpty​().​withMessage​(​'Debes completar la contraseña'​).​bail​() 
        .​isLength​({ ​min​: ​5​ }).​withMessage​(​'La contraseña debe tener al menos 5 caracteres'​)


?Una vez que terminemos de escribir nuestro array de validaciones, quedara implementado en la ruta que procese el form que queremos validar

! router​.​post​(​'/register​, ​validateRegister​, ​controller.processRegister​);

! 3 Implementacion en los controladores
En este paso queda verificar los resultados tanto si la info es correcta o no 
En el controlador, utilizaremos ele metodo validationResult(), se le pasa como parametro el req y guardar los resulados en una variable
    !const​ { ​validationResult​ } ​=​ ​require​(​'express-validator'​);
    !​let​ ​errors​ ​=​ ​validationResult​(​req​
validationResult()​ nos provee un método llamado ​isEmpty()​ que nos permitirá determinar si hay 
o no errores de validación. Utilizando este método podremos escribir lógica para ambos caso

    register​: (​req​, ​res​) ​=>​ { 
        let​ ​errors​ ​=​ ​validationResult​(​req​); 

        ​if​ (​errors​.​isEmpty​()) { 
            ​// No hay errores, seguimos adelante. 
        } ​else​ { 
            ​// Si hay errores, volvemos al formulario con los mensajes. 
        } 
    },

En caso de que haya errores, vamos a querer que estos lleguen a la vista. La manera de 
lograr eso es volviendo a renderizar el formulario, pero esta vez enviándole los errores de 
validación. Para eso vamos a utilizar el método ​mapped()​ para obtener un objeto literal 
con los errores. 
Lo segundo que vamos a querer hacer es enviarle el resto de los datos completados por el 
usuario en el formulario. Recordemos que estos datos llegan en la propiedad ​body​ del 
objeto ​request​. 
Nuestro código podría verse algo así: 


​if​ (​errors​.​isEmpty​()) { 
        ​// No hay errores, seguimos adelante 
    } ​else​ { 
        // Hay errores, volvemos al formulario con los mensajes 
        ​res​.​render​(​'register'​, { ​errors​: ​errors​.​mapped​(), ​old​: ​req​.​body ​}); 
    } 

! 4 Implementacion en las vistas
Haciendo uso de EJS, podremos preguntar si un campo determinado tiene errores. Si ese es el caso, podremos mostrar el msj de errror

Es importante tener en cuenta que la primera vez que se cargue el formulario no habrá 
errores, y por lo tanto esa variable estará vacía. Para evitar problemas, siempre debemos 
preguntar si la variable de errores existe antes de intentar mostrar un error. 
El código podría verse de la siguiente manera: 

    <​label ​for​=​"email"​>Correo electrónico:</​label​> 
    <​input​ ​type​=​"email"​ ​name​=​"email" ​id​=​"email"​> 
    ​<%​ ​if​ (​locals​.​errors​ ​&&​ ​errors​.​name​) { ​%> 
        <​p​ ​class​=​"feedback"​>​<%=​ ​errors​.​name​ ​%>​</​p​> 
    ​<%​ } ​%> 

Otro punto importante es que si el usuario ya completó el formulario, pero puso 
información inválida en algún campo, no vamos a querer que complete todo nuevamente. 
Por esa razón en el paso anterior volvimos a enviar los datos del formulario original en el 
objeto ​old​. Con EJS podemos cargar ese valor en cada campo que corresponda. 

<​label ​for​=​"email"​>Correo electrónico:</​label​> 
    <​input​ ​type​=​"email"​ ​name​=​"email" ​id​=​"email"  
            ​value​=​"​<%=​ ​locals​.​old ​&&​ old​.​email​ ​%>​"​>​. 

! CONCLUSION 
Las validaciones son imprescindibles si queremos que nuestro sitio funcione                   
correctamente y evitar problemas cuando nuestros usuarios lo utilicen

*/