# Evento Blur y Focus

El focus es cuando estoy dentro de un elemento html y blur cuando salgo de ese elemento

El objetivo es crear un formulario super sencillo, y que cuando se escriba en el formulario, se muestre en una cajita, que debe estar oculta.(pista usa `None` y `block` segun se requiera)

- con el metodo `show` se muestra el elemento que estaba oculto
- con el metodo `val` se obtiene el valor que hay en el input


```js
    $('#lastname').focus(function(){ 
        $(this).css('border', '5px solid green');
    });

    $('#lastname').blur(function() { 
        $(this).css('border', '1px solid #ccc');
        $('#box').show()
        var lastname = $(this).val();
        $('#box').text(lastname);   
    });
```

Tambien se puede hacer encadenando varios metodos:

```js
    $('#box').show().text($(this).val());0
```