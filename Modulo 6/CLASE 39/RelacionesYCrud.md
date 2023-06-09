# CLASE 39 - TEMAS
* Relaciones 1:N
* Relaciones N:M
* CRUD

# Relaciones 1:N
1. .associate
2. .belongsTo()
3. .hasMany()

## .associate
Las relaciones se aplican dentro de nuestro modelo de tabla. Luego de definirlo con el método .define(), debemos llamar a la variable creada y utilizar la propiedad .associate para definir nuestras relaciones.

.associate debe almacenar una función anónima que recibe un solo parámetro. Este será un objeto que contiene todos los modelos, pudiendo acceder así a cada uno de ellos

```javascript
const Pelicula = sequelize.define(alias, cols, config)

Pelicula.associate = function(modelos){
   // Relación
}
//Definimos una función en la propiedad .associate de nuestra variable que representa al modelo (Película)
```

## .belongsTo()
Lo utilizamos para decir que un registro puede estar asociado a uno o más de otra tabla. En este caso, la relación sería de 1:N. 

Para definir la relación, .belongsTo() recibe dos parámetros. El primero es el modelo con el que queremos relacionarlo (llamándolo a través del parámetro que contiene nuestros modelos) y el segundo es un objeto donde debemos detallar la relación

```javascript
Pelicula.associate = function(modelos){
   Pelicula.belongsTo(modelos.Generos, {
    as: "generos",
    foreignKey: "genre_id"
});
}
//Asignamos un alias con el que llamaremos luego a la relación

//Aclaramos la foreignKey donde se relacionan ambas tablas
```

## .hasMany()
Lo utilizamos para decir que uno o más registros pueden estar asociados a uno solo de otra tabla. En este caso, la relación sería de N:1. 

Para definir la relación, .hasMany() recibe dos parámetros. El primero es el modelo con el que queremos relacionarlo (llamándolo a través del parámetro que contiene nuestros modelos) y el segundo es un objeto donde debemos detallar la relación.

```javascript
Genero.associate = function(modelos){
   Genero.hasMany(modelos.Pelicula, {
as: "generos",
foreignKey: "genre_id"
});
}

//Asignamos un alias con el que llamaremos luego a la relación
//Aclaramos la foreignKey donde se relacionan ambas tablas
```
![](/CLASE%2039/Archivos/1.png)

# Relaciones N:M
1. .belongsToMany()
2. Implementación
Las relaciones en Sequelize existen para optimizar la obtención de datos en una consulta a la base de datos.

## .belongsToMany()
Hay veces donde una tabla posee una relación de muchos a muchos. Es decir, muchos registros de nuestra tabla pueden estar relacionados con varios de otra. Para poder aclararle esta relación a Sequelize debemos utilizar el método .belongsToMany().

Para definir la relación, .belongsToMany() recibe dos parámetros: el primero es el modelo con el que queremos relacionarlo (llamándolo a través del parámetro que contiene nuestros modelos) y el segundo es un objeto donde debemos detallar la relación. 

```javascript
Pelicula.associate = function(modelos){
   Pelicula.belongsToMany(modelos.Actores, {
        as: "actores",
        through: "actor_movie",
        foreignKey: "genre_id",
        otherKey: "actor_id",
        timestamps: false
    });
}
//Asignamos un alias con el que llamaremos luego a la relación
//Nombre de la tabla intermedia que utilizamos para la relación
//Referencia a la tabla del modelo que estamos referenciando
//Referencia a la otra tabla que queremos referenciar
//Aclaramos si la tabla pivot posee o no timestamps.
```
## Implementación
![](/CLASE%2039/Archivos/3.png)

```javascript
const db = require('../database/models');
db.Peliculas.findAll({
include: [
{association: "genero"},
{association: "actores"}
]
}).then(resultados=>{
       console.log(resultados);
   })

//Incluimos las asociaciones (relaciones) que creamos en los modelos
```

EN LA VISTA 
-
Para poder utilizar esta información en la vista, debemos llamar a las asociaciones a través de los atributos del modelo. Estos poseen el mismo nombre del alias que establecimos cuando creamos la relación. EJS

```javascript /EJS
// Muestro el género al que pertenece la película
<%= pelicula.genero %>
   // Muestro los actores de la película
   <% for (let i = 0; i < pelicula.actores.length; i++) { %>
       <%= pelicula.actores[i] %>
   <% } %>
```
![](/CLASE%2039/Archivos/2.png)



# CRUD
Secuencia completa de código que busca mostrar de cero a cien cada uno de los pasos necesarios para poder implementar este sistema en nuestros desarrollos.









