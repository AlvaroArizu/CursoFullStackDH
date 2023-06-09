function imprimirAzul4(){
    for (i= 0; i<4; i++){
    console.log("Azul");
  }
}

//MAL
function pasandoPorI (){
    for (let i = 0; i<5; i++){
     console.log("acá i tiene el valor de x"+i);
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
console.log(noParesDeContarImparesHasta(4));
 
//WHILE
function tablaDeMultiplicar(numero) {
	let i = 1
 	while (i<=10){
		 console.log(numero + '*' + i + '=' + numero*i); i++
	 }
}
console.log(tablaDeMultiplicar(5));

function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    }
    return sumatoria;
}
console.log(gananciaTotal([]));
console.log(gananciaTotal([100]));
console.log(gananciaTotal([100, 2]));
console.log(gananciaTotal([2, 10, -20]));
console.log(gananciaTotal([2, 10, -20, 0, 0, 10, 10]));

function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length;i++) {
     if (unPeriodo[i]>0){
       cantidad++
     }
    }
    return cantidad;
  }

  //MAL
  function saldoDeMesesConGanancia (unPeriodo){
    let cantidad = [];
    for (let i = 0; i< unPeriodo.length; i++){
        if (unPeriodo[i]>0){
           cantidad.push(unPeriodo[i]);
        }
    }
    return cantidad;
}
console.log(saldoDeMesesConGanancia([100, 20, 0, -10, 10]));

//MAL
function cantidadDeMesesConPerdida (unPeriodo){
    let perdida = -1;
    for (let i = 0; i < unPeriodo.length; i++){
        if (unPeriodo[i]> 0){
            perdida = perdida + i;
        }
    }
    return perdida;
}


