# Operador THIS

El operador ``this`` en JavaScript es una referencia al objeto que está ejecutando el código en el contexto actual. Su valor cambia dependiendo de cómo y dónde se use, pero generalmente se refiere al objeto en el que se encuentra la función actual o al objeto que llama a una función.

El uso de ``this`` se encuentra en el siguiente fragmento dentro del evento de click asociado a los botones con la clase ``.buy-btn``:

```js
 var boton_comprar = document.querySelectorAll('.buy-btn');
...
... 
boton_comprar.forEach(function(boton){
    boton.addEventListener('click', function(){
        let price = this.parentElement.querySelector('.price').textContent;
        let product_name = this.parentElement.querySelector('.product-name').textContent;
        let salida = `haz comprado un ${product_name} por ${price}`;
        console.log(salida);
    })
})
```

## Cómo Funciona this Aquí

1. Contexto del click en el botón:

- Cuando haces clic en uno de los botones *boton_comprar*, el evento click es disparado.
- ``this`` dentro de la función de evento click se refiere al botón específico que fue clickeado.

2. Uso de this para Acceder al DOM:

- ``this.parentElement``: Hace referencia al elemento padre del botón clickeado. Esto es útil para acceder al contenedor que agrupa tanto el botón como el nombre del producto y el precio.

- ``this.parentElement.querySelector('.price').textContent``: Accede al precio dentro del contenedor padre del botón clickeado.

- ``this.parentElement.querySelector('.product-name').textContent``: Accede al nombre del producto dentro del contenedor padre del botón clickeado.