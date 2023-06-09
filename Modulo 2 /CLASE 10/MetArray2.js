// map(); devuelve un array con la modificacion q hicimos 
let numeros = [2, 4, 6];
let elDoble = numeros.map(function(num){
 // Multiplicamos por 2 cada número
 return num * 2;
});
//console.log(elDoble); // [4,8,12]
 //Ejemplo 2 de .map();
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(number){
    return number.aprobado == true;
})

let desaprobados = estudiantes.filter(function(number){
    return number.aprobado == false;
})

//Ejemplo 3 
let peliculas = ['El padrino', 'Avatar', 'Star Wars'];

let peliMap = peliculas.map(
    function (pelicula){
        return pelicula.toUpperCase();
    }
);
console.log("Pelis originales ", peliculas, "\n", "New pelis ", peliMap);
//filter();
var edades = [22, 8, 17, 14, 30];
var mayores = edades.filter(function(edad){
 return edad > 18;
});
//console.log(mayores); // [22, 30]

//reduce(); reduce a la mas minima expresion el array dado
//recibe 2 elementos el acumulador y el elemento 
//Se usa para sumar los items en el carrito de compra de una tienda online    
var nums = [5, 7, 16];
var suma = nums.reduce(function(acum, num){
 return acum + num;
});
//console.log(suma); // 28

//forEach();
var paises = ['Argentina', 'Cuba', 'Perú'];
paises.forEach(function(paises){
 //console.log(pais);
})


let notas =[10, 3, 4, 9, 8, 7];

let notasHastaEl100 = notas.map(function (number) {
    return number * 10;
});

console.log("Notas multiplicadas por 10", notasHastaEl100);

let notasAprobadas = notas.filter(function(number) {
    return number >= 7;
});

console.log("Notas aprobadas: ",notasAprobadas);

let sumaDeNotas = notas.reduce(function (estado, number) {
    return estado + number;
});

console.log("Suma de todas las notas del array: ", sumaDeNotas);

let notas1 = notas.forEach(function(valorElemntosArray, indiceDeElementosDelArray) {
    //return `En la posicion ${valorElemntosArray}, tengo el valor ${indiceDeElementosDelArray}` 
    console.log(`En la posicion ${indiceDeElementosDelArray}, tengo el valor ${valorElemntosArray}`);
    console.log("En la posicion " + indiceDeElementosDelArray + ", tengo el valor " + valorElemntosArray);
});
//console.log(notas1);

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach(function(listaDeSuperMercado){
}
);

console.log(listaDeSuperMercado);
