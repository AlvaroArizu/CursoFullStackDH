/*
_Intro html
_Etiquetas y atributos
_Elementos en linea y de bloqueo
_Etiquetas de texto
_Listas
_Rutas, hipervinculos e imagenes
_Intro a semantica
_Estructura de un sitio web

Con html podemos crear todos los elementos visuales de un sitio web ya sean textos, imagenes, formularios e incluso contenido mas avanzado

HTML(Lenguaje que nos permite estructurar un sitio web)
Es un lenguaje de marcado que nos permite, mediante etiquetas, generar contenido visible dentro de nuestro sitio web. Podemos crear desde elementos simples, como títulos, hasta elementos más complejos, como formularios. Para eso tendremos que aprender algunas cuestiones importantes: la sintaxis de HTML con sus etiquetas y atributos, cómo estructurar un sitio y las características de los distintos elementos de HTML.

CSS
Es la herramienta que nos permitirá darle estilo a nuestro sitio, colocando colores, tipografías, fondos, posicionando elementos y permitiendo utilizar estilos distintos según la resolución de cada pantalla. Para poder utilizarla lo mejor posible, al igual que con HTML, tendremos que aprender algunas cuestiones fundamentales: la sintaxis de CSS con sus propiedades, clases, selectores, y cómo armar una hoja de estilos de forma ordenada y bien conectada con el HTML.

HTML Etiquetas
<h1> de apertura
</h1> de clausura

ATRIBUTOS, es una forma de modificar la etiqueta

Partes:
      Nombre del atributo
      Un signo de igual
      El valor del atributo entre comillas

      ej: <h1 aling="center">Hola mundo</h1>  (Centra el contenido del texto dentro de la etiqueta)

Estructura basica de HTML

<!DOCTYLE html>  DEFINE LA VERSION DEL LENGUAJE UTILIZADO
<html>  DEFINE QUE TODO EL CONETENIDO INTERNO VA SER DE HTML

<head>  GUARDA TODA LA INFO REFERENTE AL DOC
  <meta charset="UTF-8"> ETIQUETQ DE USO MULTIPLE, EN ESTE CASO CON EL ATRIBURO CHARSET, DEFINE LA CODIFICACION DE CARACTERES
  <title></title> ACA SE ESCRIBE LO QUE SE MOSTRAR EN EL NAVEGADOR 
</head>
<body>  CONTIENE TODAS LAS ETIQUETAS QUE GENERAN EL CONTENIDO VISUAL

</body>
<html>

ELEMENTOS DE LINEA Y DE BLOQUEO

-Grupos: 
        Elementos en linea: <span>
        Elementos de bloqueo: <div>
        Elementos de semi-bloque
        Elementos ocultos

display: es una propiedad de CSS que podemos cambiar la disposicion del elemento que queremos 
  ej: .en-linea {display: inline;}
      .en-bloque {display: block;}
      .de-bloque-en-linea {display: inline-block;}
      .oculto {display: none;}

      ETIQUETAS DE BLOQUE: 
      <header></header>
      <nav></nav>
      <footer></footer>
      <section></section>
      <article></article>
      <div></div>
ETIQUETAS DE TEXTO

.h son de 6 tipos
<h1> </h1>  se usa solo una vez
<h2> </h2>
<h3> </h3>
<h4> </h4>
<h5> </h5>
<h6> </h6>

.p genera bloques de texto
<p> </p>

<strong> </strong> para hacer textos en negrita
<em> </em> para hacer textos en cursia
AMBAS SON ELEMENTOS DE LINEA

<br> (No lleva cierre) sirve para generar saltos de linea entre parrafos

LISTAS DE ITEMS

Son los elemetos de bloque, 2 tipos de listas: ordenadas y desordenadas

<ol> </ol>Ordenada es la que genera items numericos
<ul> </ul> Desordenada es la que genera items con puntos

En ambos casos los items se hace con <li></li>

<ol>
    <il> </il>
    <il> </il>
    <il> </il>
</ol>

<head>
    <title>Listas</title>
  </head>
  <body>
    <ul start="10">
      <li>Negro</li>
      <li>Blanco</li>
      <li>Azul</li>
    </ul>
  <ol start="10">
    <li>Bajo la misma estrella</li>
    <li>A tres metros sobre el cielo</li>
    <li>Never say never</li>
  </ol>
  </body>
</html>

RUTAS, HIPERVINCULOS E IMAGENES

.Ruta: es un trayecto, hay 2 tipos
      1. absolutas: contiene toda la info del recurso, son como coordenadas
      2. relativas: contiene solo la info necesaria para que el doc llege al lugar determinado


Para imagenes
<img> (no necesita cierre, pero si atributos)
  src="..." (ruta ab o al) ab no es necesario que la foto este en la compu y en la al si es necesario

  alt="..."

Para enlaces o hipervinculos
<a href=.......enlace> Nombre del hipervinculo</a> 


INTRO A LA SEMANTICA
<h1>TITULO PRINCIPAL</h1>
<h2>SUBTITULO</h2>

<header>
        Logotipo
        Barra de navegacion
        Barra de busqueda
        Enlaces a redes sociales
</header>

<nav>
    Genera una barra de navacion, listas desordenadas, enlaces e hipervinculos
</nav>

<footer>
        Genera el pie de pagina principal del doc o de una seccion de contenido
        Derechos reservados
</footer>

<section> Sirve para definir una seccion del contenido monotematica, puede usar footer o header

<article> Sirve para describir un producto, general mente va adentro de un <section>

ESTRUCTURA DE UN SITIO WEB


COMO AGREGAR UNA IMAGEN: <img src="/images/Martina.jpg" alt="ciudad"
*/