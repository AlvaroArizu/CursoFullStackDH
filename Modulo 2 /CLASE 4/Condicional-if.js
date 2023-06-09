// Condicional If con operador AND
let clima = 'Soleado';
let dia = 'Domingo';

if( clima == 'Soleado' && dia == 'Domingo'){ 
    console.log('Lindo dia para pasear');
}
   
// Condicional If con else if ya q la condicion no se cumple

let tiempo = 'Soleado';
let fecha = 'Martes';

if ( tiempo == 'Soleado'&& fecha =='Lunes'){
    console.log('Lindo dia para caminar');
}else if( tiempo == 'Soleado'&& fecha == 'Martes'){
    console.log('Podria salir igual');
}

//else 
let temperatura = 'Lluvia';
let data = 'Martes';

if ( temperatura == 'Soleado'&& data =='Lunes'){
    console.log('Lindo dia para caminar');
}else if( temperatura == 'Soleado'&& data == 'Martes'){
    console.log('Podria salir igual');
}else{
    console.log('Mejor me quedo en casa');
}