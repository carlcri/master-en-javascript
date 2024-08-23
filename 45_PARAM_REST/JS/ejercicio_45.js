'use strict'

function listaFrutas(fruta0, fruta1, ...resto_frutas){
    console.log('Primera fruta: ', fruta0);
    console.log('Segunda fruta: ', fruta1);
    console.log('frutas adicionales', resto_frutas);
}

// Parametro REST
listaFrutas('banana', 'coco', 'manzana', 'naranja');

// Parametro Spread
var frutas = ['banana', 'manzana'];
listaFrutas(...frutas, 'coco', 'pera');