//ArrowFx CON SOLO 1 PARAMETRO no se usan parenteisis
let laMitad = numero => numero / 2;

console.log("LA MITAD", laMitad(8));

// ArrowFx con mas de 1 parametro
 let dividir = (numeroA, numeroB) => numeroA / numeroB;

 console.log("DIVIDIR", dividir(10, 4));

 let tengoQueTrabajar = dia => {
    if (dia == 'sabado' || dia =='domingo'){
    return 'No tengo que trabajar';
    }else{
        return 'Tengo que trabajar';
     }
}
 console.log(tengoQueTrabajar('sabado'));



 let dameCinco = resultado => {1, 2, 3, 4, 5};

 let multiplicarPorDos = (a, b) => 123 * 2;
 
 let mostrarNombre = nombre => "Mi nombre es Herán";
 