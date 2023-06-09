// if tenerio true

let fruta ='Manzana verde';

let resultado = fruta == 'Manzana verde'?'Si, me gustan las manzanas verdes':'No, no me gustan las manzanas verdes';

    console.log(resultado);

// if ternario false

let comida = 'Camote';

let opcion = comida == 'batata'?'Si, quiero':'No, no quiero';

    console.log(opcion);

//Switch

let semaforo = 'verde';

switch (semaforo){
    case 'verde':
        console.log('Cruzar');
        break;
    case 'Amarillo':
        console.log('Precaucion');
        break;
    case 'Rojo':
        console.log('Esperar');
        break;    
}
//Ejemplo 2 cuando no coincide ningun valor y se usa default

let dia = 'Martes';
switch (dia){
    case 'lunes':
        console.log('Es lunes, se labura');
    break;
    case 'Sabado':
        console.log('Es sabado, se sale');
    break;
    case 'Domingo':
        console.log('Es domingo, se come asado');
    break;
    default:
     console.log('No es lunes ni sabado ni domingo');
    break; 
}

let mia = "viernes"

switch (mia){
  case 'lunes':
    console.log('buena semana');
    break;
  case 'domingo':
    console.log('buen dia');
    break;
    default:
        console.log('buen finde');
   break;  
}