//Array con op bancarias (positivos y negativos)
//CallBack
//Function (nombre, apellido, saldo)

//Array
const operacionesBancarias = [1000, 2500, 3000, -1500];

//Callback
function calcularSaldo(operaciones) {
    let depositos = 0;
    let retiros = 0;
    let saldoTotal = 0;
//Hago un for para recorrer el array, viendo los valores q tiene y agruparlos
    for (let index = 0; index < operaciones.length; index++) {
       //saldoTotal = saldoTotal + (depositos + retiros);
    if (operaciones[index] > 0) {
        //deposito
        depositos += operaciones[index];

    } else {
        //retiros else es -1
        retiros += operaciones[index];
    }
    }
     return [ //hago un array
        depositos, //posicion 0
        retiros, //posicion 1
        depositos + retiros]; //posicion 2
    //return    "Depositos: " + depositos + ", " + "Retiros: " + retiros +", " + "Saldo total: " + depositos + retiros;
}
//console.log(calcularSaldo(operacionesBancarias));

function estadoDeCuenta(nombre, apellido, operaciones, callback) {
    let saldo = callback(operaciones)
    //return nombre, apellido, saldo;
    return `Resumen de ${nombre} ${apellido}, su saldo es: ${saldo[2]}. Depositos: ${saldo[0]} y retiros: ${saldo[1]}`; 
    //Template strings (``) perimite concatenar sin poner + todo el tiempo (alt + 96)
    //Manera antes
    //return "Resumen de " + nombre + " "+ apellido + "su saldo es " + saldo;
} 
console.log(
    estadoDeCuenta(
    "Martu", //nombre
    "Vázquez", //apellido
    operacionesBancarias, //Array
    calcularSaldo //callback
    )
);
