# CLASE 48 - Nos preparamos para el sprint

# Evaluamos nuestros formularios - Guardemos errores
Para validar por el lado del front-end necesitamos capturar ciertos elementos. Necesitamos que nos ayudes a realizar esta tarea.

Tené en cuenta que el nombre de las variables donde almacenes los elementos capturados, deberá coincidir con el id del elemento.

```JS
Ejemplo: 
    let form = document.querySelector('#form')
```

## Validacion
```JS
//CAPTURANDO ELEMENTOS - PARTE 1
window.addEventListener('load', function(){
    let form = document.querySelector('#form')
    let button = document.querySelector('#button')
    let name = document.querySelector('#name')
    let nameError = document.querySelector('#nameError')
    let email = document.querySelector('#email')
    let emailError  = document.querySelector('#emailError')
    let password = document.querySelector('#password')
    let passwordError = document.querySelector('#passwordError')
    let repassword = document.querySelector('#repassword')
    let repasswordError = document.querySelector('#repasswordError')
})
//VALIDACION - PARTE 2
button.addEventListener('click', function (event) {
        event.preventDefault()
        let errores = {}
        if (name.value.length < 1) {
            errores.name = 'Este campo debe estar completo'
        }
        if (email.value.length < 1) {
            errores.email = 'Este campo debe estar completo'
        }
        if (password.value.length < 1) {
            errores.password = 'Este campo debe estar completo'
        }
        if (repassword.value.length < 1) {
            errores.repassword = 'Este campo debe estar completo'
        }
        if (Object.keys(errores).length >= 1) {
            erName.innerText = (errores.name) ? errores.name : ''
        } else {
            form.submit();
        }
    })
})

```

## Formulario a validar desde el front-end
```HTML
 <form action="/form" method="POST" id="form">
        <label for="">Nombre</label>
        <input type="text" name="name" id="name">
        <div class="text-danger" id="nameError"></div>

        <label for="">Email</label>
        <input type="email" name="email" id="email">
        <div class="text-danger" id="emailError"></div>
            
        <label for="">Password</label>
        <input type="password" name="password" id="password">
        <div class="text-danger" id="passwordError"></div>

        <label for="">Repassword</label>
        <input type="password" name="repassword" id="repassword">
        <div class="text-danger" id="repasswordError"></div>

        <button type="submit" id="button">Enviar</button>
    </form>
```
