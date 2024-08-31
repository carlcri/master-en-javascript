# 70 Eventos de Teclado y Foco

Vamos a crear un nuevo elemento HTML, que va a ser un formulario, y dentro del formulario habra un input:

```html
<form action="">
    <input type="text" name="nombre" id="campo_nombre">
</form>
```

![imagen](https://i.imgur.com/Zei2vb3.png)

- El campo de entrada tiene tanto un id (campo_nombre) como un name (nombre).
- El **id** sigue sirviendo para identificar el elemento en CSS o JavaScript.
- El **name** es crucial en el contexto de formularios: cuando se envía el formulario, el valor ingresado en este campo se incluirá en los datos que se envían al servidor. El servidor recibirá este dato asociado a la clave nombre.

## Evento Focus and blur

### Ejemplo

Cada vez que se de click en el formulario, debe imprimir un mensaje:

```js
var input = document.querySelector('#campo_nombre');

//Eventos
input.addEventListener('focus', function(){
    console.log('focus: estas dentro del input');
})
```
ahora cuando se de click por fuera del formulario, debe imprimir otro mensaje:

```js
input.addEventListener('blur', function(){
    console.log('blur: estas fuera del input')
})
```

## Evento keydown, keyup, y keypress

Muy parecido a los anteriores, y ocurre cuando estas presionando una tecla:

```js
input.addEventListener('keydown', function(){
    console.log('keydown: presionando una tecla');
})
```

- *keydown*: Este evento se dispara cuando se presiona una tecla en el teclado

- *keyup*: Este evento se dispara cuando se suelta una tecla que se había presionado en el teclado.

- *keypress*: Este evento se dispara cuando se presiona una tecla que produce un carácter. Esto incluye letras, números y símbolos, pero no teclas de control como "Shift" o "Ctrl".

### Ejercicio

Modificar el codigo anterior, para que pueda saber cual es la tecla que esta pulsando. 

SOL

Para detectar y mostrar la tecla específica que se está pulsando durante el evento keydown, puedes usar la propiedad *event.key*:

```js
input.addEventListener('keydown', function(event){
    console.log('keydown: presionando una tecla', event.key);
})
```

### Ejercicio

Verificar la diferencia usando keypress

```js
input.addEventListener('keypress', function(event){
    console.log('keypress: presionando una tecla', event.key);
})
```

