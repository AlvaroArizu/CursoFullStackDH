/*
INTRO A FLEXBOX

Flexbox propone una manera de organizar los elementos presentes en nuestra estructura de HTML. Esta manera busca ser mucho más orgánica y fluida, pensada en los comportamientos naturales que posee cualquier elemento de la vida real con cuatros costados (arriba, derecha, abajo, izquierda). 

En el archivo css dentro del contenedor:
.contendeor{
    display: flex;  (Uno al lao del otro)
    flex-wrap: wrap; (para que los elementos sigan con su tamanio)
}

EJES

-Los ejes dentro de un contenedor flex definen la orientación a partir de la cual se desplazarán los elementos internos del mismo. 
-Un contenedor flex posee dos ejes: el eje principal/horizontal, llamado también main axis, y el eje transversal, llamado cross axis. 
-Algo particular dentro de este tipo de posicionamiento es que tanto el main axis y el cross axis no están definidos ni por el plano horizontal ni por el plano vertical. Si no que todo dependerá de la configuración que nosotros dispongamos al momento de escribir nuestro código. 

flex direction: row/column/row-reverse/column-reverse;
justify-content: flex-start/flex-end/center/space-between/space-around
align-itmes: stretch/flex-start/flex-end/center

ESTRUCTURA BASICA

La estructura básica de un contenedor flex no es otra cosa más que todas aquellas líneas de CSS que, sí o sí, deben estar presentes para que el diseño y estética visual buscado se pueda implementar de la mejor manera posible. 

ITEMS

CSS nos provee de un par de propiedades que nos van a permitir cambiar algunos comportamientos por defecto y hacer que un ítem determinado rompa con las características heredadas desde su contenedor padre.

*Order(cambiar el orden de ubicacion)
    caja-q{
        order: 1/-1
    }
    
*Align-self(afectara solamente al itmes al que fue asgnado)
    align-self: flex-end/flex-star/center;

    caja q, caja e{
        flow-grow: 1;
    }







*/