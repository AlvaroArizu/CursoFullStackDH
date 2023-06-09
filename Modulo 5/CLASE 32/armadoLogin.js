/* 
! Session
! Cookies
! Hashing
! Proceso completo de Login 

? Session (Es por usuario/navegador)
Es variable "global" que está accesible a lo largo de toda la aplicación y que nos permite guardar y compartir información importante entre las distintas vistas de la misma.

*Se almacena del lado del servidor
*Del lado del cliente, se genera un identificaodr unico que se asociara a ese usuario
*IMP: Cuando el usuario cierra el navegador, toda esa info se borra 


todo: Implementado SESSION
    *1ro: npm i express-session --save (en la terminal)
    *2do: const session = require('express-session); (en app.js)
    (Se configura como mddleware a nivel aplicacion. Ejecutamos session() pasando como argumento un objeto literal con la prioridad secret)
    *3ro: app.use(session({secret:"Nuestro msj secreto"})) (en app.js)

todo: Manipulando los datos de SESSION
    *1ro: req.session.idioma = 'Espaniol';
    Al momento de querer definir y almacenar info, llamamos a la propiedad session del objeto request
    *2do: let idioma = req.session.idioma;
    Para leer info de session


En app.js : 
const session = require('express-session')
app.use(session({secret:"Nuestro msj secreto"}))


Primero hacer un routes en users.js : 
let guestMiddlewares = require('../middlewares/guestMiddlewares);
let authMiddlewares = require('../middlewares/authMiddlewares);

    router.get('/register', guestMiddlewares, usersController.register);
    router.get('/login', usersController.login);

    router.post('/login',[
    check('email').isEmail().withMessage('Email invalido'),
    check('password').isLetngth({min: 8}).withMessage('La contrasenio debe tener al menos 8 caracteres')
] ,userController.processLogin);

    router.get('/check', function(req, res){
        if (req.session.usuarioLoguarse == undefined){
            res.send("No estas logueado");
        } else {
            res.send("El usuario logueado es:" + req.session.usuarioLoguearse.email);
        }

    });

Segundo en userController.js crear ese metodo: 
let usersController = [
    login: function (req, res){
        return res.render('login')
    },

    processLogin: function (req, res){
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            let usersJSON = fs.readFileSync('users.json,{encoding : utf-8});
            let users;
            if (usersJSON ==""){
                users = [];
            }else {
                users = JSON.parse(usersJSON);
            }

            for (let i = 0; i<users.length; i++){
                if (users[i].email ==req.body.email){
                    if (bcrypt.compareSync(req.body.password, users[i.password)){
                        let usersLoguearse = users[i];
                        break;
                    }
                }
            }
            if (usersLoguearse == undefined) {
                return res.render('login', {errors: [errors:
                    {msg: 'Creadenciales invalidas'}
                
                ]});
            }

            req.session.usersLoguearse = usersLoguearse;
            res.rander('success')
        } else {
            return res.render('login', {errors: errosr.errors});
        }

    }
]

Tercero en views crear login.ejs : foto


Cuarto en la carpeta mddlewares crear authMiddlawares.js:
function authMiddlewares (req, res, next){
    if (req.session.usuarioLoguearse != undefined) {
        next();
    } else {
        res.send('Esta pagina es solo para usuarios');
    }

}

module.exports = gauthMiddlewares;

Quinto en la carpeta middlewares crear guestMiddlewares.js;
function guestMiddlewares (req, res, next){
    if (req.session.usuarioLoguearse == undefined) {
        next();
    } else {
        res.send('Esta pagina es solo para invitados');
    }

}

module.exports = guestMiddlewares;


? Cookies
Una cookie es un archivo que se guarda del lado del cliente, es decir, en el navegador. Y cuyo objetivo principal es guardar información NO SENSIBLE que podamos recuperar fácilmente desde nuestra aplicación.

El uso de cookies es bastante importante en cualquier aplicativo web.

A diferencia de la sesión, a las cookies les podemos configurar un "tiempo de 
vida". Es decir, que una cookie dejará de existir cuando expire ese tiempo y no 
cuando el usuario cierre el navegador. PORQUE VIVE DEL LADO DEL CLIENTE


TODO: IMPLEMENTANDO COOKIES
*1ro: npm i cookie-parser --save
*2do: res.cookies('club', 'C. A. Tigre');

TODO: LEYENDO COOKIES
*1ro: console.log(rep.cookies.club);

? Hashing
Es por esto que existe la encriptación de datos, la cual permite que cualquier dato alfanumérico sea convertido a un texto prácticamente ilegible. Por ejemplo, si nuestra contraseña fuera "holaMundo123", un proceso de encriptación haría que la misma se generara así: "4c35a8ddbc285e0aa079041b30c5944e96edf36a".

En informática, las funciones de hasheo nos permiten encriptar datos. Es 
decir, transformar un texto plano en una nueva serie de caracteres 

TODO: Paquete bcryptjs
* npm i --save bcryptjs
Permite incorporar funciones en nuestro proyecto

* .hashSync()
Es un metodo que trae el paquete que nos va apermitir encriptar datos. Recibe 2 parametros (Dato: lo que se va a encriptar y Sal: lo que se va a aniadir a la encriptacion)

cont bcypt = require('bcryptjs')
let passEncriptada = bcrypt.hashSync (('monito123'), 10);

* .compareSync()
Es un metodo que trae el paquete que permite comparar un texto plano contra un hash para saber si coinciden o no 
Este metodo retorna un booleano y recibe 2 parametros
    texto plano
    hash

let check = bcrypt.compareSync('monito123' passEncriptada);
console.log(check); //true


*/