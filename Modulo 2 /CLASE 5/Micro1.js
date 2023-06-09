//Monto por alquieler de vehiculo
//Parametro tipo de vehiculo, dias, silla
// Compacto $14000
// Medianos $17000
// Camioneta $28000
// Silla $1200 por dia

function montoAPagar (tipoVehiculo, diasAlquiler, sillaBebe){
   let valorCampactoPorDia = 14000;
   let valorMedianoPorDia = 17000;
   let valorCamionetaPorDia = 28000;
   let sillaB = 1200;
   let total = 0;
   
   

    switch (tipoVehiculo){
        case "Compacto":
            total = valorCampactoPorDia * diasAlquiler;
        break;
        
        case "Medianos":
            total = valorMedianoPorDia * diasAlquiler;
        break;

        case "Camioneta":
            total = valorCamionetaPorDia * diasAlquiler;
        break;
        default:
            return "Tipo no valido";
            
    }

    if (sillaBebe) {
        total = total + (sillaB * diasAlquiler);
     return  "Estimado cliente en base al tipo de vehiculo" + tipoVehiculo  + "alquilado, considerando los " + diasAlquiler + "dias utilizado y la silla para bb, el monto total a pagar es de $" + total;

    }

    return "Estimado cliente en base al tipo de vehiculo" + tipoVehiculo  + "alquilado, considerando los " + diasAlquiler + "dias utilizado, el monto total a pagar es de $" + total;
}

console.log("El alquiler a las nubes", montoAPagar("Compacto", 10, true), "\n");
console.log("El alquiler a las nubes", montoAPagar("Compacto", 10, false), "\n");
