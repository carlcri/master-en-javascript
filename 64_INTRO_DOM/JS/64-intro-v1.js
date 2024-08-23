'use strict'

// Muestra en Consola el Script de JS se esta usando
const currentScript = document.currentScript.src;
const fileName = currentScript.split('/').pop();
console.log('JS file: ' + fileName);



function cambiaColor(color){
    caja.style.color = color;
}

function formatoCaja(color, padding='0px', background='automatic'){
    caja.style.color = color;
    caja.style.padding = padding;
    caja.style.background = background;
}

var caja = document.getElementById("mi-caja");
console.log(caja.innerHTML);
caja.innerHTML = "Texto Manipulado con JS"
console.log(caja.innerHTML);

// Utilizando el query selector

console.log('Usando querySelector')
var caja_1 = document.querySelector("#mi-caja");
console.log(caja.innerHTML);