# Eventos de formularios

## onfocus
```js
window.addEventListener('load', function(){
  const elNombre = document.querySelector("#nombre");
    
    elNombre.addEventListener('focus', function(){
       elNombre.style.backgroundColor = "pink";
  });
});

```

## onblur
```js
window.addEventListener('load', function(){
    const elUsuario = document.querySelector("#user");
    
    elUsuario.addEventListener('blur', function(){
       elUsuario.style.backgroundColor = "plum";
  });
})
```

## onchange
```js
window.addEventListener("load", function () {
  const miInput = document.querySelector("#miInput");

  miInput.addEventListener("change", function () {
    document.body.style.backgroundColor = "red";
  });
})
```

## onsubmit
```js
const miForm  = document.querySelector("#miForm");
const mensajeOculto  = document.querySelector("h1");

miForm.addEventListener("submit", function () {
    miForm.style.display = 'none';
});

mensajeOculto.addEventListener("submit", function () {
    mensajeOculto.style.display = 'block';
});
```

# Validaciones

## Prevent default
```js
window.addEventListener('load', function() {
  let formulario = document.querySelector('form');
  formulario.addEventListener('submit', function(evento) {

    evento.preventDefault();

  })
});
```
## Validando campos
```js
window.addEventListener('load', function() {
  let formulario = document.querySelector('form');
  formulario.addEventListener('submit', function(evento) {

    evento.preventDefault();

   // escribí tu código aquí
   let nombre = document.querySelector("#nombre");
   let password = document.querySelector("#password");
if(nombre.value == ""){
  console.log('Hubo un error en el nombre')
}
  })
if(password.value.length == ""){ 
}
  })
```