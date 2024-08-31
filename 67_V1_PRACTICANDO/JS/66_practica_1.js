'use strict'

// 1. Seleccionar todos los elementos con la clase 'product'

var clase_products = document.querySelectorAll('.product');
clase_products.forEach((elemento) => {
    console.log(elemento);
})

// 2. Seleccionar el primer elemento con la clase 'product'
console.log('ejercicio 2')
var clase_product = document.querySelector('.product');
console.log(clase_product);

// 3. Seleccionar todos los botones de comprar
console.log('ejercicio 3')
var clase_buy_btn = document.querySelectorAll('.buy-btn');
console.log(clase_buy_btn.length);

// 5. Cambiar el texto del primer botón de comprar
console.log('ejercicio 5')
clase_buy_btn[0].textContent = 'compra ya';
//console.log(clase_buy_btn[0].textContent)


// 6. Cambiar el color del texto del primer nombre de producto
var firstProduct = clase_products[0];
console.log(firstProduct)

firstProduct.querySelector('.product-name').style.color = 'violet'; 