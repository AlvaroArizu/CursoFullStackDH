/* 
POSICIONAMIENTO

El posicionamiento nos permite trasladar un elemento desde su posición original a una nueva posición.
También nos permite superponer elementos.
Cada uno de los elementos de nuestra página web tiene cuatro puntos de referencia y esos son sus costados: superior, derecho, inferior e izquierdo. En CSS serán top, right, bottom y left.


3 Tipos: 
        1)Relativo: permite trasladar un elemento desde su posición original a una nueva posición
                .caja-1 {
                            position: relative;
                            left: 100px;
                            top: 50px;
                }
        Solemos utilizar posicionamiento relativo cuando queremos desplazar un elemento sin modificar el flujo original de los demás que están a su lado.

        2)Absoluto: permite trasladar un elemento tomando como referencia los costados del body.
        Con el posicionamiento absoluto, los puntos de referencia serán los costados el body. Cuando movemos una caja de   manera absoluta, el espacio que ocupaba quedará vacío y otros elementos podrán ocuparlo.
                .caja-2 {
                            position: absolute;
                            right: 100px;
                            bottom: 50px;
                }

        3)Fijo: permite trasladar un elemento tomando como referencia la ventana del navegador.
        Con el posicionamiento fijo, los puntos de referencia serán los costados la ventana del navegador. Sin importar que hagamos scroll en la página, el elemento siempre se mantendrá fijo con respecto a la ventana del navegador.
                .botonFucsia {
                                position: fixed;
                                right: 50px;
                                bottom: 50px;
                }
        Cuando queremos que un elemento siga al usuario a medida que navega nuestro sitio. Por ejemplo, un botón fijo para siempre tener disponible la opción de crear un nuevo producto.

Posicionamineto relativo + absoluto: Si nuestras cajas (hijas) están dentro de otra caja (padre), el punto de referencia seguirá siendo el body a menos que hagamos relativa la posición de su padre.

div { position: relative }

.caja-2 {
    position: absolute;
    right: 100px;
    top: 50px;
}
Cuando queremos sacar un elemento del flujo normal y posicionarlo en un punto fijo con respecto a su contenedor o el body.


Z-INDEX

* Es lo que se mueve en el eje Z
* + Valos = + arriba se representara el elemento
* Solo funciona ene los elementos posicionados

HTML:   <div class="caja-1">1</div>
        <div class="caja-2">2</div>
        <div class="caja-3">3</div>

CSS: Solo se pueden modificar elementos con position: relative, absolute y fixed; todos tendran un valor de index 0
        .caja-1 {
                position: relative;
                z-index: 10;
        }


TRANSICIONES con CSS

Son efectos cuando se pasa el cursor del mouse por arriba del elemento
Cuando se generan trnasivones se generan cambios progresivos, es como un cambio mas sutil

:hover  pseudo clase

.mi-elemento{
    width: 100px;
    height: 100px;
    background-color: salon;
    transition: border-radius 450ms; (2 partes: propiedad de css a trnasicionat y la duracion) y si quiero todo: all
}

.mi-elemento:hover {
    border-radius: 50%;
    background-color: red;
    position: relative;
    left: 30px;
}

ANIMACIONES

El concepto clave de una animación generada con CSS son los keyframes o fotogramas. Estos son los contenidos que se muestran en un elemento en un segundo, algo similar a lo que pasa con un video, donde este no es otra cosa que una secuencia de fotografías pasadas de manera muy rápida, dando la sensación de movimiento.


2 etapas:
    1) Creacion de la animacion:
        se genera usando la palabra reservada 
            @keyframes(nombre){
                0%{estado inicial de la animacion
                    
                }
                100%{estado final de la animacion
                    
                }
            }

            @keyframes fantasma {
                0% { opacity: 0% }
                25% { transform: translateY(-20px); opacity: 100% } 
                100% { opacity: 0% }
            
        La forma abreviada
            .fantasma {
                        animation: fantasma 3s infinite;
                    }

Asignando una animación

Por último, volvamos al selector del elemento. Algunas de las propiedades para configurar una animación son las siguientes:

* animation-name: creciendo
Para definir cuál es la animación que queremos utilizar.

* animation-duration: 100ms
Para establecer el tiempo que debe durar la animación. El valor puede ser en segundos (s) o milisegundos (ms).

* animation-iteration-count: infinite
Para definir la cantidad de veces que se repetirá la animación. Puede ser un número o la palabra infinite para que se reproduzca infinitamente.

* animation-direction: alternate/normal
Definimos como se vera la animacion mientras se esta reproduciendo

.mi-elemento {
    width: 200px;
    height: 200px;
    position: relative;
    border-radius: 100%;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-name: achicando;
    animation-duration: 1000ms;
}

@keyframes achicando {
    0% {
        background-color: salmon;
    }
    
    100% {
        background-color: peachpuff;
        height: 100px;
        width: 100px;
        opacity: 0.5;
    }
}


 ! ooo\
 ? jiii
 todo: iii
 * jjuu

*/