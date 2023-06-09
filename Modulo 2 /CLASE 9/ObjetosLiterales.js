//let objeto = {
   // propiedad : valor,
   // propiedad : valor,
    //propiedad : valor,
//}

const { log } = require("console");

let curso = {
    cantidadDeAlumnos : 33,
    docentes : ["Álvaro", "Martu"],
    horarioCursada: "de 19 a 21hs",
    notificaciones: function() { //metodos en los objetos 
        return"El horario de la cursada es " + this.horarioCursada;
        //en ves de cursos.horarioCursada, usar this.horarioCursada porque this hace referencia al objeto 
        
    }
}
//Vemos todo el objeto
console.log(curso);

//Vemos solo 1 propiedad el objeto
console.log("La cantidad de alumnos " + curso.cantidadDeAlumnos);

//Metodos dentro del codigo
console.log("Hola Alumnos " + curso.notificaciones());

//Fx contructora q arranca con MATUSCULA
function Curso(cantidadDeAlumnos, docentes, horarioCursada) {
    //a traves de la palabra this llamamos al valor que tiene en nutros Objeto Literal
    this.cantidadDeAlumnos = cantidadDeAlumnos
    this.docentes = docentes
    this.horarioCursada = horarioCursada
}

let cursoDeProgramacion = new Curso(25, ["Edith", "Raul"], "De 17 a 19:30hs.");

console.log("El nuevo curso esta compuesto por la siguente info:" ,cursoDeProgramacion);

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (cantidadHoras){
        this.cantidadHoras = cantidadHoras
        this.energia = this.energia - (cantidadHoras * 5);
        this.experiencia = this.experiencia + (cantidadHoras * 2);
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);


//CLASE
 
//Objeto propio
let auto = {
    color : 'negro',
    marca : 'fiat',
    modelo : 'punto',
    arrancar : function(){
        return 'Vroom'
    },
    detener : function(){
        return 'kpuff'
    },
    queMarcaEs: function () {
        return this.marca
    }
}
console.log(auto.color, auto.arrancar(), auto.queMarcaEs());

//para ecportar un modulo se usa module.exports = nombre variable
module.exports = auto;

var  cowsay  =  require ( "cowsay" ) ;

console.log(cowsay.say({
    text: "Soy un moooodule",
    e : "oO" , 
    T : "U" 
}),
 cowsay.think({
    text: "Soy un moooodule",
    e : "oO" , 
    T : "U" 
 })
);