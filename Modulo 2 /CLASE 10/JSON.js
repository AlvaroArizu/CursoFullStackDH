//En la web, la mayoría de las peticiones y sus respuestas viajan como texto plano, es decir, texto sin codificaciones especiales. Vamos a conocer una de las maneras mediante la cual los sistemas se pueden interconectar. 
//Es un lenguaje q se usa para compartir info, es como el idioma predilecto
//Intercambio de datos entre sistemas/lengujes, todos los lenguajes de programacion pueden interpretar la cadena de JSON
//JSON, al ser una cadena de texto simple, es un formato ideal para transmitir información entre sitios y aplicaciones web
//La info q viene en JSON puede convertirse facilmente en un array o en objeto literal
//2 metodos de JSON : JSON.parse() y JSON.stringify().
//                  -JSON.parse(), recibe como paramentro un dato y retorna el mismo en un formato array o en objeto literal
//                   -JSON.stringify(), hace lo contrario al metodo .parse() ya que toma un array o un objeto litera y retorma el dato en un string del tipo JSON
//JSON, caracteristicas:
//                       -Solo se pueden usar comillas dobles
//                       -Las claves van entre comillas
//                       -No admite métodos, solo propiedades y valores
//                       -No podemos poner una coma en el último elemento
//
//OBJETO LITERAL, caracteriticas:
//                       -Admite comillas simples y dobles
//                       -Las claves del objeto van sin comillas
//                       -Podemos escribir métodos sin problemas
//                       -Se recomienda poner una coma en la última propiedad

//Ejemplo de .parse()
let datosJson = '{"club": "Independiente", "barrio": "Avellaneda"}';
let datosConvertidos = JSON.parse(datosJson);
//onsole.log(datosConvertidos); //Se vera por consola un objeto literal

//Ejemplo de .stringify()
let objetoLiteral = { nombre: 'Carla', pais: 'Argentina' };
let datosConvertido = JSON.stringify(objetoLiteral);
//console.log(datosConvertido); // Se verán en consola los datos en un string de tipo JSON

//Ejemplos creados por mi
let amigosArray = ["Martu", "Álvaro" ,"Edith",  "Marcela"];

let amigosJSON = JSON.stringify(amigosArray);
let amigosJSON1 = JSON.parse(amigosJSON)

console.log("Array ", amigosArray);
console.log("Formato JSON ", amigosJSON);
console.log("De formato JSON a Array ", amigosJSON1,"\n");

let personaObjeto = {
    nombre: "Martina",
    apellido: "Vazquez",
    edad: 21
};

let personaJSON = JSON.stringify(personaObjeto);
let personaObjeto1 = JSON.parse(personaJSON);

console.log("Objeto ", personaObjeto);
console.log("Formato JSON ", personaJSON);
console.log("De formato JSON a Objeto", personaObjeto1);




console.log(personaObjeto);
