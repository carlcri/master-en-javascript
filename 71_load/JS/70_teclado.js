'use strict'

// Muestra en Consola el Script de JS se esta usando
const currentScript = document.currentScript.src;
const fileName = currentScript.split('/').pop();
console.log('JS file: ' + fileName);

var input = document.querySelector('#campo_nombre');
//Evento focus
input.addEventListener('focus', function(){
    console.log('focus: estas dentro del input');
})

//Evento blur
input.addEventListener('blur', function(){
    console.log('blur: estas fuera del input')
})

// Evento keydown
input.addEventListener('keydown', function(event){
    console.log('keydown: presionando una tecla', event.key);
})

//Evento keypress
input.addEventListener('keypress', function(event){
    console.log('keypress: presionando una tecla', event.key);
})

// input.addEventListener('keydown', function(event){
//     console.log('Tecla presionadaa:', String.fromCharCode(event.keyCode));
// });
