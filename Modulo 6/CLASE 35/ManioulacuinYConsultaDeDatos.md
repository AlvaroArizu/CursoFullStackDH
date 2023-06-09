# Temas de la clase:
  * Insert, update y delete
  * Select
  * Where y Order by
  * Between y like
  * Limit y offset
  * Alias
  * Funciones de alteración

# Insert, update y delete
Estas tres funciones son llevadas a cabo gracias a las tres directrices principales que tiene MySQL para esta finalidad.

* Insert nos va a permitir agregar datos, 
* Delete podremos borrarlos 
* Update podremos modificar los registros existentes en una tabla

## Insert
Existen dos formas de agregar datos en una tabla:
1. Insertando datos en todas las columnas.
2. Insertando datos en las columnas que especifiquemos.

1. Todas las Columnas 
Si estamos insertando datos en todas las columnas, no hace falta aclarar los nombres de cada columna. Sin embargo, el orden en el que insertemos los valores, deberá ser el mismo orden que tengan asignadas las columnas en la tabla.

```SQL
INSERT INTO table_name (columna_1, columna_2, columna_3, ...)
VALUES (valor_1, valor_2, valor_3, ...);
```

```SQL
INSERT INTO usuarios (id, nombre, apellido)
VALUES (DEFAULT, 'Max', 'Power');
```

```SQL
INSERT INTO usuarios
VALUES (DEFAULT, 'Max', 'Power');
```

2. Columnas especificas
Para insertar datos en una columna en específico, aclaramos la tabla y luego escribimos el nombre de la o las columnas entre los paréntesis.

```SQL
INSERT INTO usuarios (nombre)
VALUES ('Santi');
```

```SQL
INSERT INTO peliculas (duracion, titulo) 
VALUES (112, 'kill Bill');
```
## Update
Modificará los registros existentes de una tabla. Es importante recordar utilizar siempre el WHERE en la sentencia para agregar la condición de cuáles son las filas que queremos actualizar.

```SQL
UPDATE nombre_tabla
SET columna_1 = valor_1, columna_2 = valor_2, ...
WHERE condición;
```

```SQL
UPDATE usuarios
SET nombre = 'Cosme', apellido = 'Fulanito'
WHERE id = 1;
```
## Delete
Con DELETE podemos borrar información de una tabla. Al igual que con UPDATE, es importante no olvidar el WHERE cuando escribimos la sentencia, aclarando la condición. Si no escribimos el WHERE, estaríamos borrando toda la tabla y no un registro en particular. 

```SQL
DELETE FROM nombre_tabla WHERE condición;
```
```SQL
DELETE FROM usuarios WHERE usuario_id = 4;
```


# Select
Cuando guardamos información en una base de datos, uno de los objetivos a futuro es el de poder consultarla cada vez que sea necesario. Para lograr este resultado existe la directriz select la cual nos va a permitir, tal como su nombre lo indica, seleccionar columnas de una tabla para poder acceder a la información allí presente.

Como usarlo? 
Toda consulta a la base de datos va a empezar con la palabra SELECT. Su funcionalidad es la de realizar consultas sobre una o varias columnas de una tabla.
Para especificar sobre qué tabla queremos realizar esa consulta usamos la palabra FROM seguida del nombre de la tabla.

```SQL
SELECT nombre_columna, nombre_columna, ...
FROM nombre_tabla
```

![Ejemplo](/MODULOS/Modulo%206/CLASE%2035/Archivos/Select.png)

# Where y order by
Para filtrar los datos de esa manera, MySQL tiene un par de directrices específicas que nos van a permitir filtrar estos datos y obtener solamente los que estamos buscando.

## Where
La funcionalidad del WHERE es la de condicionar y filtrar las consultas 
SELECT que se realizan a una base de datos

```SQL
SELECT nombre_columna_1, nombre_columna_2, ...
FROM nombre_tabla
WHERE condicion;
```
Teniendo una tabla usuarios, podríamos consultar nombre y edad, 
filtrando con un WHERE solo los usuarios mayores de 17 años de la 
siguiente manera:

```SQL
SELECT nombre, edad
FROM usuarios
WHERE edad > 17
```

**OPERADORES**
![Operadores](/MODULOS/Modulo%206/CLASE%2035/Archivos/1.png)
![](/MODULOS/Modulo%206/CLASE%2035/Archivos/2.png)

**EJEMPLOS EN CODIGO**
```SQL
SELECT *
FROM movies
    WHERE awards >= 3
    AND awards < 8;
```

```SQL
SELECT *
FROM movies
    WHERE awards = 2
    OR awards = 6;
```

```SQL
SELECT nombre, edad
FROM usuarios
WHERE edad > 17;
```

```SQL
SELECT *
FROM movies
WHERE title LIKE 'Avatar';
```

```SQL
DELETE FROM usuarios
WHERE id = 2;
```

## Order By
ORDER BY se utiliza para ordenar los resultados de una consulta según el valor de la columna especificada. Por defecto, se ordena de forma ascendente (ASC) según los valores de la columna. También se puede ordenar de manera descendente (DESC) aclarándolo en la consulta.

```SQL
SELECT nombre_columna1, nombre_columna2
FROM tabla
WHERE condicion
ORDER BY nombre_columna1;
```

**EJEMPLO**

Teniendo una tabla usuarios, podríamos consultar los nombres, filtrar con un WHERE solo los usuarios mayores de 21 años y ordenarlos de forma descendente tomando como referencia la columna nombre.

```SQL
SELECT nombre, edad
FROM usuarios
WHERE edad > 21
ORDER BY nombre DESC;
```
# Between y like
Las directrices Between y Like son fundamentales para poder poder hacer este tipo de consultas y más. Veamos entonces cómo se pueden llevar a cabo.

## Between
Cuando necesitamos obtener valores dentro de un rango, usamos el 
operador BETWEEN.

➔ BETWEEN incluye los extremos.

➔ BETWEEN funciona con números, textos y fechas.

➔ Se usa como un filtro de un WHERE.

Por ejemplo, coloquialmente:

➔ Dados los números: 4, 7, 2, 9, 1

Si hiciéramos un BETWEEN entre 2 y 7, devolvería 4, 7, 2 (excluye el 9 y el 1, 
e incluye el 2).
Between

**Query de ejemplo**

Con la siguiente consulta estaríamos seleccionando nombre y edad de la tabla alumnos solo cuando las edades estén entre 6 y 12. 

```SQL
SELECT nombre, edad
FROM alumnos
WHERE edad BETWEEN 6 AND 12;
```

## Like 
Cuando hacemos un filtro con un WHERE, podemos especificar un patrón 
de búsqueda que nos permita especificar algo concreto que queremos 
encontrar en los registros. Eso lo logramos utilizando comodines 
(wildcards).

Por ejemplo, podríamos querer buscar:

➔ Los nombres que tengan la letra “a” como segundo caracter.

➔ Las direcciones postales que incluyan la calle “Monroe”.

➔ Los clientes que empiecen con “Los” y terminen con “s”.

---
**COMODIN %**
--
Es un sustituto que representa **CERO, UNO o VARIOS** caracteres

---
**COMODIN _**
--
Es un sustituto para **UN SOLO** caracter

---
##  Queries de ejemplo
```SQL
SELECT nombre
FROM usuarios
WHERE edad LIKE '_a%';
```
Devuelve aquellos nombres que tengan la letra “a” como segundo caracter.
```SQL
SELECT nombre
FROM usuarios
WHERE direccion LIKE '%Monroe%';
```
Devuelve las direcciones de los usuarios que incluyan la calle “Monroe”
```SQL
SELECT nombre
FROM clientes
WHERE nombre LIKE 'Los%s';
```
Devuelve los clientes que empiecen con “Los” y terminen con “s”.


# Limit y offset
Las directrices LIMIT y OFFSET son las herramientas necesarias

## Limit
Su funcionalidad es la de limitar el número de filas (registros/resultados) 
devueltas en las consultas SELECT. También establece el número máximo de registros a eliminar con DELETE.

```SQL
SELECT nombre_columna1, nombre_columna2
FROM nombre_tabla
LIMIT cantidad_de_registros;
```

EJEMPLO 
--
Teniendo una tabla peliculas podríamos armar un top 10 con las películas Que tengan más de 4 premios usando un LIMIT en la siguiente consulta:

```SQL
SELECT *
FROM peliculas
WHERE premios > 4
LIMIT 10;
```

## Offset
En un escenario en donde hacemos una consulta de todas las películas de la base de datos, la misma nos devolvería muchos registros. Usando un LIMIT podríamos aclarar un límite de 20.

Pero ¿cómo haríamos si quisiéramos recuperar solo 20 películas, pero salteando las primeras 20 de la tabla? 

OFFSET nos permite especificar a partir de qué fila comenzar la 
recuperación de los datos solicitados. 

EJEMPLO 
--
```SQL
SELECT id, nombre, apellido 
//"Seleccionamos las columnas id,nombre y apellido"
FROM alumnos 
//"De la tabla alumnos"
LIMIT 20 
//"Limitamos los registros de la tabla resultante a 20 registros"
OFFSET 20; 
//"Desplazamos los resultados 20 posiciones para que se muestre desde la posicion 21"
```

# Alias
Imaginemos que estamos trabajando con una base de datos cuyas columnas de las tablas están en inglés, pero nos solicitan expresamente que los resultados de las consultas deben traer el nombre de las columnas en español

Los alias se usan para darle un nombre temporal y más amigable a las tablas, columnas y funciones. Los alias se definen durante una consulta y persisten solo durante esa consulta.

Para definir un alias usamos las iniciales AS precediendo a la columna que estamos queriendo asignarle ese alias.

```SQL
SELECT nombre_columna1 AS alias_nombre_columna1
FROM nombre_tabla;
```

Alias para una columna
-
```SQL
SELECT razon_social_cliente AS nombre
FROM cliente
WHERE nombre LIKE 'a%';
```
* Con el SELECT Seleccionamos la columna razon_social_cliente y le asignamos el ALIAS nombre
* Con el FROM elegimos la tabla cliente
* Con el WHERE filtramos los registros de la columna nombre que empiecen con la letra a

Alias para una tabla
-
```SQL
SELECT nombre, apellido, edad
FROM alumnos_comision_inicial AS alumnos;
```
* Con SELECT seleccionamos las columnas nombre, apellido y edad
* Con FROM hacemos la consulta sobre la tabla alumnos_comision_inicial y le asignamos el ALIAS alumnos.

Para asignar un alias con espacio es necesario escribirlo entre comillas simples
```SQL
FROM alumnos_comision_inicial AS 'alumnos';
```

**LOS ALIAS NO MODIFICAN LOS NOMBRES ORIGINALES DE LA BASE DE DATOS**


# Funciones MySQL
Las funciones de alteración de MySQL nos van a permitir jugar un poco con el resultado de la consulta. Teniendo siempre en cuenta que las mismas nunca alterarán los datos originalmente almacenados en la base.

Las funciones de alteración más comunes, y las que vamos a ver, son:

* Concat
* Coalesce
* Datediff
* Extract
* Replace
* Date format
* Case

## Concat
Se usa para concatenar 2 o mas expresiones 
```SQL
SELECT CONCAT('Hola ', 'a ', 'todos.')
```
> 'Hola a todos.'
```SQL
SELECT CONCAT('La respuesta es: ', 24, '.');
```
> 'La respuesta es 24.'
```SQL
SELECT CONCAT('Nombre: ', first_name, ' ', last_name)
FROM actors;
```
> 'Nombre: Emilia Clarke'

## Coalesce

Usamos COALESCE para obtener la primera expresión que no sea NULL:

```SQL
SELECT COALESCE(NULL, 1, 20, 'Digital House');
```
> 1
```SQL
SELECT COALESCE(NULL, NULL, 'Digital House');
```
> 'Digital House'

# Coalesce
Los tres clientes de la siguiente tabla poseen uno o más datos nulos:

![](/MODULOS/Modulo%206/CLASE%2035/Archivos/3.png)

Usando COALESCE podremos obtener el primer dato no nulo de cada 
registro, aclarando las columnas a tener en cuenta.

```SQL
SELECT id, nombre, COALESCE(celular, casa, trabajo) AS telefono
FROM clientes
```
![](/MODULOS/Modulo%206/CLASE%2035/Archivos/4.png)

# Datediff
Usamos DATEDIFF para devolver la diferencia (en días) entre dos fechas, 
tomando como granularidad el intervalo especificado.

```SQL
  SELECT DATEDIFF('2017/08/25', '2017/08/15');
```
  > 10

Devuelve 10 porque es la cantidad de días de diferencia entre
el día 25 y el 15.  

# Extract

Usamos EXTRACT para extraer partes de una fecha:
```SQL
  SELECT EXTRACT(SECOND FROM '2014-02-13 08:44:21');
```
  > 21
```SQL
  SELECT EXTRACT(MINUTE FROM '2014-02-13 08:44:21');
```
  > 44
```SQL
  SELECT EXTRACT(HOUR FROM '2014-02-13 08:44:21');
```
  > 8
```SQL
  SELECT EXTRACT(DAY FROM '2014-02-13 08:44:21');
```
  > 13

# Replace
Usamos REPLACE para reemplazar una secuencia de caracteres
por otra en un string.
```SQL
  SELECT REPLACE('abc abc', 'a', 'B');
```
  > Bbc Bbc
```SQL
  SELECT REPLACE('abc abc', 'A', 'B');
```
  > abc abc 
-- no se encuentran coincidencias para reemplazar
```SQL
  SELECT REPLACE('123 123', '2', '5');
```
  > 153 153

# Date format
Usamos DATE_FORMAT para que dada una fecha determinada se pueda 
formatear la misma según deseemos.

```SQL
  SELECT DATE_FORMAT('2017-06-15', '%Y');
```
  > '2017'
```SQL
  SELECT DATE_FORMAT('2017-06-15', '%W %M %e %Y');
```
  > 'Thursday June 15 2017'

# Case
Usamos CASE para evaluar condiciones y devolver la primera que se cumpla. En este ejemplo, la tabla resultante tendrá 4 columnas: id, title, rating y rating_categories. Esta última mostrará 'Mala', 'Regular', etc., según el rating de la película.

```SQL
SELECT id, title, rating
    CASE
      WHEN rating < 4 THEN 'Mala'
      WHEN rating < 6 THEN 'Regular'
      WHEN rating < 8 THEN 'Buena'
      WHEN rating < 9.5 THEN 'Muy buena'
      ELSE 'Excelente'
    END AS rating_categories
  FROM movies
  ORDER BY rating
```