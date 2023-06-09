let express = require('express');
let router = express.Router();

let mainController = require('../controller/mainController')

/* GET home page. */
router.get('/', mainController.home);
router.get('/menu/:id', mainController.menu);


module.exports = router;
