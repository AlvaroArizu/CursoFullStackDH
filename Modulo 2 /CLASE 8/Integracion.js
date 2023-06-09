function sumatoriaBajoImporte(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        let mov = array[i];

        if (array[i]>1000||array[i]<0) {mov=0
        } else {total = total + mov
            
        } return total   
    }
}


//Bien aca pero en PG NO
function asientosDisponibles(asientosLibre, eleccion){
    let i = asientosLibre.indexOf(eleccion);
    if (i !== -1) {
        return "Felicitaciones, el asiento numero " + eleccion + "esta disponible ";
    } else {
        return "Lo sentimos, el asiento numero " + eleccion + " "+ "esta ocupado, pero aun quedan " +  asientosDisponibles.length + " " + "asientos disponible";
    }
}
console.log(asientosDisponibles([20, 22, 34, 45, 5], 67));

//Bien aca pero en PG no
function reporteDePasajeros (estaciones){
    let arrayRetoro =[];
    let cantidadPasajeros =0;
    let cambio = 0;
    for (let i =0; i<= estaciones; i++) {
        if (cambio ===0){
            cantidadPasajeros += 200
            arrayRetoro.push ('En la estación ' + cambio + ' hay ' + cantidadPasajeros +  ' pasajeros arriba del tren')
            cambio++
        }else if (cambio >= 1 && cambio <= 4){
            cantidadPasajeros += 20
            arrayRetoro.push ('En la estación ' + cambio + ' hay ' + cantidadPasajeros +  ' pasajeros arriba del tren')
            cambio++      
        }else if (cambio=== 5){
            cantidadPasajeros += 40
            arrayRetoro.push ('En la estación ' + cambio + ' hay ' + cantidadPasajeros + ' pasajeros arriba del tren')
            cambio++
        }
    }
    return arrayRetoro;
}
console.log(reporteDePasajeros(200));

function laClaveSecreta (frase){
    let newArray = [];
    for (let i = frase.length; i >= 0; i--){ //i-- porque recorro el string al reves
        frase[i] !== '*'? newArray.push(frase[i]) : '';
          }
    let newString = newArray.join('')      
    return newString;
}
console.log(laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]) ); 