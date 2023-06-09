// Arrays
let series = ['GOT', 'Breaking bad', 'Vikingos'];
console.log("Serie:", series[1]);
console.log("Longitud", series.length);

//METODOS DE UN ARRAY
//Agregar un elemento al final

series.push ('The office');
console.log("Series", series);

//Eliminar el ultimo
series.pop()
console.log("Series", series);

let pelicula = "Terminator 2";
console.log( 'replace', pelicula.replace("2", "5"));

console.log('slice', pelicula.slice(2, 4)); //MEDIO RARO
console.log( 'split', pelicula.split(" ")); //Separa con una coma 
console.log ('splice', series.splice(2)); //

//slice
//split
//splice
