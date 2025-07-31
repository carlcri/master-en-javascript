# Evento Mouse Over y Mouse Out

Creamos una caja con un div, y le aplicamos algunos estilos:

```css
#box {
    background-color: rgb(30, 199, 199);
    padding: 30px;
    width: 150px;
    height: 50px;
    color: rgb(26, 4, 48);
    border: 5px solid green;
    text-align: center;
}
```

Con una seudoclase, directamente en el css, se podria implementar el hoover:

```css
#box:hover {
    background-color: beige;
    cursor: pointer;
    transition: 3000ms;
}
```

Al pasar el mouse, debe cambiar el color de backgroud, y cambiar el cursor. Pero queremos hacerlo con Jquery. Asi que crearemos otro div:


```js
    $('#box1').mouseover(function () { 
        $(this).css('background', 'yellow');
    });


    $('#box1').mouseout(function () { 
        $(this).css('background', 'red');
    });
```

## Evento Hover

Combina mouse over y mouse out en una sola. Crea un nuevo div. Si tengo instalado los snipets de Jquery, me debe crear la estructura

```js
    $('#box2').hover(function () {
            // over
            $(this).css('background', 'yellow');
            
        }, function () {
            // out
            $(this).css('background', 'red');
        }
    );
```

## Eventos click y doble click

```js
    //doble click y click
    $('#box3').click(function() { 
        $(this).text('me diste click')
    });

    $('#box3').dblclick(function() { 
        $(this).text('me diste doble click')
    });
```

Al darle click el texto cambia, y al darle doble click tambien. Como ejercicio agregale algunos estilos. 