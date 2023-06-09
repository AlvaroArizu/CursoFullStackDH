let sumar = (n1, n2) => n1 + n2;
let resta = (n1, n2) => n1 - n2;
let dividir = (n1, n2) => n1 / n2;
let multiplicar = (n1, n2) => n1 * n2; 

let calculadora = (n1, n2, operacion) => operacion(n1, n2);

console.log("suma", calculadora(4, 5, sumar));
console.log("resta", calculadora(57, 6, resta));
console.log("divdir", calculadora(39, 69, dividir));
console.log("multiplicar", calculadora(30, 61, multiplicar));

let doble = n3 => n3 * 2;
let triple = n3 => n3 *3;

let callback = (n3, operacion) => operacion(n3);
console.log("doble", callback(3,doble));
console.log("triple", callback(3, triple));
