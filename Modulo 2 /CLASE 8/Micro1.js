//Crar un array multidimensional q contenga los nombres, cursos y su precio en pesos
//“html5 4000”, “css3 5000”, “javascript 10000”, “react 7000”, “nodejs 15000”.
//Crear un array q contenga los curso q el alumno quiere hacer, deben estar en mayuscula y el alumno puede selecionar entre ellos
//Funcion callback q calcule el precio
//Fx devuelve datos alumnno y monto a pagar 

//array multidimensional
let cursosPrecio = [
    ['html5', 4000], 
    ['css3', 5000], 
    ['javascript', 10000], 
    ['react', 7000], 
    ['nodejs', 15000]
];
//array de 1 SOLA DIMENSION
let cursosElegidos = ['HTML5', 'CSS3', 'JAVASCRIPT', 'NODEJS']

//Fx debe calcular el precio
function calcularPrecio(catalogo, cursoQueEligio) {
    let precio = 0;
    //for para recorrer el array con el .length
    for (let index = 0; index < catalogo.length; index++) {
        //CON EL IF LE PREGUNTO 
        if (cursoQueEligio.includes(catalogo[index][0].toUpperCase())) {
            precio = precio + catalogo[index][1];
            //[0] obtengo el nombre del curso
            //[1] obtengo el precio del curso
            //.include para preguntar entre los q eligio el alumno y devuelve un booleano
    }
}
    return precio; 
}
//console.log("Tenes q pagar ", calcularPrecio(cursosPrecio, cursosElegidos));

//callback = es una funcion ya declara q va como argumento  q en este caso es calcular precio
function factura (nombre, apellido, catalogoCursos, cursosElegidos, callback){
    let total = callback(catalogoCursos, cursosElegidos);


    return `Estimado ${nombre} ${apellido} esto es lo que tenes q pagar ${total}`;
}

console.log(factura("Álvaro", "Arizu", cursosPrecio, cursosElegidos, calcularPrecio));

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            