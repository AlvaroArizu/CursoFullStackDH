let html5 = '30 45 25 34 18 23 16 50 72 70';
let css3 = '50 45 71 34 23 45 65 75 63 43 74 70';
let javascript = '70 65 58 45 23 57 34 17 72'; 
let nodejs = '45 56 73 34 65 72 70 32';

html5 = html5.split(" ");
css3 = css3.split(" ");
javascript = javascript.split(" ");
nodejs = nodejs.split(" ");
// Fx q calculo el promedio

function calcularPromedio(arrHtml5, arrCss3, arrNodejs, arrJavascript, numero) {
    switch (numero) {
        case 1:
            return `Calculo promedio ${promedio(arrHtml5)}`
            break;
        case 2:
            `Calculo promedio ${promedio(arrCss3)}`
            break;
        case 3:
            `Calculo promedio ${promedio(arrNodejs)}`
            break;
        case 4:
            `Calculo promedio ${promedio(arrJavascript)}`
            break;
        default:
            return `Numero incorrecto`
            break;
    }
}

function promedio(valores) {
    let suma =0;
    //For para recorrer el array, para acceder a cada elemento del array
    for (let index = 0; index < valores.length; index++) {
        suma += Number(valores[index])
//Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base mencionado.  
    }
    return suma / valores.length; //Para sacar el promedio
}

console.log(
    "Aqui calculamos el promedio",
    calcularPromedio(html5, css3, javascript, nodejs, 4)
);
