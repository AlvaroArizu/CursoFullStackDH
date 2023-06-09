let fs = require('fs');

///console.log(fs);

//fs.readFileSync PERMITE LEER UN ARCHIVO EN LA BLIBOTECA 
//1er parametro es el archivo q quiuero leer, y para decirle donde esta le decimos con la constante __dirname
//2do parametro: utf-8, le dice al archivo quie quiero leer un archivo q puede tener tildes 
let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8');

///console.log(datos);

//Para crear yo un moculo, primero creo una carpeta 

//¿Como usar el modulo creado en index.js?

let heroes = require('./SuperHeroes') // Usamos el ./ porque es un modulo local y uno uno descargado, ./SuperHeroes es la ruta en donde este el archivo 
console.log(heroes);


