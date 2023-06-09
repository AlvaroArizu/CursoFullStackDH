/* 
! Raiz
! About
! Contact
! Login
! Logout
*/

const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

//Raiz
router
    .get('/', mainController.home)
    .get('/contact', mainController.contact)
;

//detalle peliculas
router.get('/pelicula/:id', mainController.detail)



module.exports = router;