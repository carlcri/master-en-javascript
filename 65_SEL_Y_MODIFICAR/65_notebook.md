# 65 Seleccionar y Modificar Elementos de la Pagina

Creamos varios *divs* dentro del documento HTML:

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
    <div id="mi-caja">Hola soy una caja</div> 👈
    <div>Soy el primer div</div>
    <div>Soy el segundo div</div>
    <div>Soy el tercer div</div>
   
    <!--scripts-->
    <script type="text/javascript" src="./JS/65-seleccionar.js"></script>
</body>
</html>
```
## Encontrar Elementos con ID especifico

## Encontrar Elementos por su etiqueta

Por el tag o etiqueta ``div``:

```js
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs)
```
Y nos muestra un *array* de elementos HTML:

![](https://i.imgur.com/4wtn3rg.png)

Suponga que ahora queremos imprimir en consola el texto del segundo elemento del array:

```js
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs)
console.log(todosLosDivs[2].textContent) 👈
```

### Ejercicio

Recorrer todo el *array* y mostrar el contenido de texto de cada uno:

```js
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs)

for(let i=0; i<=3; i++){
    console.log(todosLosDivs[i].textContent); 
}
```

OUTPUT: 


```sh
    Hola soy una caja
    65-seleccionar.js:15 Soy el primer div
    65-seleccionar.js:15 Soy el segundo div
    65-seleccionar.js:15 Soy el tercer div
```

## Encontrar Elementos por su clase

### Ejercicio

Crear un nuevo elemento HTML y agregarlo a una nueva etiqueta llamada *seccion*, con un *id* igual a *mysection*. Debes encontrarla nueva etiqueta usando *querySelector*:

#### Solucion:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>Curso JavaScript victorroblesweb.es</h1>

    <h2>Mi Seccion</h2>
    <section id="mysection"> 👈
        Primera Seccion
    </section>
    <hr> 👈
    <div id="mi-caja">Hola soy una caja</div>
    <div>Soy el primer div</div>
    <div>Soy el segundo div</div>
    <div>Soy el tercer div</div>
   
    <!--scripts-->
    <script type="text/javascript" src="./JS/65-seleccionar.js"></script>
</body>
</html>
```

- la etiqueta *hr* sirve para hacer una linea horizontal, la usaremos para separar el contenido de seccion de lo demas

Crearemos una funcion que va a agregar un nuevo parrafo hacieno uso de la propiedad *createElement*, y de *appendChild* para agregar el nuevo parrafo:

```js
function agregarParrafo(){
    var nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = 'orange';
    nuevoElemento.style.color = 'orange';
    document.querySelector('#mysection').appendChild(nuevoElemento);    
}
```
 Para invocar la funcion, tipiamos en la consola:

    agregarParrafo()

![](https://i.imgur.com/s7zGLMN.png)


### Ejercicio

Encontrar todos los elementos cuya etiqueta es *div*, y agregar su contenido a la etiqueta *mysection*. Implementarlo con una funcion:

#### Solucion

Lo voy a desarrollar un poco diferente al instructor que lo hizo muy enredado.

1. Determinar la longitud del arreglo con *lenght*
2. Sera muy parecida a la funcion anterior donde selo se agrega un parrafo, mientras que aqui se agregan cuatro

```js
function agregarParrafos(){
    for(let i=0; i<todosLosDivs.length; i++){ 👈
        let content = todosLosDivs[i].textContent;
        let nuevoElemento = document.createElement('p');
        nuevoElemento.textContent = content;
        nuevoElemento.style.color = 'green';

        document.querySelector('#mysection').appendChild(nuevoElemento);
    }
}
```
Al aplicar la funcion: 

![image](https://i.imgur.com/bsxyKKX.png)

(5:39/15:34)

### Ejercicio

Modificar el documento HTML para que la linea horizontal *hr* este dentro de la seccion:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>Curso JavaScript victorroblesweb.es</h1>

    <h2>Mi Seccion</h2>
    <section id="mysection">
        <hr>👈
    </section>

    <div id="mi-caja">Hola soy una caja</div>
    <div>Soy el primer div</div>
    <div>Soy el segundo div</div>
    <div>Soy el tercer div</div>
   
    <!--scripts-->
    <script type="text/javascript" src="./JS/65-seleccionar.js"></script>
</body>
</html>
```

En los ejercicios anteriores, habiamso colocado el *hr* o rayita horizontal, por fuera de la seccion, porque con el metodo *appendChild*, agregaba los elementos de forma ascendente, por decirlo de alguna manera, pero hay situaciones como estas, donde queremos que lo haga descendentemente. Entonces podemos usar el metodo *prepend*:

```js
function agregarParrafos(){
    for(let i=0; i<todosLosDivs.length; i++){
        let content = todosLosDivs[i].textContent;
        let nuevoElemento = document.createElement('p');
        nuevoElemento.textContent = content;
        nuevoElemento.style.color = 'green';

        document.querySelector('#mysection').prepend(nuevoElemento); 👈
    }
}
```

![image](https://i.imgur.com/EgdoQv2.png)


Fijare va invertido a como se mostro en la imagen anterior.


(7:17)
(9:47)