const path = require('path');

//path join (necesita del dirname)
console.log("Path.join",path.join('a', 'b', 'c'));

//path resolve, me da la ruta (no es necesario el dirname)
console.log("Path.resolve",path.resolve('a', 'b', 'c'));

//dirname
console.log("dirname", __dirname);

//npm init -y, genera un nuevo proyecto de node

//npm i express -S o -D