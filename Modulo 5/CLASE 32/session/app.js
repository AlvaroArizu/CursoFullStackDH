const session = require ('espress-session');
const cookieAuthMiddlewares = require ('./middlewares/cookieAuthMiddlewares');


app.use(session({secret:"Nuestro secreto"}))

app.use(cookieParse());

app.use(cookieAuthMiddlewares);