# 69 Eventos de Raton

Empezemos desarrollando algunos ejemplos con el script *69-eventos*

### Ejercicio 1

Crear un objeto HTML de tipo boton (usa la etiqueta *button*) con un *id* que se boton. Sugererencia, mete el boton dentro de un parrafo para que se muestre un poco mejor.

```html
    <p>
        <button id="boton">Presionar</button>
    </p>
```

### Ejercicio 2

Cada vez que se presione el boton, debe aparecer una alerta:

```html
    <p>
        <button id="boton" onclick="alert('me has presionado');">Presionar</button> 
    </p>
```

### Ejercicio 3

Que cada vez que se presione el boton, se muestre en consola que el boton acaba de ser presionado. Implementalo dentro de una funcion que se llame cambiar color:

```js
function cambiar_color(){
    console.log('Boton presionado');
}
```

```html
    <p>
        <button id="boton" onclick="cambiar_color()">Presionar</button>
    </p>
```

### Ejercicio 4

Que cada vez que se presione el boton, el color del boton alterne entre verde y azul:

```js
function cambiar_color(){
    console.log('Boton presionado');
    let color = boton_presionar.style.color; 👈

    if(color == 'blue'){
        boton_presionar.style.color = 'green';
    }
    else{
        boton_presionar.style.color = 'blue';
    }
}
```

Es recomendable crear una variable, en este caso *color*, porque volver acceder nuevamente a las propiedades en este cado dentro del if, lo puede hacer lento.

### Ejercicio 5

Modificar el ejemplo anterior, para que en vez de cambiar el color, cambie el color del background:

```js
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
```

![image](https://i.imgur.com/PNtXZB4.png)

(7:13/14:38)


