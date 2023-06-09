let clase = 4;
//Todos losn numeros mayor a 0 son considerados true
// === ES UNA COMPARACION ESTRICTA Y == ES UNA COMPARACION SIMPLE, EN LOS CONDICIONALES SE USAN == o === porque si pongo mal el valor en el if va atomar ese valor
if (clase === 4){
    console.log("Estamos en la clase" +" " + clase + " "+ "De DH...");
}

let dormitorio = 5;
//Entra porque se cumple una condicion 
if ((dormitorio == 3 || dormitorio > 2) && dormitorio < 1){
    console.log("El dormitorio es el", dormitorio);
} 
else if (clase <=3)
console.log("Hacemos otra cosa...")
else {
    console.log("Aqui cualquier cosa...");
}

//If ternario son 3 partes
let result = clase > 0 ? "Es mayor" : "No, no es mayor";
console.log("La clase es", result);

//Operador de negacion ! en el if ternario, nego la condicion aunque sea mayor lo estoy forzando
// "!" lo uso para cambiar la condicon 

let result1 = !(dormitorio < 0) ? "Si, es mayor" : "no es mayor";
console.log("El dormitorio es" + " " + result1 + " " + "a 5");

//SWITCH
let clase1 = 41
//Se va a ejecutar en el case 4, en el caso de que no estuviera se ejecuta el default ejemplo q la variable diga 41 y no 4 
switch (clase1) {
    case 1:
        console.log("Entro en el 1er caso");
        break;
    case 6:
        console.log("Entro en el 2do caso");
        break;
    case 4:
        console.log("Entro en el 3er caso");
        break;

   default:
   console.log("Caso no contemplado");
        break;
}
