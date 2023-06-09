function Pelicula(nombre, id, rating, premio, duracion, precio, genero) {
  this.nombre = nombre;
  this.id = id;
  this.rating = rating;
  this.premio = premio;
  this.duracion = duracion;
  this.precio = precio;
  this.genero = genero;
  this.movieInfo = function(){
    return `
    - NOMBRE: ${this.nombre}
    - ID: ${this.id}
    - RATING: ${this.rating}
    - AWARDS: ${this.premio}
    - PRICE: ${this.precio}
    - LENGTH: ${this.duracion}
    - GENRE: ${this.genero}`
}
}

module.exports = Pelicula;
