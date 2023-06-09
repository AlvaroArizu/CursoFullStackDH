let notas = [10, 7, 4, 1, 5, 8, 3, 7];

//.push() para agregar un elemento al final, se agregan de forma secuencial
notas.push(3);
notas.push(45);
notas.push(3);

//.pop() para eliminar un elemento al final
notas.pop();

//.pop() en una variable para recuperar el elemento donde queda almacenado y con un console.log lo puedo recuperar
let ultimo = notas.pop();

//.shift() para eliminar un elemento del principio
notas.shift();

//.unshift() para agregar un elemento al principio
notas.unshift(22);
console.log(notas);
console.log(ultimo);

let diasDeSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo", "Miercoles", "Miercoles"];

//.indexOf() para saber la posision de un elemento

let posicionDelMiercoles = diasDeSemana.indexOf("Miercoles");

//.lastIndexOf() para saber la posicion de un elemeto pero cuenta desde el final del indice

let posicionDelLunes = diasDeSemana.lastIndexOf("Lunes");

//.join() para juntar todo el array en un mismo strings

let resultadoJuntado = diasDeSemana.join("-")
let resultadoJuntado1 = notas.join();

console.log(posicionDelMiercoles);
console.log(posicionDelLunes);
console.log(resultadoJuntado);
console.log(resultadoJuntado1);