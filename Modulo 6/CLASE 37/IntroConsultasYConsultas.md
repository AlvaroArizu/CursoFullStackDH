# CLASE 37 - TEMAS
* Promesas
* Saquelize y configuracion
* Modelos
* findAll, findByPk, findOne
* Where y Operadores
* Order y Limit

# Promesas
     Las promesas son Fx que permiten ejecutar codigo asincronico de forma eficiente

## Pedidos asincronicos
Es un conjunto de intrucciones que se ejecutan mediante un mecanismo especifico, como por ejemplo un **CALLBACK**, una **PROMESA** o un **EVENTO**

## .then()
La fx asincronica devolvera un resultado, o no. Mientras tanto, el codigo se sigue ejecutnado

```javascript
obtenerUsuarios() //Fx Asincronico
.then(function(data){
   console.log(data);
});
//Ejecuta el console.log() SOLO SI obtenerUsuarios() devuelve un resultado. Este lo recibe .then() dentro de su callback, en este caso, en el parámetro data

console.log("Se sigue ejecutando!" 
//Codigo que podria seguirse ejecutando mientras se ejecuta la promesa
```
## Pedidos anidados
A veces los .then() suelen tener promesas dentro. Para resolver esto, necesitamos utilizar otro .then() que entre en ejecución una vez se resuelva el anterior.

```javascript
obtenerUsuarios()
    .then(function(data){
        return filtrarDatos(data);
    })
    .then(function(dataFiltrada){
        console.log(dataFiltrada);
    })
```
![](/CLASE%2037/Archivos/1.png)

## .catch()
En caso de NO obtener un resultado, se genera un error. Para esto usamos .catch(), que encapsula cualquier error que pueda generarse a través de las promesas. Dentro de este método decidimos qué hacer con el error. El mismo es recibido como parámetro dentro del callback del .catch(). En el siguiente ejemplo mostraremos el error en consola

```javascript
obtenerUsuarios()
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })
```

## Promise.all()
A veces necesitamos que dos o más promesas se resuelvan para realizar cierta acción. Para esto usamos Promise.all(). Este contendrá un array de promesas que, una vez se hayan resuelto, se ejecutará un .then() con los resultados de las mismas.
Lo que primero debemos hacer es guardar en variables las promesas que necesitamos obtener

```javascript
let promesaPeliculas = obtenerPeliculas();
//Promesa de película
let promesaGeneros = obtenerGeneros() 
//Promesa de género
```
El próximo paso es utilizar el método Promise.all() que contendrá un array con las promesas que guardamos anteriormente

```javascript
Promise.all([promesaPeliculas, promesaGeneros])
//Promesas a resolve
```
El callback del .then() recibe un array con los resultados de las promesas cumplidas.

```javascript
Promise.all([promesaPeliculas, promesaGeneros])
.then(function([resultadoPeliculas,resultadoGeneros
]){
  console.log(resultadoPeliculas, 
resultadoGeneros);
}
```
El .then() se ejecutará solo si ambas promesas se cumplieron

# Sequelize y su configuración
![](/CLASE%2037/Archivos/3.png)

## Preparando el proyecto
Antes de instalar Sequelize, debemos tener en cuenta que al ser un paquete utilizado por Node.js vamos a tener que utilizar npm.

INSTALACION
-
Dentro de la carpeta del proyecto de Node.js, hay que ejecutar los siguientes comandos

```
npm install sequelize-cli -g
npm install sequelize
npm install mysql2
```

## Rutas y directorios
Una vez instalados los paquetes que necesitamos, debemos establecer las rutas y directorios. Para ello, debemos crear un archivo llamado .sequelizerc en la raíz del proyecto y, dentro de este, escribir lo siguiente:

```
const path = require('path')
 
module.exports = {
 config: path.resolve('./database/config', 'config.js'),
 'models-path': path.resolve('./database/models'),
 'seeders-path': path.resolve('./database/seeders'),
 'migrations-path': path.resolve('./database/migrations'),
}
```
## Iniciar Sequelize en el proyecto
Para que Sequelize cree todas las carpetas y archivos que necesitamos para comenzar a trabajar con él, debemos correr el siguiente comando

```
Sequelize init
```

## Configuración
Por último, debemos configurar la conexión con la base de datos. En las carpetas que creó Sequelize, encontraremos el archivo config.js en la ruta /database/config/config.js. Dentro de este, encontramos un JSON con credenciales por defecto que debemos reemplazar por las nuestras

```javascript
"development": {
    "username": "root",
    "password": "Monito123!",
    "database": "movies_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
```
![](/CLASE%2037/Archivos/4.png)

## Objeto DB
Como dato curioso, les contamos que al final del archivo **index.js**, ubicado en **/database/models/index.js**, encontramos la exportación del objeto **DB**.
Este será al que llamaremos cada vez que queramos utilizar Sequelize para realizar consultas a nuestra base de datos

# Modelos 
En los patrones de diseño MVC (Modelo - Vista - Controlador ), los modelos contienen únicamente los datos puros de aplicación. No contienen lógica que describa cómo pueden presentarse los datos a un usuario. Este puede acceder a la capa de almacenamiento de datos. Lo ideal es que el modelo sea independiente del sistema de almacenamiento.

*A la hora de hacer una consulta a la base de datos, un modelo va a retornarnos información en un formato útil y cómodo para luego operar con la misma*

Es decir, un modelo es la representación de nuestra tabla en código. Con esto obtenemos recursos que nos permiten realizar consultas e interacciones con la base de datos de manera simplificada usando, en este caso, Sequelize.

## Creando un modelo
Siempre creamos un modelo para cada tabla de nuestra base de datos. La ruta donde los almacenamos es **/database/models**

Un modelo es naturalmente una función que debemos definir y luego exportar con module.export. Esta función recibe dos parámetros. En primer lugar, el objeto sequelize para poder acceder a su método define() y, en segundo lugar, necesitamos traer al objeto DataTypes que nos dará la posibilidad de decirle a nuestras columnas qué tipo de datos permitirán

## Método .define()
El método define() nos permite definir asignaciones entre un modelo y una tabla. Este recibe 3 parámetros. El primero es un alias que identifica al modelo, el segundo es un objeto con la configuración de las columnas en la base de datos y el tercero es otro objeto con configuraciones adicionales (parámetro opcional). Lo que devuelva define() será almacenado en una variable con el nombre del modelo para luego ser retornada por la función que creamos

```javascript
const Pelicula = sequelize.define(alias, cols, config);
return Pelicula;{}
```

## Alias
Como mencionamos en el slide anterior, el primero es un alias que utiliza Sequelize para identificar al modelo. No es algo determinante. Solemos asignarle el mismo nombre del modelo como String.

```javascript
const Pelicula = sequelize.define("Pelicula", cols, config);
return Pelicula;{}
```

## Tipos de datos en Sequelize
Dentro de nuestro segundo parámetro que llamamos cols se encuentra un objeto que nos permite, en el segundo parámetro del define(), definir qué tipos de datos deben recibir las columnas en la base de datos.

```javascript
cols = {
    id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    admin: {
        type: DataTypes.BOOLEAN
    }
}
```

EJEMPLOS MAS UTILIZADOS
-
```JAVASCRIPT
DataType.STRING                 // VARCHAR(255)
DataType.STRING(400)            // VARCHAR(400)
DataType.INTEGER                // INTEGER
DataType.BIGINT                 // BIGINT
DataType.FLOAT                  // FLOAT
DataType.DOUBLE                 // DOUBLE
DataType.DECIMAL                // DECIMAL
DataType.DATE                   // DATE
```
## Timestamps

``` javascript
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define("Usuario", {
    email: {
type: DataTypes.STRING
},
createdAt: {
type: DataTypes.DATE             
},
//Campos que guardan la fecha de creación y última edición
    updatedAt: {
type: DataTypes.DATE
},
});
  return Usuario;
}
```

```javascript
module.exports = (sequelize, dataTypes) => {
  let alias = "Peliculas";
  let cols = {
    id:{
      type: dataTypes.INTEGER
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: dataTypes.STRING
    },
    length: {
      type: dataTypes.INTEGER
    },

  };
  let config ={
    tableName: "movies",
    timestamps: false
  }

  const Pelicula =sequelize.define(alias, cols, config);

  return Pelicula;
}

//Le explicamos a sequelize como es nuestro modelo
```
Los timestamps no son obligatorios, pero la mayoría de las tablas suelen tenerlos y forman parte del estándar.  Estos deben llamarse de la misma forma que se ve en el ejemplo

## Configuraciones adicionales
Dentro de nuestro tercer parámetro del define() podemos configurar cosas adicionales. Por ejemplo, si el nombre de nuestra tabla está en inglés y el de nuestro modelo en español, deberíamos aclararle al modelo que esto es así mediante un objeto literal, como en el ejemplo de la siguiente diapositiva

```javascript
module.exports = (sequelize, DataTypes) => {
    const Pelicula = sequelize.define("Pelicula",
       {
  // Configuraciones de las columnas.
       },
       {
          tableName: 'movies', 
  //Si el nombre de la tabla no coincide con el del modelo
          timestamps: false,  
  //Si no tengo timestamps
       });
  
    return Pelicula;
  }
```

# findAll, findOne, findByPk

    Sequelize utiliza la función find para buscar información en una base de datos. Junto con find tenemos algunas variaciones como findAll(), findOne(), findByPk()

## findAll() 
= SELECT * FROM table

Para buscar todos los datos registrados en la tabla debemos usar: findAll().
```javascript
const db = require('../database/models'); 

  db.Usuario.findAll()
     .then((resultados) => {
        console.log(resultados);
});

//Incluir la conexion a la base de datos

//La función findAll() devuelve una promesa, por lo tanto, la usamos para acceder al resultado de la búsqued

//El resultado se asignará en el parámetro de esta función, aquí lo llamamos resultados, pero podría ser cualquier otro nombre
```
## findOne()
Nos permite buscar resultados que coincidan con los atributos indicados en el objeto literal que recibe el método
```javascript
db.Usuario.findOne({
   where: {
       name: 'Tony'
     }
   }).then((resultado) =>{
       console.log(resultado);
   });
```
## findByPk()
Este método busca un registro con la clave primaria del mismo valor al parámetro pasado:
```javascript
db.Auto.findByPk(42)
.then((resultado) => {
       console.log(resultado);
});
// SELECT * FROM autos WHERE id = 42;
```

# Where y Like
![](/CLASE%2037/Archivos/7.png)

## Where
Para agregar una condición a la consulta, simplemente debemos pasar el atributo where al método findAll():

```javascript
const db = require('../database/models');
db.Auto.findAll({
where: {
   marca: 'Fiat'
}
}).then(resultados=>{
       console.log(resultados);
   })
```

* Dentro del where pasamos el atributo de acuerdo con la columna de la tabla y el valor a busca

## Like
Para agregar condiciones a la búsqueda del Where, podemos utilizar los operadores que trae Sequelize. Uno de ellos es Like:

```javascript
const db = require('../database/models');
const Op = db.Sequelize.Op; //Requerimos los operadores de Sequelize
Post.findAll({
   where: {  
apellido: {[Op.Like]:'%s%'}  
   } //En este caso, se filtra por la columna de apellidos. Hacemos uso del operador like, de la misma manera que lo hacíamos en SQL
}).then(resultados=>{
       console.log(resultados);
   })
//En este caso, los resultados dela consulta serían todos los apellidos que contengan la letra “s”

```

# Order, Limit y Offse

## Order
    Order es una forma de ordenar el resultado de la consulta a la base de datos a través de una columna elegida.
    Podemos ordenar los elementos por id, fecha de creación, nombre, etc

En sequelize, para ordenar el resultado simplemente hay que usar el atributo **order**, que recibe un array


```JAVASCRIPT
db.Usuario.findAll({
   order: [
   ['nombre', 'ASC'],
 ],
});
{}
 order: [
   ['nombre', 'ASC'],
 ],
 order: [
   ['nombre', 'ASC'],
 ],
```
* El primer valor del array es la columna que se desea ordenar. El segundo valor es el orden de ordenamiento: ascendente o descendente.

## Limit
Sirve para limitar el número de resultados a obtener.

Para limitar el número de resultados, simplemente hay que agregar el atributo limit al objeto y pasarlo al findAll()

```javascript
db.Usuario.findAll({
   limit: 10
   })
   .then((resultados) => {
   console.log(resultados)
})
```

## Offset
Sirve para omitir varios resultados. Es utilizado ampliamente para paginar los resultados

Para omitir varios elementos del resultado, simplemente hay que agregar el atributo offset al objeto y pasarlo al findAll():

```javascript
db.Usuario.findAll({
   offset: 10
   })
   .then((resultados) => {
   console.log(resultados)
}
```

## Order + Limit + Offset
Se pueden usar todos los métodos juntos, pasándolos simplemente como parámetros al findAll():

```javascript
db.Usuario.findAll({
   order: [['nombre', 'ASC']],
   offset: 5,
   limit: 10
})
```









