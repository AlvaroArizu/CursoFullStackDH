// Para JS un strings es un objeto, sus metodos son funciones q pertenecen a un objeto que se ejecutan en el console.log()
//.length() devuelve la longitud de una cadena de texto 
//.indexOf() busca el parametro q esta entre () 
//.slice() toma una posicion determinada de una cadena de texto, dentro de los () tiene que haber 2 parametros numericos (desde, hasta)
//.trim() elimina los espacios en blanco antes y despues de la primera ocurrencia de un caracter alfanumerico
//.split() divide un string en partes, convierte un string en un array
//.replace() remplaza una parte del string por otra, primer parametro lo que se quiere remplazar y segundo parametro lo que va a remplazar

let msj = 'hola, gran dia para practicar Phitom';
console.log(msj);

//.length
console.log(msj.length);

//.indexOf()
console.log(msj.indexOf('dia'));

//.slice()
console.log(msj.slice(0, 5));

//.trim()
console.log(msj.trim());

//.split()
console.log(msj.split(' '));

//.replace()
console.log(msj.replace('Phitom', 'JavaScript'));

function reemplazoFastFast (parametro){
    return "Hols, como mal?" + parametro
}

console.log(reemplazoFastFast.replace("mal", "estas"));