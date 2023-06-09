const path = require('path');

/* Para mandar
const mainController = {
    home: function (req, res) {
        res.sendFile(path.resolve("./views/home.html"));
    }
}
*/
let peliculas = [
    {
        id: 1,
        title: "Star Wars",
        anio: 2003,
        image: "https://static.wikia.nocookie.net/esstarwars/images/d/dd/Star_Wars_epI.jpg/revision/latest?cb=20060331023235",
    },
    {
        id: 2,
        title: "Star Wars 2",
        anio: 2005,
        image: "https://static.wikia.nocookie.net/esstarwars/images/7/7c/Episode_two_poster.jpg/revision/latest?cb=20060405025053,"
    },
    {
        id: 3,
        title: "Star Wars 3",
        anio: 2006,
        image:"https://static.wikia.nocookie.net/esstarwars/images/f/fa/Ep3_poster.jpg/revision/latest?cb=20060407220934",
    },
];


//Este es el controlador, quien le dice q la vista que mostrar
const mainController = {
    home: function (req, res){
        res.render("home", {
            lista: peliculas
        });
    },
    contact: function (req, res){
        res.render("contact", {
            title: "contacto"
        });
    },
    detail:  (req, res) =>{
        let peliculaId = req.params.id;

        let pelicula = pelicula.find(pelicula => pelicula.id == peliculaId)

        res.render("detallePelicula", {
            movie: pelicula
        });

        }
    }


//Exporto al controlador
module.exports = mainController;