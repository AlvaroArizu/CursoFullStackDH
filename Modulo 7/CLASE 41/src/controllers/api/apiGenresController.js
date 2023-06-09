const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: 'localhost:3001/api/genres'
                    },
                    data: genres
                }
                res.json(respuesta)
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: genre.length,
                        url: 'localhost:3001/api/genres/detail/:id'
                    },
                    data: genres
                }
                res.json(respuesta)
            });
    }

}

module.exports = genresController;