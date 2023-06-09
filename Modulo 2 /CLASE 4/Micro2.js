// Pago mes
// Consumo kwh
// Mas de 300 se incrementa un 20%, sino se mantiene el subsidio sin aumeunto 
//Debido a q su hogar tuvo un consumo reeee

let pagoMes = 12000;
let consumoKWh = 450; 
let limiteDeConsumo = 300;
let porcentajeAumento = 1.20;

//if ternario

let resultado = consumoKWh > limiteDeConsumo ? "Debido a q su hogar tuvo un consumo reeee" + " " + consumoKWh + "kwh, por mes tendran un aumento del 20% cumplimos con informale que se ha ajustado el total a pagar, que sera de $" + (pagoMes * porcentajeAumento) : "con subsidio";
console.log(resultado);