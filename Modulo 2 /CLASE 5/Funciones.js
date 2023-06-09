// Funciones expresadas

let sumar = function(numeroA, numeroB){
    return numeroA + numeroB;

}
console.log('suma',sumar(7, 9));

// Funciones declaradas

function restar ( _numeroc, numeroD){
    return _numeroc - numeroD;

}

console.log('resta',restar(7, 9));

// Ejemplo de Scope

let mensaje = 'Hola';

function saludar(){
    let mensaje ='chau'
    return mensaje;
}
console.log(mensaje);
console.log(saludar());

// Funciones flechas ARROW

let multiplicacion = (a,b ) => a * b;
console.log('multiplicacion', multiplicacion (2,4 ));

     //Arrow con mas de una linea de codigo

let division = (a, b) => {
    if (b == 0) {
        return 'no se puede dividir por cero'
    }
    return a / b;
}
console.log('Division', division(2, 0));

//Callback 
//operacion seria el callback
function calculadora(a, b, operacion){
    return operacion(a, b);
}
console.log('calculo', calculadora(2, 2,     ));



