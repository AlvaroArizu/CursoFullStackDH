const fs = require('fs');

let datos = fs.readFileSync(__dirname + '/bicicletas.json', 'utf-8');

//Hay q volverlo array

let bicicletasArray = JSON.parse(datos);
 
//Hay q exportar el modulo
module.exports = bicicletasArray;