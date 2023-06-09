let usersController = {
    login: function (req, res){
        return res.render('login')
    },

    processLogin: function (req, res){
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            let usersJSON = fs.readFileSync('users.json', {encoding : utf-8});
            let users;
            if (usersJSON ==""){
                users = [];
            }else {
                users = JSON.parse(usersJSON);
            }

            for (let i = 0; i < users.length; i++){
                if (users[i].email == req.body.email){
                    if (bcrypt.compareSync(req.body.password, users[i].password)){
                        let usersLoguearse = users[i];
                        break;
                    }
                }
            }
            if (usersLoguearse == undefined) {
                return res.render('login', {errors: [
                    {msg: 'Creadenciales invalidas'}
                
                ]});
            }

            req.session.usersLoguearse = usersLoguearse;

            //cookies 
            if(req.body.recordame != undefined){
                res.cookie('recordame', usersLoguearse.email, {maxAge: 60000 })
            }


            res.rander('success')
        } else {
            return res.render('login', {errors: errosr.errors});
        }

    }
}