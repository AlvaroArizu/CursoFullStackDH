// Arrays

let nombres = ["Álvaro", "Martina", "Edith", "Marcela"];
let edades = [21, 22, 52, 52];
let valoresDeVerdad = [true, true, false, true];
let variado = ["Álvaro", 21, true, false, edades];

// Un dato concreto dentro de un array, como consultarlo?

console.log("Consultando el indice 0 del array:", nombres[0], "\n");

//  Arrays dentro de un Array

console.log("Array edades dentro del array variado:", variado, "\n");
console.log(variado[4][1]); //Consulto la variable variados en la posision 4 que esta edades y dps consulto dentro de edades la posision 1