let peliculas = require('./peliculas.js')
const fs = require('fs');


let pelicula1 = new peliculas('INTERESTELAR','1', '8.5', true, '$2000', '2:45hs', 'Aventuras');
let pelicula2 = new peliculas('TITANIC','2', '9', true, '$1500', '2:10hs', 'Suspenso');
let pelicula3 = new peliculas('UP','3', '8', true, '$2200', '1:50hs', 'Animación');

let arrayPelis = [];

arrayPelis.push(pelicula1); // PUSHEANDO HACIA arrayPelis;
arrayPelis.push(pelicula2); // PUSHEANDO HACIA arrayPelis;
arrayPelis.push(pelicula3); // PUSHEANDO HACIA arrayPelis;



for (let i = 0; i < arrayPelis.length; i++){
    console.log(arrayPelis[i].movieInfo());
}

const mensaje = fs.readFileSync(__dirname + '/mensaje.txt', 'utf-8'); //usando metodo de file system;

console.log(mensaje);