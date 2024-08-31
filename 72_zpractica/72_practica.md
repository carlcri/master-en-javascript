# Practica

Con la plantilla de tienda de mascotas, vamos hacer varios ejercicios.

## Ejercicio 1

Cambiar todos los precios de los animales a $7.000

```js
    var precios = document.querySelectorAll('.price'); 
    precios.forEach(function(elemento){
        elemento.textContent = '$7.000'
```
## Ejercicio 2 

De acuerdo a un arreglo de precios, modificar los precios de los animalitos.

```js
    var preciosArray = [13000, 52000, 25000, 15000];

    var precios = document.querySelectorAll('.price'); 
    precios.forEach(function(elemento, indice){
        elemento.textContent = `$ ${preciosArray[indice]}`;
        console.log(preciosArray[indice])
```

## Ejercicio 3

Los precios deben ser modificados despues de un timeout de 5 segundos. 

```js
window.addEventListener('load', function(){

    // Variables
    var preciosArray = [13000, 52000, 25000, 15000];
    var precios = document.querySelectorAll('.price'); 

    // funciones
    function change_prices(){
        precios.forEach(function(elemento, indice){
            elemento.textContent = `$ ${preciosArray[indice]}`;
            console.log(preciosArray[indice])
        })
    }

    // timers
    setTimeout(function(){
        change_prices();
        console.log('timeout: cambio precios');
    }, 5000)
})
```
Se agrego *setTimeout*, el cual solo se ejecutara una vez despues de los 5 segundos

## Ejercicio 4

Que cuando se presione el boton de compra del perro, muestre en consola que animal se compro, y su precio.

```js
'use strict'

window.addEventListener('load', function(){

    //De acuerdo a un arreglo de precios, modificar los precios de los animalitos
    // Variables
    var preciosArray = [13000, 52000, 25000, 15000];
    var precios = document.querySelectorAll('.price'); 
    var boton_comprar = document.querySelector('.buy-btn');
    

    // funciones
    function change_prices(){
        precios.forEach(function(elemento, indice){
            elemento.textContent = `$ ${preciosArray[indice]}`;
            console.log(preciosArray[indice])
        })
    }

    // timers
    setTimeout(function(){
        change_prices();
        console.log('timeout: cambio precios');
    }, 4000)

    // eventos
    boton_comprar.addEventListener('click', function(){ 
        let product_name = document.querySelector(".product-name").textContent; 👈
        let price = document.querySelector('.price').textContent;  👈
        console.log(`haz comprado un ${product_name} por ${price}`);
    })
})
```

## Ejercicio 5

En el ejercicio anterior usamos la variable *product_name* y *price*, pero vamos a intentar usar la propiedad *this.parentElement* para seleccionar el elemento padre correspondiente al boton.

```js
'use strict'

window.addEventListener('load', function(){

    // Variables
    var preciosArray = [35000, 52000, 25000, 15000];
    var precios = document.querySelectorAll('.price'); 
    var boton_comprar = document.querySelector('.buy-btn');
    

    // funciones
    function change_prices(){
        precios.forEach(function(elemento, indice){
            elemento.textContent = `$ ${preciosArray[indice]}`;
            console.log(preciosArray[indice])
        })
    }

    // timers
    setTimeout(function(){
        change_prices();
        console.log('timeout: cambio precios');
    }, 4000)

    // eventos
    boton_comprar.addEventListener('click', function(){ 
        let price = this.parentElement.querySelector('.price').textContent; 👈
        let product_name = this.parentElement.querySelector('.product-name').textContent; 👈
        let salida = `haz comprado un ${product_name} por ${price}`;
        console.log(salida);
    })
})
```

## Ejercicio 6

Si ahora quisieramos agregar de forma general un evento, para todos los botones de compra, sin hacerlo uno a uno.¿Como seria? Y generar un mensaje en consola que se compro tal animalito por tal precio.

```js
'use strict'

window.addEventListener('load', function(){

    //De acuerdo a un arreglo de precios, modificar los precios de los animalitos
    // Variables
    var preciosArray = [35000, 52000, 25000, 15000];
    var precios = document.querySelectorAll('.price'); 
    var boton_comprar = document.querySelectorAll('.buy-btn'); 👈
    

    // funciones
    function change_prices(){
        precios.forEach(function(elemento, indice){
            elemento.textContent = `$ ${preciosArray[indice]}`;
            console.log(preciosArray[indice])
        })
    }

    // timers
    setTimeout(function(){
        change_prices();
        console.log('timeout: cambio precios');
    }, 4000)

    // eventos
    boton_comprar.forEach(function(boton){ 👈
        boton.addEventListener('click', function(){
            console.log(boton.textContent);
            let price = this.parentElement.querySelector('.price').textContent;
            let product_name = this.parentElement.querySelector('.product-name').textContent;
            let salida = `haz comprado un ${product_name} por ${price}`;
            console.log(salida);
        })
    })
})
```
- por cada boton de compra estamos generando un *EventListener* cada vez que se hace click. 

- de igual forma estamos usando la propiedad *this.parentElement* para acceder el elemento en la rama padre correspondiente a *price* o *product-name*.

## Ejercicio 7.

Necesitamos ahora que cada vez que pase por el nombre del animalito, haya un efecto que cambie el color. Usamos los eventos mouseover y mouseout:

```js
    var product_name = document.querySelectorAll('.product-name'); 👈
    ...

    // eventos mouseover mouseout
    product_name.forEach(function(product){
        product.addEventListener('mouseover', function(){
            product.style.color = 'green';
        })
        console.log(product.textContent);
    })

    product_name.forEach(function(product){        
        product.addEventListener('mouseout', function(){
            product.style.color = ''; 👈
        })
    })


})
```

toma nota que para dejar el color por defecto que tiene el navegador, se usa la propiedad color con un string vacio. 
