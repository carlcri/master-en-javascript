# 64 Introduccion al DOM en JS

DOM stands for Document Object Model. JS interactua con el codigo HTML. 

El DOM, o Document Object Model, es una interfaz de programación que proporciona una representación estructurada del documento HTML o XML, permitiendo que los lenguajes de programación (como JavaScript) puedan interactuar con él. El DOM convierte la página web en un conjunto de objetos que pueden ser manipulados, lo que permite a los desarrolladores crear, modificar, y eliminar elementos dinámicamente.

Partiendo del siguiente codigo HTML, donde hay un *div*, con un identificador(id) llamado *mi-caja*. Nota que la etiqueta *script* esta antes del *div*.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script type="text/javascript" src="./JS/64-intro.js"></script> 👈
</head>
<body>
    <h1>Curso JavaScript victorroblesweb.es</h1>
    <p>primer script con JS</p>
    <div id="mi-caja"> HOLA MUNDO</div> 👈
</body>
</html>
```

¿Como puedo seleccionar el elemento *mi-caja* para manipularlo?

Para ello contamos con un objeto que se llama *document*, y buscar los elementos. 

```js
'use strict'

var caja = document.getElementById("mi-caja");
console.log(caja);
```
Y mostrarlo en consola. Pero vaya sorpresa que no muestra nada, nos muestra null en consola

    null

Como si no existiera. ¿Porque pasa esto cuando en realidad si existe un elemento con esas caracteristicas? 😫

Porque estoy cargando el script antes de que el html este completamente listo. Por tanto no lo va encontrar. Por esta razon colocamos las etiquetas *script* al final del *body*. 

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>Curso JavaScript victorroblesweb.es</h1>
    <p>primer script con JS</p>
    <div id="mi-caja"> HOLA MUNDO</div>
    
    <!--scripts-->
    <script type="text/javascript" src="./JS/64-intro.js"></script>
</body>
</html>
```

Y ahora mira lo que muestra en consola:

![output](https://i.imgur.com/xE6TpLa.png)

## InnerHTML 

La propiedad **innerHTML** en JavaScript se utiliza para obtener o establecer el contenido HTML de un elemento en el DOM (Document Object Model).

```js
'use strict'

var caja = document.getElementById("mi-caja").innerHTML;
console.log(caja);
```
Para este caso mostraria en consola: 

    HOLA MUNDO

### Ejercicio

Dado la siguiente etiqueta *div*, determinar cual seria la salida al aplicar la propiedad *InnerHTML*

```html
    <div id="mi-caja"> 
        <p>Mi primer parrafo</p>
        <a href="#"> Mi primer enlace</a>
    </div>
```

SOL

Mostrara en consola, usando el codigo JS anterior:

![output](https://i.imgur.com/Bfe9EjR.png)

Obtener contenido: Cuando utilizas element.innerHTML, obtienes una cadena de texto que representa el HTML dentro del elemento seleccionado.

### Ejercicio

Remplazar HOLA MUNDO por otro texto.

```js
'use strict'

var caja = document.getElementById("mi-caja");
console.log(caja.innerHTML);
caja.innerHTML = "Texto Manipulado con JS" 👈
console.log(caja.innerHTML);
```

### Ejercicio

Añadir estilos como color de fuente, al texto modificado

```js
'use strict'

var caja = document.getElementById("mi-caja");
console.log(caja.innerHTML);
caja.innerHTML = "Texto Manipulado con JS"
caja.style.color = "green"; 👈
console.log(caja.innerHTML);
```

![output](https://i.imgur.com/CUCCtoj.png)


### Ejercicio

Script: *64-intro-v1.js*

Crear una funcion que me permita cambiar el color. 

```js
function cambiaColor(color){
    caja.style.color = color;
}

var caja = document.getElementById("mi-caja");
console.log(caja.innerHTML);
caja.innerHTML = "Texto Manipulado con JS"
console.log(caja.innerHTML);
```
Creamos la funcion *cambiaColor*, y para invocarla, se hace directamente en la consola:

![](https://i.imgur.com/mkTJtr6.png)

### Ejercicio

Crear una funcion que permita modificar el color, el padding, y el color background del elemento *mi-caja* 

```js
function formatoCaja(color, padding, background){
    caja.style.color = color;
    caja.style.padding = padding;
    caja.style.background = background;
}
```
y desde la consola, ingresamos los parametros de la funcion:

![](https://i.imgur.com/VgnvunG.png)

Tambien podemos modificar la funcion, para que los parametros de *padding* y *background* sean opcionales:

```js
function formatoCaja(color, padding='0px', background='automatic'){ 👈
    caja.style.color = color;
    caja.style.padding = padding;
    caja.style.background = background;
}
```

### Query Selector

Forma alterna para seleccionar un elemento mucho mas elegante y simple que *getElementById* para seleccionar un elemento:

Dado que caja es un *id*, uso #; si fuera una clase, usaria un punto.



El método *document.querySelector* en JavaScript se utiliza para seleccionar el primer elemento en el documento HTML que coincida con un selector CSS especificado. Este método es muy poderoso porque te permite seleccionar elementos de manera flexible, usando cualquier tipo de selector CSS (clases, IDs, etiquetas, atributos, combinaciones de selectores, etc.).

```js
console.log('Usando querySelector')
var caja_1 = document.querySelector("#mi-caja");
console.log(caja.innerHTML);
```