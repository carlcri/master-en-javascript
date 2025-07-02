# Selectores de Etiqueta

Modifique el codigo html, para colocar el texto dentro de parrafos, y de esta forma que no se vea tan apeñuscado:

```html
    <div id="yellow" class="with_border">
        <p>I have a border</p>
    </div>
    <div id="red" class="without_border">
        <p>I dont have a border</p>
    </div>
    <div class="without_border">
        <p>I dont have a border</p>
    </div>
    <div id="red" class="with_border">
        <p>I have a border</p>
    </div>
```

Ahora el ejercicio consiste en que cada vez que se de click, se le agrande la letra, y si se da click nuevamente, vuelva al tamaño normal.

🚨Recuerda que Dentro de una función de evento de jQuery, la palabra clave `this` se refiere al elemento HTML específico que disparó el evento (es decir, el elemento en el que el usuario hizo clic).

SOL

```js
    var parrafo = $('p');
    console.log(parrafo);

    parrafo.click(function() { 
        if($(this).hasClass('grande')){
            $(this).removeClass('grande');
        }
        else{
            $(this).addClass('grande');
        }
     });
```

### ejercicio

Agrega un nuevo estilo css para que cuando se pase por encima del parrafo, el cursos se vuelva una manito.

```js
var parrafo = $('p').css('cursor', 'pointer');
```

# Selectores de atributo

Añade una *unordered list* a tu codigo:

```html
    <ul>
        <li><a href="https://www.bbc.com/" title="bbc">ir a bbc</a></li>
        <li><a href="https://espanol.yahoo.com/" title="yahoo">ir a yahoo</a></li>
    </ul>
```

Usar un selector de atributo para aquellos iguales a *bbc*, se les cambie el color de fondo.

```js
    var titulo = $('[title=bbc]').css('background', 'blue');
```






