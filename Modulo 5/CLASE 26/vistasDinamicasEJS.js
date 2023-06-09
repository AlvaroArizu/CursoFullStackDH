/*
!Qué es un motor de plantillas y para qué sirve.
!Por qué elegimos trabajar con EJS.
!Cómo instalar EJS dentro de nuestro proyecto de Express.
!Cómo crear vistas y hacer que las mismas se muestren en el navegador.
!Cómo sacarle el jugo a las herramientas que nos otorga EJS.
!Cómo pasar datos desde el controlador hacia la vista.
!Cómo particionar esas porciones de código HTML que suelen repetirse a lo largo de todo el sitio.

!Introducción a Template Engine/ Motor de plantillas

*Una plantilla es un archivo que posee una estructura HTML predefinida, el cual nos ayuda a generar varios archivos más a partir de este mismo. 

*Un motor de plantillas es aquel que nos permite generar una plantilla en sí, para que nuestra aplicación pueda usarla. 
*Nos permite generar archivos dinámicos que contengan información proveniente de los controladores. 

Para que usamos EJS: Hace dinamicos los archivos HTML y es el encargado de manejar la vista 


!Instalación e implementación

1. Instalar EJS.
2. Configurar la carpeta que contendrá las vistas .ejs (opcional).
3. Crear las vistas que necesitemos con la extensión .ejs.
4. Renderizar las vistas.

? En app.js: app.set('view engine', 'ejs');
? En la carpeta views, todos archivos con extesion .ejs

CONFIGURAR LA CARPETA: app.set('views', './carpeta-de-vistas')

!Primera vista
El metodo render se encarga de recibir como parameto un string, que solo es el nombre de la vista a utilizar

const controller ={
    mostrarProductos : (req, res) => {
        res.render('productos.ejs')
    }
}

! Tags en EJS
? Etiquetas:
        *<% %> Permite implementar cualquier control de flujo, ej: 
            !<% if(4 < 5) { %>
            !    <h2>El 4 es menor que el 5</h2>
            !<% } %>
        La usamos para embeber código de JavaScript, 
como condicionales, estructuras de control de 
flujo, etc.

        *<%=%> Permite imprimir en el archivo HTML, ej:
            !<% if(nombre) { %>
            !    <h2>¡Hola <%= nombre %></h2>
            !<% } %>
        La usamos para embeber código e imprimir el 
resultado de una expresión o un valor.
*Todo lo que este adentro de = sera impreso de manera literal dentro del contenido HTML

! Parámetros compartidos
Básicamente, desde el controlador, vamos a poder compartir con la vista cualquier tipo de dato existente en JavaScript. Objetos, arrays y hasta funciones. Sí, leíste bien, hasta funciones vamos a poder compartir desde el controlador hacia la vista. 

!Archivos parciales
La respuesta sin lugar a dudas es SÍ. EJS nos provee una manera de modularizar nuestra estructura HTML y generar bloques de código que se repiten, los cuales pueden ser fácilmente incrustados en el resto de las vistas. 

<%- include('ruta del archivo')%> ej: './partials/headd'


* j
! j
? j


app.set('view engine', 'ejs')
app.use(express.static('public))
app.get('/', (req, res) => {
    res.rander('index)
})
TODO l
*/