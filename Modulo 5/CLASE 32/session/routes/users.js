//let guestMiddlewares = require ('../middlewares/guestMiddlewares);
//let authMiddlewares = require ('../middlewares/authMiddlewares);


    router.get('/register', guestMiddlewares, usersController.register),
    router.get('/login', usersController.login);

    router.post('/login', [
    check('email').isEmail().withMessage('Email invalido'),
    check('password').isLetngth({min: 8}).withMessage('La contrasenio debe tener al menos 8 caracteres')
] ,usersController.processLogin)

    router.get('/check', function(req, res){
        if (req.session.usuarioLoguarse == undefined){
            res.send("No estas logueado");
        } else {
            res.send("El usuario logueado es:" + req.session.usuarioLoguearse.email);
        }

    });
