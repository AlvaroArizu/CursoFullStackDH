# CLASE 44 - EJERCICIOS

# Validacion 
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>JS Front</title>
    
  </head>
  <body>
    <p>Podés abrir la consola del navegador para chequear los resultados</p>

//Validacion
    <script src="script.js"></script>

  </body>

</html>
```

# DOM Selectores

## Manipulando elementos con JavaScript
```js
window.addEventListener('load', function() {

  // escribí tu código aquí
let tituloPelicula = document.querySelector('h2');
});
```

## Manipulando elementos con JavaScript II
```js
window.addEventListener('load', function() {

  // escribí tu código aquí
let parrafos = document.querySelectorAll('p');
});
```
## Manipulando elementos por id
```js
window.addEventListener('load', function() {

  // escribí tu código aquí
let pulpFiction =document.getElementById('pulp-fiction');
});
```

## Manipulando elementos por nombre de clase
```js
window.addEventListener('load', function() {

  // escribí tu código aquí
let barraDeNavegacion=document.getElementByClassName('nav-bar');
});
```
# Modificando el DOM

## Sumando texto a un elemento con contenido
```js
window.addEventListener('load', function() {

  // escribí tu código aquí
document.querySelector('h3').innerText += ' usando código';
});
```

## Agregando etiquetas
```js
window.addEventListener('load', function() {

  // escribí tu código aquí
document.querySelector('body').innerHTML += 'Papitas';
});
```

# Modificando estilos

## Modificando estilos
```js
window.addEventListener('load', function() {

  // escribí tu código aquí
document.querySelector('body').style.backgroundColor ='lightskyblue'
document.querySelector('h2').style.textAlign = 'center'
document.querySelector('h4').style.fontStyle = 'italic'
});
```

## Modificando estilos a varios elementos a la vez!
```js
window.addEventListener('load', function() {

// escribí tu código aquí 
    let libros = document.querySelectorAll('li');
for(let libro of libros) {
  // escribí tu código aquí 
     libro.style.color = 'orange'
}

});
```

# Modificando clases

## Agregando clases a un elemento
```js
window.addEventListener('load', function() {

  // escribí tu código aquí
 let div = document.querySelector('div');
div.classList.add('container');
});
```

## Sacando clases a un elemento
```js
window.addEventListener('load', function() {

  // escribí tu código aquí
let h1 = document.querySelector('h1');
h1.classList.remove('titulo');
});
```

## Alternando clases
```js
window.addEventListener('load', function() {

  // escribí tu código aquí
let h1 = document.querySelector('h1'); 
h1.classList.toggle('titulo-tuneado');
});
```
# Hacia la clase en vivo

## Desafío: ¡ups cometimos un error!
```js 
window.addEventListener('load', function(){

    // Ingresa aqui tu codigo
let horrorOrtografico = document.querySelector('.title')
horrorOrtografico.innerHTML = 'Bienvenidos a mi <em>sitio web</em>'
})
```

## Desafío: Capturando elementos del documento
```js
window.addEventListener('load', function(){

// ingresa aquí tu código
let theSubtitle = document.querySelector('.subtitle')
let paragraphs = document.querySelectorAll('p')
let navAnchors = document.querySelectorAll('#main-navbar a')
let mainImage = document.querySelector('#main-image')
})
```

## Desafío: ¡Cuidado con la clase!
```js
// ingresa aquí tu código
const listItems = document.querySelectorAll('#cont01 li');
 
for (let i = 0; i < listItems.length; i++) {
  if (listItems[i].classList.contains('alert-danger')) {
     listItems[i].classList.remove('alert-danger');
     listItems[i].classList.add('alert-success');
  }
}
```























