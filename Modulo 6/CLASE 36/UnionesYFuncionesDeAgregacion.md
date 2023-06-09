# CLASE 36 - TEMAS
* Joins
* Distincts
* Group by
* Fx de agregacion
* Having

# Joins
¿cómo podemos traer todas las imágenes que pertenecen a una persona si esa información está presente en otra tabla? Pues bien, para lograr esto, MySQL nos proporciona una herramienta llamada JOINS. Estos, tal como su nombre lo indica, no son otra cosa que uniones entre distintas tablas que tienen algún tipo de relación entre sí.

## Por que usar joins?
Además de hacer consultas dentro de una tabla, a veces es necesario hacer 
consultas a distintas tablas, y unir esos resultados con JOINS.
Los JOINS dentro de otras cosas:
* Son más flexibles.
* Su sintaxis es mucho más utilizada.
* Presentan una mejor performance. 
3Joins

## Inner join
El INNER JOIN hará una cruza entre dos tablas. Si cruzáramos las tablas de  clientes y ventas y hubiese algún cliente sin ventas, el INNER JOIN no traería a ese cliente como resultado

![](/CLASE%2036/Archivos%20/1.png)

## Left join y Right join
Estos tipos de JOINS no excluyen resultados de alguna de las dos tablas. Si hubiese clientes sin ventas, podríamos incluirlos en el resultado mediante LEFT o RIGHT JOIN.

![](/CLASE%2036//Archivos%20/2.png)

## Creando un inner join
* Antes escribiamos:
```SQL
SELECT clientes.id AS id, clientes.nombre, ventas.fecha
FROM clientes, ventas
```

* Ahora escribiremos;
``` SQL
SELECT clientes.id AS id, clientes.nombre, ventas.fecha
FROM clientes
INNER JOIN ventas
```
Si bien ya dimos el primer paso(que es cruzar ambas tablas), aun nos falta aclarar donde esta ese cruce.
Es decir, que **clave primaria (PK)** se cruzara con que **clave foranea (FK)**

La sintaxis del join no utiliza el WHERE, si no que requiere la palabra ON. 
Es ahí en donde indicaremos el filtro a tener en cuenta para realizar el cruce.
Es decir, que lo que antes escribíamos en el WHERE ahora lo escribiremos en el ON.

```SQL
SELECT clientes.id AS id, clientes.nombre, ventas.fecha
FROM clientes
INNER JOIN ventas
ON clientes.id = ventas.cliente_id
```
Y si quisieramos incluir en el resultado aquellos clientes que NO tenga ventas asociadas?

## Creando un Left join
Para incluir aquellos clientes sin ventas basta cambiar INNER JOIN por LEFT JOIN. El LEFT JOIN incluirá todos los registros de la primera tabla de la consulta (la tabla izquierda) incluso cuando no exista coincidencia con la tabla derecha.

```SQL
SELECT clientes.id AS id, clientes.nombre, ventas.fecha
FROM clientes
LEFT JOIN ventas
ON clientes.id = ventas.cliente_id
```

## Creando un Right join
Para incluir aquellas ventas sin clientes basta cambiar LEFT JOIN por RIGHT JOIN. El RIGHT JOIN incluirá todos los registros de la tabla derecha. Si miramos la query, la tabla ventas aparece posterior a la tabla de clientes...a la derecha

```SQL
SELECT clientes.id AS id, clientes.nombre, ventas.fecha
FROM clientes
RIGHT JOIN ventas
ON clientes.id = ventas.cliente_id
```

## Cruzando muchas tablas
En el siguiente ejemplo se muestra cómo hacer cruces de muchas tablas en una misma consulta usando joins:

```SQL
SELECT clientes.id AS id, clientes.nombre, ventas.fecha
FROM clientes
INNER JOIN ventas
ON clientes.id = ventas.cliente_id
INNER JOIN productos
ON productos.id = ventas.producto_id
```

# Distinct 
La cláusula DISTINCT nos devuelve valores únicos. En una tabla, una columna puede contener valores duplicados y algunas veces solo se necesita un listado con los valores diferentes. Es decir, que no aparezcan aquellos que están repetidos.

```SQL
SELECT DISTINCT columna_1, columna_2
FROM nombre_tabla;
```
EJEMPLO
-
Partiendo de una tabla de usuarios, si ejecutáramos la consulta:
```SQL
SELECT pais FROM usuarios;
```
Obtendríamos:

'Perú, Perú, Argentina, Francia, Argentina'

Existen escenarios en los que vamos a necesitar obtener solo los valores 
distintos que aparecen en una columna.

Agregando el DISTINCT en la consulta:
```SQL 
SELECT DISTINCT pais FROM usuarios;
```
Obtendríamos:

'Perú, Argentina, Francia'

```javascript
SELECT DISTINCT actors.first_name, actors.last_name
FROM actors
INNER JOIN actor_movie ON actors.id = 
actor_movie.actor_id
INNER JOIN movies ON movies.id = actor_movie.movie_id
WHERE movies.title LIKE '%Harry Potter%';
```
En este ejemplo vemos una query que pide los actores que hayan actuado en cualquier película de Harry Potter.
Si no escribiéramos el DISTINCT los actores que hayan participado en más de una película, aparecerían repetidos en el resultado

# Group by
GROUP BY se usa para agrupar los registros de la tabla resultante de una consulta por una o más columna.

```SQL
SELECT columna_1,
FROM nombre_tabla
WHERE condition
GROUP BY columna_1;
```
```SQL
SELECT marca,
FROM autos
GROUP BY marca
```
![](/CLASE%2036/Archivos%20/3.png)

Dado que GROUP BY agrupa la información, perdemos el detalle de cada una de las filas. Es decir, ya no nos interesa el valor de cada fila sino un resultado consolidado entre todas las filas.

La consulta:
```SQL
SELECT id, marca
FROM autos
GROUP BY marca;
```
Nos daría un error. Si agrupamos los datos por marca, ya no podemos pedir el campo id.
Por ende, al utilizar GROUP BY, en los campos que se muestran como 
resultado en el SELECT solamente podemos indicar:
* Datos agrupados.
* Funciones de agregación.

Veamos algunos ejemplos...

```SQL
SELECT marca, MAX(precio)
FROM autos
GROUP BY marca;
```
```SQL
SELECT genero.nombre, AVG(duracion)
FROM peliculas
INNER JOIN generos ON generos.id = genero_id
GROUP BY genero.nombre
```

# Funciones de agregacion
Las funciones de agregación realizan cálculos sobre un conjunto de datos y devuelven un único resultado. Excepto COUNT, las funciones de agregación ignorarán los valores NULL.

## COUNT
Devolverá la cantidad de filas/registros que cumplen con el criterio
 ```SQL
SELECT COUNT(*) FROM movies;
```
Devolverá la cantidad de registros de la tabla movies
```SQL
SELECT COUNT(id) AS total FROM movies WHERE genre_id = 3;SQL
```
Devolverá la cantidad de películas de la tabla movies con el genero_id 3 en una columna con el nombre “total”.

## AVG,SUM
AVG (average) devolverá el promedio de una columna con valores numéricos.

SUM (suma) devolverá la suma de una columna con valores numéricos
```SQL
SELECT AVG(rating) FROM movies
```
Devolverá el promedio del rating de las películas de la tabla movies.
```SQL
SELECT SUM(length) FROM movies;
```
Devolverá la suma de las duraciones de las películas de la tabla movies

## MIN, MAX
* MIN devolverá el valor mínimo de una columna con valores numéricos.
* MAX devolverá el valor máximo de una columna
```SQL
SELECT MIN(rating) FROM movies;
```
Devolverá el rating de la película menos ranqueada.
```SQL
SELECT MIN(rating) FROM movies;
```
Devolverá el rating de la película menos ranqueada
```SQL
SELECT MAX(rating) FROM movies;
```
Devolverá el rating de la película mejor ranqueada.

# Having
Cumple la misma función que WHERE, a diferencia de que HAVING se va a poder usar en conjunto con las funciones de agregación para filtrar datos agregados

```SQL
SELECT columna
FROM tabla
WHERE condicion
GROUP BY columna
HAVING condicion
ORDER BY columna;
```
Esta consulta devolverá la cantidad de clientes por país (agrupados por país). Solamente se incluirán en el resultado aquellos países que tengan al menos 3 clientes.

```SQL
SELECT COUNT(cliente_id), pais
FROM clientes
GROUP BY pais
HAVING COUNT(clienteId) > 3
```

![](/CLASE%2036/Archivos%20/4.png)