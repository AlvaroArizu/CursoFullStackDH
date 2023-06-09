# Intro al Modulo 6
Se divide en 2 partes
   1. SQL y MySQL
   2. Sequelize ORM

La primera parte está enfocada en el aprendizaje del lenguaje SQL y el motor de base de datos relacionales MySQL. Mientras que la segunda está más enfocada al manejo del paquete de Node.js llamado Sequelize, el cual nos va a permitir trabajar con bases de datos MySQL desde un proyecto de Express.

## Guia de instalacion
Las bases de datos suelen ser un tema súper apasionante, pero que las emociones no nos hagan perder el camino y veamos si tenemos todo lo necesario para comenzar.

Se necesita lo siguiente:
  * Un gestor de base de datos
  * Una herramineta que nos permita manipular la base de datos

Como gestor de base de datos vamos a estar utilizando MySQL, una de las bases de datos relacionales más utilizadas, y como herramienta para manipularla, MySQL Workbench, que nos va a permitir esta interacción incluso en forma gráfica.


# Intro a bases de datos

Que es? 
Es un conjunto de datos pertenecientes a un mismo contexto organizado para un proposito especifico.
Una base de datos nos permite
   * Almacenar (Agregar, modificar, eliminar) datos.
   * Acceder a los datos
   * Manipular y combinarlos
   * Analizar datos

## 2 tipos de bases de datos
   1. Relacionales
   2. No relacionales

Nos vamos a enfocar en las relacional, ya que nos permite comprender a profundidd como funcionan las bases de datos y nos enfocaremos en MySQL.

## ¿Por qué MySQL corre en otro servidor?


Las bases de datos se alojan en un servidor distinto al de nuestra aplicación web. Esto implica que el puerto en el que viven sea otro. Esto se da de esta manera porque no siempre una base de datos es consumida por un aplicativo web, pues podría ser fácilmente consumida por otro tipo de servicio.

Al instalar MySQL en la computadora y levantar el servidor, habitualmente, este queda habilitado en el puerto 3306. Sin embargo, no siempre es así. Dependiendo de la manera en la que se haya instalado MySQL, puede que el puerto sea otro.

Algo que vale la pena aclarar es que una base de datos no es en sí un archivo que podemos manipular, sino más bien es un conjunto de datos que están relacionados entre sí y que hacen parte de un todo.

## Tablas

Dentro de una base de datos, los registros concretos se organizan dentro de tablas con filas y columnas

![Ejemplo tablas](/MODULOS/Modulo%206/CLASE%2034/Archivos/EjemploTablas.png)

## Sistemas de gestion de bases de datos
Como funciona?
Es un sist. que nos permite la **creacion, gestion y administracion** de bases de datos, asi como la eleccion y manejo de las estructuras necesarias para el almacenamiento y busqueda de la info del modo mas eficiente.

## MySQL
Caracteristicas principale:
  * Multiplataforma
  * Estandar SQL-92
  * Open Source
  * Relacional
  * Velocidad
  * Multiconexiones


# Tablas
Una tabla de una base de datos busca almacenar la info que hace parte de un conjunto de datos

## Diagrama relacional
Es una abstraccion de lo que se conoce como tabla fisica de la base de datos
* Permite entender todas las tablas de la base de datos
* 1 rectangulo por cada tabla con su nobre 

**Id(pk)**: Id de clave primaria

### Clave primaria (Primary Key): es un campo que identifica a cada fila de una tabla de forma unica. Es decir que no puede haber 2 filas es una tabla que tenga la misma **PK**

# Relaciones
Esta indica como se van a relacionar 2 tablas. Dentro de una base de datos exiten 3 tipos de relaciones:

1. Uno a uno
2. Uno a muchos
3. Muchos a muchos

## Cardinalidad
Es la forma en que se relacionan las entidades

![cardinalidad](/MODULOS/Modulo%206/CLASE%2034/Archivos/cardinalidad.png)

## Tipos de relaciones 

1. Uno a muchos:
Ejemplo una pelicula tiene un genero pero un genero tiene muchas peliculas

**CLAVE PRIMARIA (PK)** : para hacer relaciones entre tablas 

**CLAVE FORANEA (FK)** : son las que apuntan a claves primarias de otra tabla

2. Muchos a muchos:
Ejemplo una pelicula tiene muchos actores y un actor trabaja en muchas peliculas

**PARA ESTABALCER UNA RELACION** : Se tiene que establecer una *tabla intermedia* esta va a conterner FK que son las PK de las tablas a relacionar

# Tipos de datos
 1. Tipos numericos
    1. Numericos sin decimales
    2. Booleanos 
 2. Tipos de fecha
    1. DATE
    2. TIME
    3. DATETIME
 3. Tipos de texto
    1. Char
    2. Varchar
    3. Text

# Constraints
Significa: RESTRICCIONES QUE SE UTILIZAN PARA LA INFO QUE PUEDE RECIBIR UNA TABLA

Dentro de una tabla esta nos permite generar un esquema de info mucho mas estable y funcional a los ojos de nuestra app

 * Ej: Dentro de una tabla de personas, la info alacenada en la columna de correo electronico NO se puede repetir

Nos permite definir reglas que se tienen que cumplir par que un dato pueda ser almacenado

## Tipos de restricciones:
 * UNIQUE KEYS:
Una unique key es una restricción que solo permite valores únicos para uno 
(o múltiples) campos. 

* NULL / NOT NULL:
”NULL” significa que el valor para ese campo no existe o no se conoce. 
“NULL” no es vacío ‘ ’ (blank) ni cero (0).

* DEFAULT:
Se usa para definir un valor por defecto para una columna. Este valor se le 
va a agregar a cada registro nuevo siempre y cuando no se especifique otro 
valor que lo sobreescriba.

* AUTO_INCREMENT:
Genera un número único y lo incrementa automáticamente con cada nuevo 
registro en la tabla. Se suele usar a menudo para el campo ID.

# Create, Drop y Alter
Las directrices **Create, Drop y Alter** nos van a permitir llevar a cabo cada una de estas acciones que, vale la pena mencionar, son bastante habituales dentro del proceso de trabajo con bases de datos.

## Create
Con CREATE TABLE podemos crear una tabla desde cero, junto con sus columnas, sus tipos y sus constraints


### Comando CREATE TABLE
``` SQL
REATE TABLE nombre_de_la_tabla (
    nombre_de_la_columna_1 TIPO_DE_DATO CONSTRAINT,
    nombre_de_la_columna_2 TIPO_DE_DATO CONSTRAINT
)
```
```SQL
CREATE TABLE post (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200)
)
```
### Ejemplo CREATE TABLE
```SQL
CREATE TABLE movies (
    id  INT UNSIGNED PRIMARY KEY AUTO INCREMENT,
    title VARCHAR(500) NOT NULL,
    rating DECIMAL(3,1) UNSIGNED NOT NULL,
    awards INT UNSIGNED DEFAULT 0,
    release_date DATE NOT NULL,
    length INT UNSIGNED NOT NULL
);
```
### Foreign KEY
Cuando creemos una columna que contenga una id foránea, será necesario usar la sentencia FOREIGN KEY para aclarar a qué tabla y a qué columna hace referencia aquel dato.
Es importante remarcar que la tabla “clientes” deberá existir antes de correr esta sentencia para crear la tabla “ordenes”.

```SQL
CREATE TABLE ordenes (
    orden_id INT NOT NULL,
    orden_numero INT NOT NULL,
    cliente_id INT,
    PRIMARY KEY (orden_id),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);
```

## Drop table
DROP TABLE borrará la tabla que le especifiquemos en la sentencia.
```SQL
DROP TABLE IF EXIST movies;SQL
```

## Alter table3
Permite alterar una tabla ya existente y va a operar con tres 
comandos:
* ADD: para agregar una columna.
* MODIFY: para modificar una columna.
* DROP: para borrar una columna.

### Ejemplos ALTER TABLE
```SQL
ALTER TABLE movies
ADD rating DECIMAL(3,1) UNSIGNED NOT NULL;
```
Agrega la columna rating, aclarando tipo de dato y constraint.

```SQL
ALTER TABLE movies
MODIFY rating DECIMAL(4,1) UNSIGNED NOT NULL;
```
Modifica el decimal de la columna rating. Aunque el resto de las configuraciones De la tabla no se modifiquen, es necesario escribirlas en la sentencia.

```SQL
ALTER TABLE movies
DROP rating;
```
Borra la columna rating.


# Foreign Keys (Clave foranea)
Una FOREIGN KEY es un constraint que permite que una columna de una tabla guarde como valor un dato particular que referencia a otra tabla, y que sirve para relacionar estas dos tablas entre sí.

Generalmente, la FOREIGN KEY se relaciona o vincula con la PRIMARY KEY de la otra tabla con la que deseamos crear la relación.

Como vimos en la tabla de usuarios tenemos una “columna id” que es la primary key de esa tabla y, a su vez, las columnas “email” y “nombre_de_usuario”.

Por otro lado, en la tabla de imágenes también tenemos una primary key que representa al id de la imagen. También tenemos la columna de la url 
de la imagen y la última columna: “id_usuario” que está marcada como foreign key. Lo que significa que cada registro presente en esta tabla guardará, en esta columna, el id de usuario al que corresponde dicha imagen

![FK](/MODULOS/Modulo%206/CLASE%2034/Archivos/EjemploForeignKey.png)

