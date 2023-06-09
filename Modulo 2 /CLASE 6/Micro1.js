let pructosElectrodomesticos = ["Tv", "Heladera", "Microondad", "Liquadora", "Lavarropas", "Cocina"];

console.log(pructosElectrodomesticos[0]);
console.log(pructosElectrodomesticos[1]);
console.log(pructosElectrodomesticos[2]);
console.log(pructosElectrodomesticos[3]);
console.log(pructosElectrodomesticos[4]);
console.log(pructosElectrodomesticos[5]);

//Extraer el primer elemento (.shift) y agregarlo al final (.push)

let quitarUno = pructosElectrodomesticos.shift();
pructosElectrodomesticos.push(quitarUno);
console.log("Quito y agrego el mismo elementos al principo y al final ", pructosElectrodomesticos);

//Agregar al final 2 productos (.push)

pructosElectrodomesticos.push("Horno", "Pava");
console.log("Agrego 2 productos: ", pructosElectrodomesticos);

//Mostrar por consola la cantidad de elementos del array

console.log("Cantidad de elemtos en el array: ",pructosElectrodomesticos.length);

//Buscar un elemento en el array
let productoEncontrado = pructosElectrodomesticos.indexOf("Tv");
//Forma compleja de hacerlo
if (productoEncontrado != -1) {
    console.log("Producto encontrado ");
} else {
    console.log("El producto no existe");
}
//Otra forma de buscar un elemento mas sencilla 
console.log("El pruducto este en el indice: ",pructosElectrodomesticos.indexOf("Tv"));

//Unificar todo (.join)

let unificar = pructosElectrodomesticos.join(", ");
console.log(unificar);

//Determinar cantidad de elementos 
console.log(unificar.length);

//Cambiar un elemento en ele array (.replace)
console.log(unificar.replace("Heladera", "Aire Acondicionado"));

//Nuevo ARRAY con la cadena de texto (.split)
console.log(unificar.split("-"));

