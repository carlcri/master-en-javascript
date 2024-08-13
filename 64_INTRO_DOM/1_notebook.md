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

Como si no existiera. ¿Poeque pasa esto cuando en realidad si existe un elemento con esas caracteristicas? 😫

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

![](https://imgur.com/xE6TpLa.png)

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

![](https://imgur.com/Bfe9EjR.png)

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

![](https://imgur.com/CUCCtoj.png)
