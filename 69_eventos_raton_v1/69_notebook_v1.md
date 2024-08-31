# 69 Eventos de Raton Segunda parte

Vamos a tratar de implementar bueanas practicas, porque estamos mexclando JS yn HTML en un mismo archivo, como fue el caso:

```html
<button id="boton" onclick="cambiar_color()">Presionar</button>
```


## Usando el Event Listener

El *EventListener* en JavaScript es una forma de vincular una función a un evento específico que ocurre en un elemento del DOM

Para nuestro caso el elemento del DOM va a ser el *boton_presionar*, cuando se haga *click* sobre este, y la funcion que se va a ejecutar sera *cambiar_color*:

```js
'use strict'
function cambiar_color(){
    console.log('Boton presionado');
    let color = boton_presionar.style.background;
    if(color == 'navy'){
        boton_presionar.style.background = 'ivory';
    }
    else{
        boton_presionar.style.background = 'navy'
    }
}

var boton_presionar = document.querySelector('#boton');
console.log(boton_presionar.textContent);

boton_presionar.addEventListener('click', function(){ 👈
    cambiar_color();
})
```
Observa que addEventListener recibe como parametro una funcion de callback. Al presionar el boton debe altenar entre un color y el otro. 

#### Ejercicio

Se necesita que se añada una nueva funcionalidad, donde si y solo si se hace doble-click sobre el boton, este tendra un margen mas acentuado, y ojala un padding.

SOL:

En lugar de usar click usamso dblclick. 

```js
function add_margin(){
    boton_presionar.style.padding = '5px';
    boton_presionar.style.border = "1px solid red"
    console.log('margen y padding modificados')
}

boton_presionar.addEventListener('dblclick', function(){
    add_margin();
})
```
### Mouse Over and Mouse Out

Los eventos *mouseover* y *mouseout* en JavaScript se utilizan para detectar cuándo el puntero del mouse entra o sale de un elemento del DOM, respectivamente. Estos eventos se pueden manejar utilizando el método addEventListener.

#### mouseover

El evento *mouseover* se activa cuando el puntero del mouse entra en el área de un elemento.
Uso común: Se utiliza para realizar acciones como cambiar el color de un botón, mostrar una descripción emergente, etc., cuando el usuario pasa el mouse sobre un elemento.

#### mouseout

El evento *mouseout* se activa cuando el puntero del mouse sale del área de un elemento.
Uso común: Se utiliza para revertir cambios realizados por mouseover o para ocultar elementos que se mostraron al pasar el mouse.

Si solo usamos el *mouseover* sin el  *mouseout* pues el boton se quedara en rojo:

```js
boton_presionar.addEventListener('mouseover', function(){
    boton_presionar.style.background = "red";
})
```
Implementemos ahora el *mouseout* para que cambie el background:

```js
boton_presionar.addEventListener('mouseout', function() {
    boton_presionar.style.background = "white"; 
});
```
