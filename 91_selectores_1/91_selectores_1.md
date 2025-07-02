# Selectores de Clase

Dado un nuevo html, crear dos clases: una con borde, y otra sin borde, cuando se le de 'click' a la de sin borde, añadirle un borde.

SOL

Debe añadirse en un archivo de estilos preferiblemente, un estilo por defecto a la clase `with_border`:

```css
.with_border{
    border: 5px dashed rebeccapurple;
    padding: 5px;
}
```

![](https://imgur.com/A2ODXiK.png)

Y para que cuando se de click se agregue el borde:

```js
    $('.without_border').click(function() { 
        console.log('click dado');
        $(this).addClass('with_border');  
    });
```

Dentro de una función de evento de jQuery, la palabra clave `this` se refiere al elemento HTML específico que disparó el evento (es decir, el elemento en el que el usuario hizo clic).

Una vez se da click, se añade el borde, nota que cuando se inspecciona el elemento, se añade una nueva clase:

ANTES
![](https://imgur.com/DHyRoay.png)

DESPUES
![](https://imgur.com/YlZGswy.png)