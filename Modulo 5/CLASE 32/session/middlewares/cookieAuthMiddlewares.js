function cookieAuthMiddlewares (rep, res, next){
    next();

    if (req.cookies.recordame != undefined && req.session.usersLoguearse == undefined) {
        let usersJSON = fs.readFileSync('users.json', {encoding : utf-8});
            let users;
            if (usersJSON ==""){
                users = [];
            }else {
                users = JSON.parse(usersJSON);
            }

            for (let i = 0; i < users.length; i++){
                if (users[i].email == req.cookies.recordame){
                    if (bcrypt.compareSync(req.body.password, users[i].password)){
                        let usersLoguearse = users[i];
                        break;
                    }
                }
            }
        
    }
}

module.exports = cookieAuthMiddlewares;