for (let i = 0; i<10; i++){
   // console.log("El valor de i es igaul a " + i); 

}

function imprimirAzul4(){

}

for (let t = 0; t < 4; t++){
  //  console.log("Azul");
}

for ( let i = 0 ; i < 4; i++ ){ 
  //  console.log ("¡Hola!");
}

function imprimirAzul4(){
    for (i= 0; i<4; i++){
    //console.log("Azul");
  }
}



function noParesDeContarImparesHasta(numero) {
    let conteo = 0
    for (let i = 0; i <= numero; i++){
        if ((i % 2) !==0){
            conteo = conteo + 1;
        }
    }
    return conteo;
}
//console.log(noParesDeContarImparesHasta(4));

let series = ["Game of Thrones", "Breaking Bad", "Los Simuladores", "Los Simpsons", "El Encargado"]
//series.lengh es como decir 5
for (let index = 0; index < series.length; index++) {
    console.log("Esta es la vuelta/iterar nro: " + index, "La serie ", series[index]);
}
//
//console.log(tablaDeMultiplicar(5));

function cantidadDeMesesConGanancia(unPeriodo ) {
    let cantidad = -1;
    for (let i = 0; i < unPeriodo.length; i++) {
     if (unPeriodo[i]>0){
       cantidad++
     }
    }
    return cantidad;
  }
 console.log(cantidadDeMesesConGanancia(1));

 function saldoDeMesesConGanancia (unPeriodo){
    let cantidad = [];
    for (let i = 0; i< unPeriodo.length; i++){
        if (unPeriodo[i]>0){
           cantidad.push(unPeriodo[i]);
        }
    }
    return cantidad;
}
//console.log(saldoDeMesesConGanancia());