# CLASE 47 - EJERCICIOS
# Vamos a usar FETCH por GET
```js
fetch('https://api.chucknorris.io/jokes/random')
.then(function(response){
   return response.json();
})
.then(function(data){
   console.log(data)
})
```

# Local storage
```js
window.addEventListener('load', function(){
    //TU CODIGO AQUI
    let id =localStorage.getItem('id')
    let idValue = document.querySelector('#idValue')
    idValue.innerHTML = id
})
```

# Session storage

```js
window.addEventListener('load', function(){

//TU CODIGO AQUI
//
localStorage.setItem('bgColor', 'red')
localStorage.removeItem('font');
})
```
# Clase vivo
```js
const list = document.querySelector("ul");

fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(() => function(){
    let characters = data.results
    for(i=0; i <= characters.length; i++){
      list.innerHTML += "<li>" + characters[i].name + " / " +  characters[i].birth_year + "</li>";
    }
  })
```

```js
window.addEventListener('load', function(){

const h2 = document.querySelector("h2");
 
if(localStorage.getItem("user")) {
  h2.innerText = "Hola " + localStorage.getItem("user");
} else {
  h2.innerText = "Hola visitante";
}
})
```
```js
window.addEventListener('load', function(){
const button = document.querySelector("button");
const h2 = document.querySelector("h2");
 
button.addEventListener("click", function () {
  if(!localStorage.getItem("user")) {
     localStorage.setItem("user", JSON.stringify(userInfo))
  }
})
});
```
