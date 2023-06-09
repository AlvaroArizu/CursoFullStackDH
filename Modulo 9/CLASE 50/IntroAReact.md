# CLASE 50 - Creando una app con Reach

* Intro a Reach
* Instalacion y puesta en marcha
* Ecosistema de Reach
* Intro a componentes
* JSX

# Intro a Reach
 React es una librería que está completamente escrita en JavaScript que nos pide, para adentrarnos en su uso, tener algo de experiencia dentro del contexto de servidores, peticiones asincrónicas, el sistema de módulos de Node.js y más

# Instalacion y puesta en marcha
Como instalar React puede ser un poco distinto a los procedimientos que solemos realizar cuando comenzamos un proyecto, queremos asegurarnos de ayudarte a comprender e incorporar esta serie de pasos que tenemos que seguir para comenzar un proyecto en React

* npm create-react-app (mi-app-de)-react
* npm init react-app (mi-app-de)-react

* entrar a la carpeta que me creao
  En public->index.html = <div id="root"></div>

![](1.png)
# Ecosistema de Reach

Llamamos ecosistema al conjunto de herramientas adicionales, aplicaciones y librerías que permite a React trabajar como un framework.

## Webpack
### Un empaquetador de archivos
Webpack permite escribir código modular y empaquetarlo para optimizar el tiempo de carga. Se puede considerar como un task runner muy especializado en el procesamiento de unos archivos de entrada para convertirlos en otros archivos de salida, para lo cual utiliza unos componentes que se denominan loaders

![](2.png)

## Babe
### Un traductor de archivos
Babel es un compilador. Permite escribir JavaScript moderno (ES6) y que aún así funcione en navegadores más antiguos

![](3.png)

# Intro a componentes
Los componentes son piezas funcionales y fundamentales de la aplicación, ya que nos van a permitir separar las distintas partes que conforman la estructura de un sitio web en pequeñas piezas independientes y reutilizables. Estas están pensadas para que trabajen de forma aislada, pero que hagan parte de un "todo".

Técnicamente, los componentes son funciones nativas de JavaScript que se ejecutan cada vez que sea necesario. Como cualquier función, pueden estar atadas, o no, a una serie de argumentos que nos permiten generar que este bloque de código pueda ser reutilizable, estableciendo que genere partes de la interfaz de usuario con información realmente dinámica.

## Componente stateless
Se llaman componentes stateless porque internamente implementan un return con lógica sencilla que entrega una estructura HTML


```js
function Navbar() {
return (
<nav>
 <a href=“/home”>Home</a>
 <a href=“/productos”>Productos</a>
</nav>
);
})
export default Navbar;
```

## Creación
Para iniciar la creación de un componente, primero debemos importar React y asegurarnos de que estamos exportando el componente que vamos a querer implementar.

```js
// en index.js
import React, {Component} from "react";
```

```js
// en Navbar.js
export default Navbar
```

## Implementación
Debemos crear un archivo con extensión .js con el nombre de la función que llevará dentro. En este caso: /src/components/Navbar.js

```js
import Navbar from "./components/Navbar.js";
```
```js
function App() {
  return (
<div className=“App”>
    <Navbar />
  </div>
 );}
```

# JSX 
Es una extensión de JavaScript que sirve para generar bloques de código HTML, pero con sentencias de JavaScript.

En sí, JSX es muy parecido al HTML, pero con ciertas particularidades que lo hacen diferente. Este puede ser utilizado única y exclusivamente dentro del entorno de React.

Pero si se parece tanto a HTML, ¿por qué no usamos solo HTML?

React propone este formato ya que es consciente de que, al momento de generar la estructura interna de un componente, es muy seguro que mucho de ese código lo vamos a querer dinámico y reutilizable. Es aquí donde JSX cobra una vital importancia.

Para dar un ejemplo, un bloque sencillo de código en JSX se verá así:

```JS
<div>
    <h1>¡Hola {user}!</h1>
    <img src="{user.avatar}">;
    <h2>Qué bueno verte de vuelta.</h2>
</div>
```
Como vemos, JSX no es tan distante de HTML, incluso se parece un poco a EJS.

## Interpolando datos
Declaramos una variable llamada name y luego la usamos dentro del JSX encerrándola dentro de llaves. Se puede colocar cualquier expresión de JavaScript dentro de llaves en JSX

```js
function Name (){
   const name = "Jhon Doe"
   return( <h1 className="title">{name}</h1> )
}
```

* En JSX, class se vuelve className 
y tabindex se vuelve tabIndex.
