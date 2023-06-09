const { v4: uuidv4 } = require('uuid'); //es un destructuring

let perro = {
    id: uuidv4(),
    raza: 'mestizo',
    tamanio: 'mediano',
    peso: 15,
    nombre: 'Olaf',
    color: 'Negro',
    edad: 5,
    vacuna: true,
    sexo: 'Macho',
    ladrar: function () {
        return "woff"
    },
    juguetes:["hueso", "pelota", "peluche"],
    alimento: ["pollo", "balanceado"]
}

module.exports = perro;