//Es un modulo propio la q devo importar y recibira como parametro el nombre de la marca. Tendra la responsabilidad de leer el archivo en formato JSON y devolver un array de cada una de las mrcas recibidad
//Modulo para acceder a mis archivos
const { log } = require('console');
const fs = require('fs');

function importar(marca) {

    let nombreArchivo = "";

    switch (marca) {
        case "Hot Toys":
            nombreArchivo = "figuras1.json"
            break;
        case "Bandai":
            nombreArchivo = "figuras2.json"
             break;

        case "Star Wars":
            nombreArchivo = "figuras3.json"
            break;     
       } 

       let figuras = JSON.parse(
        fs.readFileSync("./datos/" + nombreArchivo, 'utf-8')
       )

    return figuras;
}

//console.log("Importar", importar("Bandai"));

module.exports = importar;