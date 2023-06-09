const {Movie} = require('../database/models');
//const Movie = db.Movie;


//const {Movie} = require('../database/models'); //[OTRO FORMA DE HACER LO MISMO MAS FACIL]

module.exports ={
    list : ( req, res)=> {
        //return res.send('vamos por aqui')
        Movie.findAll()
        .then(movies =>{
            res.render('moviesList', {movies});
        })
    }
}
