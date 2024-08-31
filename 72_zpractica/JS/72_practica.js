'use strict'

window.addEventListener('load', function(){

    //De acuerdo a un arreglo de precios, modificar los precios de los animalitos
    // Variables
    var preciosArray = [35000, 52000, 25000, 15000];
    var precios = document.querySelectorAll('.price'); 
    var boton_comprar = document.querySelectorAll('.buy-btn');
    var product_name = document.querySelectorAll('.product-name');

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
    boton_comprar.forEach(function(boton){
        boton.addEventListener('click', function(){
            let price = this.parentElement.querySelector('.price').textContent;
            let product_name = this.parentElement.querySelector('.product-name').textContent;
            let salida = `haz comprado un ${product_name} por ${price}`;
            console.log(salida);
        })
    })

    // eventos mouseover mouseout
    product_name.forEach(function(product){
        product.addEventListener('mouseover', function(){
            product.style.color = 'green';
        })
        console.log(product.textContent);
    })

    product_name.forEach(function(product){        
        product.addEventListener('mouseout', function(){
            product.style.color = '';
        })
    })


})