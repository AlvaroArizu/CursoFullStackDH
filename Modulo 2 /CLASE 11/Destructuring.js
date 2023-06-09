//Este metodo permite la excatracion de array u objetos literales
//No modifica el array u objeto literal
//Ejemplo con array
let color = ["Azul", "Negro", "Blaco", "Rosa"];

let [colorAzul, colorNegro, colorBlanco, colorRosa] = color;
 console.log(color);
 console.log(colorAzul);
 console.log(colorNegro);

 let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [ , bariloche, , china, ] = destinosDelMundo;

//Ejemplo con OL
let personaObjeto = {
    nombre: "Martina",
    apellido: "Vázquez",
    edad: 22
};


let {nombre, apellido, edad} = personaObjeto; 

console.log(personaObjeto);
console.log(nombre);
console.log(apellido);
console.log(edad);