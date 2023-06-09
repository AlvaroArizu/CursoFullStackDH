//‘Turno de día’, ‘30 noches con mi ex’, ‘Bestia’, ‘El monte’, ‘Top gun maverick',‘Elvis’,‘Thor: amor y trueno’
let pelicula = "Turno de día, 30 noches con mi ex, Bestia, El monte, Top gun maverick, Elvis, Thor:amor y trueno"

function toUpper(pelicula){
return pelicula.toUpperCase(); //pasa a mayuscula 
}

console.log(toUpper(""));
//La variable pelicula tiene q ser un array, converti con (.split)
let arrayPelicula = pelicula.split(", ");
//Buscar la peli q quiero 
let indexPeli = arrayPelicula.indexOf("Thor:amor y trueno");
//Obtern peli, sacandola del array 
let peliQuiero = arrayPelicula.splice(indexPeli, 1); //1 es la cantidad a sacar 

console.log("Peli q quiero ", peliQuiero, arrayPelicula );
//Poner en mayuscula
let peliEnMayuscula = toUpper(peliQuiero[0]);

console.log("Peli en mayuscula ", peliEnMayuscula);
//Agregar al array en 1er lugar
arrayPelicula.unshift(peliEnMayuscula);

console.log(arrayPelicula);
//Crear una cadena de texto 
//Counter-Strike NOP, Vértigo, Nick, Avatar.
let nuevoListadoDePelicula = "Counter-Strike,  NOP, Vértigo, Nick, Avatar"
let newArrayPeliculas = nuevoListadoDePelicula.split(", ");
console.log(newArrayPeliculas);

//Buscar la peli, ya q no se el indice
let newIndexPeli = newArrayPeliculas.indexOf("Counter-Strike"); //Obtengo la psosicion
//Quitar la primera por no ser una pelicula
let juegoRemover = newArrayPeliculas.splice(newIndexPeli, 1); //Quito

console.log(juegoRemover, newArrayPeliculas);
console.log("Cadena".concat(" Otra cosa"));

//Unir los 2 array en 1
let newArray 
function concatenacion(array1, arra2) {
    return array1.concat(arra2);
}
console.log("Concatenar", concatenacion(arrayPelicula, newArrayPeliculas));
