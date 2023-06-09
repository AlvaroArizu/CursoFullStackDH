/*
2 nuevas herramientas:
                      Spread operator (operador de propagación)
                      Rest parameter (parámetro rest)




*/

let frutas = ["Bananas", "Pera", "Mnazana",];
let verdurlas = ["Lechuga", "Zapallo", "Cebolla"];

//Spreading

//Array
let todasLasFrutas = [...frutas, ...verdurlas];

console.log(todasLasFrutas);

//OL

let curso = {
    curso: "Maquillaje",
    turno: "Mañana",
    sede: "Ramos Mejia"
};

let estudianteUno = {
    nombre: "Martina",
    apellido: "Vázquez",
    edad: 22,
    email: "martu__vazquez@hotmail.com",
    ...curso
};

let estudianteDos = {
    nombre: "Álvaro",
    apellido: "Arizu",
    edad: 22,
    email: "alvaro.arizu2000@gmail.com",
    ...curso
};

console.log(curso);
console.log(estudianteUno);
//Fx
//Me permite pasar varios parametros en uno
//Lo devuelve en un formato de array
function pelisVistas(...nombres) {
    for (let i = 0; i < nombres.length; i++) {
        console.log("Peliculas q vio: " + nombres[i]);
    }
}

console.log(pelisVistas("Iroman", "Batman", "Superman"));

function pelisPorVer(...nombres1) {
    for (let index = 0; index < nombres1.length; index++) {
        console.log("Le falta por ver: " + nombres1[index]);
    }
}

console.log(pelisPorVer("Linterna verde", "Thor"));

function sumar(a, b, c) {
    return a + b + c;
    
}
 let numarosASumar = [3, 5, 6];
console.log(sumar(...numarosASumar));

//resto operator

function sumar2(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log(sumar2(1, 2, 2, 5, 5));