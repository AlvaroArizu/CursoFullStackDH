//file sy
//JSON

//Hay q importar el modulo creado en collectiles.js

const importar = require('./collectibles');

let hotToys = importar("Hot Toys");
let bandai = importar("Bandai");
let starWars = importar("Star Wars");

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

//console.log("Deberia haber un array con todo ", unifiedCollectibles);

let collectibles = {
     figuras: unifiedCollectibles,
    listFigures: 
    function () {
        this.figuras.forEach(figura =>{
            console.log("La figura es: ", figura.nombre);
        })
    },
    figuresByBrand: 
    function (marca) {
        let elejidas = this.figuras.filter(figura =>{
            return figura.marca == marca
        });
        return elejidas;
        
    }

}

collectibles.listFigures();

console.log(
    collectibles.figuresByBrand("Hot Toys")
);