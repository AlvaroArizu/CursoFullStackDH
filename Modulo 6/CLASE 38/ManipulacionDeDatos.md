# CLASE 38 - TEMAS
* Create
* Update
* Destroy / Soft deletes

Como ya hemos visto, al trabajar con MySQL existe la posibilidad de crear, actualizar y borrar registros de una base de datos.

Estas mismas tareas también son posibles de realizar dentro de Sequelize. Pero a diferencia de MySQL, en Sequelize para modificar un registro tendremos que usar el método update() y para borrarlo el método destroy(). El create sigue siendo lo mismo en los dos casos, solo que dentro de Sequelize para crear un registro deberás usar el método create().

Crear, actualizar o borrar registros es una tarea bastante habitual dentro de los sistemas de back-end. Como ya sabemos, este proceso recibe el nombre de CRUD, por sus siglas en inglés: Create, Read, Update, Delete.

Con todo lo visto aquí, al terminar esta clase podremos:

Implementar las tareas de un sistema CRUD con Sequelize.
Entender que los métodos destroy() y update() necesitan previamente de un where.
Capturar la información que viaja en el request para que la misma sea guardada en la base de datos.
Implementar mecanismos de control en los escenarios en donde el registro no pudo ser creado o actualizado.


# Create
Es un metodo que nos permite agregar nuevos registros en nuestras tablas de la base de datos

Para acceder a el primero llamamos al modelo

Recibe un objeto literal donde definimos que campos vamos a modificar y con que valores 


```javascript
const db = require(‘../database/models’);

db.Usuario.create({
   name: "Manuel",
   username: "manolito",
   password: "manolo123"
});
```

# Update
Es un metodo que nos permite editar registros en nuestras tablas de la base de datos

Se tiene que llamar primero al modelo para acceder a el 

```javascript
onst db = require(‘../database/models’);

db.Usuario.update()
```

Update, recibe 2 parametros 
-
* 2 objetos literales:
   1. Se le indica el campo de la tabla que queremos modificar y que valor asignar
   2. Debe tener un **where** que indique de manera unica a que registro aplicar los cambios. En caso de no hacerlo, se modoficaran todos los campos de la base de datos

```javascript
const db = require(‘../database/models’);

db.Usuario.update(
{
username: 'ManuelF'
},
{
   where: {id: 10}
});
```


# Destroy
Es un metodo que nos permite eliminar registros en nuestras tablas de la base de datos
Se llama primero al modelo para acceder a el
## .destroy()

```javascript
const db = require(‘../database/models’);

db.Usuario.destroy({
   where: {id: 10}
});
```

Recibe un solo parametro, este sera un objeto literal con un where que tendra la condicion que necesitamos aclarar para eliminar el registro, sino aclaramos se eliminaran todos los campos