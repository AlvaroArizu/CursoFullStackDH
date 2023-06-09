function tablaDeMultiplicar(numero) {
    let i = 1
	while (i <=10){
        console.log( numero + '*' + i + '=' + numero*i); i++;
    } 
}
let series = ["Game of Thrones", "Breaking Bad", "Los Simuladores", "Los Simpsons", "El Encargado"];

let index = 0;
  while (index < series.length) {
    index ++;
    console.log("El valor de index con WHILE", index); 
    //index++ y va a ser: 0,1,2,3,4
  }

  //DoWhile
  let martu = 0;
  do {
   //martu++ y va a ser: 1,2,3,4,5
    console.log("El valor de Martu con DoWhile ", martu);
    martu++
  }
  while (martu < series.length);