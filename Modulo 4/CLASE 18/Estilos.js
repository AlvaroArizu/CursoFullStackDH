/*
TEMAS
.Intro a CSS
.Tipografia
.Colores
.Fondos

CSS y SELECTORES

Con Css podemos elegir: 
    .Color de textos
    .Tamanios de textos
    .Tipografia
    .Ubicacion
Lo ideal para integrar CSS y HTML es crear un documento aparte q tenga todo el estilo CSS (es la hoja de estilo, styles.css)
+Con la etiqueta <link> que tiene que estar dentro de <head> implementaremos el estilo css del archivo creado, href recibira la ruta donde se encuentra la hoja de estilo a vincular y el atributo rel siempre tendra el valor Styleheet

Ejemplo:
        <link rel= "stylesheet" href="/ruta-al-archivo/style.css">

REGLAS DE ESTILO: Conjunto de directrises que nos permiten generar algo denterminado para cada elemento
    3 paartes:
            1) Selector: define que elemto de html se aplicara la regla 

            2) Propiedad: Es la caracteristica visual que se quiere manupular

            3) Valor: Es el valor que se quiere manipular 

3 TIPOS DE SELECTORES 

*) De etiqueta
            Aplica estilos a cualquier etiqueta de html que coinsida con este nombre 
            EJEMPLO
            -HTML: <p> Hola como estas </p>
            -CSS: p {color : grey}
*) De clase
        Este selector va a atrapar al elemento HTML que tenga asignado el atributo "class" con el valor correspondiente
    EJEMPLO
        -HTML: <h3 class="noticia destacaa">Una noticia</h3>
        -CSS: .noticia {font-size: 22px}

*) De ID 
        Este selector va a atrapar al elemento HTML que tenga asignado el atributo id, se recomienda usar nombres unicos y no repetirlos
    EJEMPLO: 
    -HTML: <h3 id= "saludo"> Hola!</h3>
    -CSS: #saludo {color: blue} (Para llmarla desde CSS usamos # seguido del nombre del id)

*) Combinados
            Combina varios selectores a la vez
            EJEMPLO de selector de clase con uno de etiqueta
            -HTML: <h2 class="subtitilo">Un subtitulo</h2>
            -CSS: h2.subtitulo {color: yellow}

*) Descendentes
                Estos sirven para agregar especificidad
                EJEMPLO: vamos a atrar al elemento li que esta dentro del ul con el id lista, desde CSS lo llamamos separandolos por un espacio, a la derecha siempre
                -HTML: <ul id="lista">
                            <li> Primer item </li>
                        </ul>
                -CSS: ul#lista li { text-aling: center }


FUENTES

1)Color 
    -color: red
2)Tipografia 
    -font-famili: nombre de la clase de tipografia 
3)Tamanio
    -font-size: 15px
4)Font style: definir el estilo de la tipografia
    -font-style: italic/normal
5)Font Weight: define el peso de la tipografia, es decir en negrita
    -font-weigth: bold/normal;
6)Text Align: Permite configurar la alineacion 
    -text-aling: left/rigt/center/justify;
7)Text Decoration: 
    -tect-decoration: none/underline/line-through;
8)Text Transform: para transformar un texto
    -text-transform: none/uppercase/lowercase;
9)Line Height: sirve para definir el interlineado de un bloque de texto
    -font-size: 15px
    -line-height: 23px (8px mas que en el font-size)

COLORES

Formas de expresar el color:

*)color:red;
*)Color Hexadecimal (Formato mas utilizado)
    color: #f5f5dc;
*)Valores RGB
    color: rgb(0,0,0) [Negro]
    color: rgb(255, 255, 255) [Blanco]
    color: rgb(255, 0, 0) [Rojo]
*)Valores RGBA (Permite configurar la opacidad)
    color: rgba(255, 0, 0, 0.5) [Rojo claro]

EN GOOGLE: color picker

FONDOS

*) Background color
    background-color: #800080/(255,0,0,)/(255,0,0,1)/red;

*)Background image
    background-image: url(../images/star.png);

*)Background repe (Propiedad exclusiva para controlar el comportamiento de la imagen de fondo)
    background-repe: repeat/no-repeat/repeat-x/repeat-y;

*)Background position (para controlar la posicion de la imagen)
    background-position: (center/lift/rigth) (top/bottom);

*)Background attachment(para controlar el comportamiento de la imagen de fondo)
    backgroun-attachment scroll(Permite que la imagen se desplace en conjunto con el texto) / fixed(la imagen queda fija y el texto se mueve)
*)Background size(permite controlar el tamalo de la imagen de fondo)
    background-size: contain(Ocupa todo a la hancho o lo largo) / cover(ocupa todo)
*/