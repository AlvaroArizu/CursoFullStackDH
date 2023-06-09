# Clase 45 - Ejercicios

## Que son los eventos?

### Método load
```js
window.addEventListener('load', function() {});
```

### Evento click
```js
window.addEventListener('load', function() {

  let linkContacto = document.querySelector('.contacto');

linkContacto.addEventListener('click', function(event){
   console.log('hiciste click');
});  
  // escribí tu código aquí

});
```

### Prevent default
```js
window.addEventListener('load', function() {

let formulario = document.querySelector('form');

formulario.addEventListener('click', function(evento){
   console.log('hiciste click');
   evento.preventDefault();
});
  // escribí tu código aquí

});
```



## Eventos de mouse

### Mouseover
```js
window.addEventListener('load', function() {

let titulo = document.querySelector('h1');
texto.onmouseover = function(){  
}
titulo.classList.add("titulo")

titulo.addEventListener( function(){});

});
```

### Mouseout
```js
window.addEventListener('load', function() {

  // escribí tu solución aquí
let links = document.querySelectorAll("a");
texto.onmouseout = function(){
}
this.classList.toggle('cita');
  for(let link of links) {
    link.addEventListener('mouseout', function(){
   console.log('quitaste el mouse');
});
  }
});
```

## Eventos de teclado

### onkeydown (ERROR EN EL PG)
```js
window.addEventListener('load', function() {

  // escribí tu codigo acá
 let userName = document.querySelector('#userName')

    userName.addEventListener('keydown', function(event){
         alert('Está prohibido el uso de #hashtags!' + event.key);
    })
});
```

### onkeyup
```js
window.addEventListener('load', function() {

    //???
    let input = document.querySelector("#input");
    console.log(input)

    input.addEventListener("keyup", (event) => {
        console.log(event.key)
       alert('Se presionó la tecla: ' + event.key)
    })

});
```

### onkeypress
```js
window.addEventListener('load', function(){

    //escribí tu código acá
let direccion = document.querySelector('#address');


    direccion.addEventListener('keypress', function(event){
         alert("Se presionó la tecla: "+ event.key);
    })

})
```

## Hacia la clase en vivo

### No nos gusta la letra "x"
```js
window.addEventListener("keypress", function(e) {
  let key = e.key;
  const body = document.querySelector("body");
 
  if (key == 'x' ) {
     document.body.style.backgroundColor = "orange";
  }
 
  if (key !== "x") {
     body.style.backgroundColor = "white";
  }
})
```

### ¡Evitemos que esto se desenlace!
```js
window.addEventListener('load', function () {
  const specialAnchor = document.querySelector("a");

  specialAnchor.addEventListener('click', (event) => {
    event.preventDefault();
    this.style.color = "red";
    this.innerText = "este enlace no te llevará a ningún lado";
  })
});

```

