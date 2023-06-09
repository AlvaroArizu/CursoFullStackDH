/*
    Que es el disenio adaptativo/responsive?

    hace referencia a un conjunto de reglas y métodos que se aplican a la estructura de un sitio web para lograr que se adapte, de la mejor manera posible, a las distintas resoluciones de salida. El objetivo es que el contenido del sitio se vea perfectamente desde el punto de vista de los usuarios. 

TEMAS
_Viewport
_Configurar el viewport con la etiqueta media
_Media queries
_Tipos de media
_Diferencia entre breakpoints y media queries
_Trabajar con medidad absolutas a medidad relativas

MODELO DE CAJA

hace referencia a la forma en que TODOS los elementos HTML se comportan frenete a la implementacion de determinadas lineas de CSS. Hay que pensar que cada elemento es una caja con(arriba, der, abajo y izq) y todo esto puede ser perfeccionado:
    .Ancho y alto
    .Relleno entre sus costados y el contenido
    .El ancho, grosor y tipos de lineas de sus bordes
    .El distanciamineto entre los demas elementos que los rodean
CADA ETIQUETA COMO UN ELEMENTO QUE PUEDE SER AFECTADO/MODIFICADO

Propiedades del modelo de caja:
    .Display: permite cambiar el comportamiento general de los elementos de linea y de bloquee
            -black: permite comvertir los elementos de linea en bloque
            -line: perimite convertir un eleto de bloque en uno de linea 
            -inline-block: permite comvertir los elementos de linea en bloque y agregarle propiedades
    
    .widht: Si un elemento de bloque no tiene declarada la propiedad width, el ancho será igual al 100% de su padre contenedor
            div{
                widht: 30px;
            }
    
    .heidht: Si un elemento no tiene declarado la propiedad height, el alto será igual a la altura que le proporcione su contenido. Sea un elemento de bloque o de línea.
            div{
                heidht: 30px;
            }
    JUNTOS
            div{
                widht:130px;
                heidht:130px;
            }
    
    .padding: Es el espacio de relleno que podemos agregar entre el contenido del elemento y su borde.
            div { padding: 12px; } un valor para todos los lados
            div { padding: 12px 20px;} el primer valor para arriba y abajo y el segundo para derecha e izquierda
            div { padding: 12px 20px 18px;} el 1er valor para arriba, 2do valor para der e izq y 3er valorm para abajo
            div { padding: 12px 20px 18px 21px;} el 1er arriba, 2do der, 3er abajo y 4to izq
            div { padding-top: margen superior}
            div { padding-rigth: costado lateral derecho}
            div { padding-left: costado lateral izquierdo}
            div { padding-botton: margen inferior}

    .border: Es el borde de la caja
            Podemos asignarle un valor a esta propiedad definiendo el estilo de línea, su espesor y su color.
            El estilo de línea puede ser [solid, dotted, dashed o double].
            El espesor de línea puede ser cualquier unidad de medida de CSS. El color puede ser cualquier color válido de CSS.

            div { border: solid 3px yellow } "SOLID para estilo de linea, 3px para el espesor y yellow para el color"

    .margin: Son los margene exterior de la caja, sirve para separar una caja de otra 
            div { margin: 20px 15px }
            div { margin: 20px 15px 30px }
            div { margin: 20px 15px 30px 25px }
            margin: auto; (queda centrado)

    .box-sizing: para calcular el ancho o el alto
            15px + 3px + 12px + 150px + 12px + 3px + 15px ancho final = 210px

            content-box: valor por defecto 
            border-box: el ancho y alto que indiquemos tomará en cuenta no solo el contenido del elemento, sino también el padding y el borde, dejando solo el margen por fuera
                    div {
                            width: 150px;
                            height: 130px;
                            padding: 12px;
                            border: solid 3px yellow; margin: 15px;
                            box-sizing: border-box;

        Es una práctica muy común asignarle box-sizing: border-box a todos los elementos del sitio con la siguiente línea de código:
               * { box-sizing: border-box }
}

VIEWPORT (Es para que en cada dispositivo se vea todo bien)

-Es la parte visible de cualquier navegador web, en la cual se puede ver el contenido de la página, sin tener que hacer scroll
-Es en donde se muestra el contenido de nuestros documentos HTML. 
-El viewport va a determinar la manera en la que el navegador visualiza el contenido de nuestro sitio web.
-SU CONFIGURACION NO VA ADENTRO DEL DOCUMENTO CSS, VA EN EL DOCUMENTO HTML ESPECIFICAMENTE EN LA ETIQUETA <HEAD>
            <meta name="viewport" content="width=device-width, initial-scale=1">

MEDIDAD ABSOLUTAS
-El px esta dentro de esta categoria, nunca cambia sin importar el contexto en el que esta


MEDIDAS RELATIVAS 
-Es aquella que, dependiendo de su contexto, podrá variar y adaptarse, sin la necesidad de que tengamos que cambiar la misma en nuestro código. 
-La medida relativa más común es el porcentaje (%)

Tipos:
        * %, se calcula depeiendo los px de la caja grande

        *Unidadees de viewport: vw y vh
                                view-width (ancho)
                                view-heitgh (alto)
            se calcula en funcion de la medida que tenga el viewport
            div {
                   width: 25vw; // 25% del ancho disponible
                   height: 50vh; // 50% del alto disponible
                }

        *Unidades em y rem 
        _em : son siempre relativos al emelemto padre. Tomara como valor de referencia la propiedad font-size
                p { font-size: 1.5em } // 16px * 1.5 = 24px
        _ems : p {
                    font-size: 20px;
                    line-height: 2em; // 20px * 2 = 40px padding: 1.5em; // 20px * 1.5 = 30px
                }
        _rems : p { font-size: 1.5rem }
            Es el mas recomendado, no modifica los elemtos 

MEDIA QUERIES
-Son otra cosa más que simples reglas de CSS que agrupan, a su vez, otras reglas que se aplicarán si se cumple una condición determinada. Esta condición generalmente tiene que ver con la resolución de pantalla del dispositivo de salida
-Nos van a permitir que la estructura de nuestros documentos HTML se conviertan en estructuras adaptativas o responsive
-Se escriben al final de la hoja CSS
    @media(condicion){
        reglas de estilo
    }
    
    Mobile First: desarrolla para dispositivos primero para mobiles y va modificanco hasta llegar a la computadora
                    celular => Tablet => Compu

                    @media (min-width: 460px){
                        body {
                                background: red;
                            }
                        }
    Mobile Last: desarrola para computaodra primero y asi progresivamnete
                    compu => tablet => celular
                    @media (max-width: 768px){
                        body {
                                background: yellow;
                            }
                        }
 */