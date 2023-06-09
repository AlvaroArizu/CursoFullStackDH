//

let totalAPagar = (tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla) => {
    let total = 0;

    switch (tipo) {
        case "Carne":
          total += 1800;
            break;
        case "Pollo":
          total += 1500;
             break;
        case "Vegetariana":
          total += 1200;
            break;
        default:
            return "No la tenemos"
           
    }
    //if ternario
 jamon ? total += 30 : total += 0;
 queso ? total += 25 : total +=  0;
 tomate ? total += 15 :  total += 0;
 mayonesa ? total += 5 : total +=  0;
 mostaza ? total += 5 : total +=  0;
 salsa ? total += 5 : total +=  0;
 cebolla ? total += 30 : total +=  0;

 return total;
}

function mensaje(nombreUsuario, apellidoUsuario, tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla, callback) {
    return "Estimado" + " " + nombreUsuario + " " +  apellidoUsuario + " " + "el monto a pagar $" + totalAPagar(tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla);

}

console.log(mensaje("Alvaro", "Arizu", "Carne", true, false, true, true, false, false, true, totalAPagar));