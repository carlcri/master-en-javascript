'use strict'

// Muestra en Consola el Script de JS se esta usando
const currentScript = document.currentScript.src;
const fileName = currentScript.split('/').pop();
console.log('JS file: ' + fileName);

// Encontrar elementos por su Etiqueta
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs)

for(let i=0; i<=3; i++){
    console.log(todosLosDivs[i].textContent); 
}

console.log('longitud arreglo: ' + todosLosDivs.length);




for(let valor in todosLosDivs){
    console.log(valor);
}


// agrega un nuevo parrafo
function agregarParrafo(){
    let nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = 'orange';
    nuevoElemento.style.color = 'orange';
    document.querySelector('#mysection').appendChild(nuevoElemento);    
}


// agregar nuevos parrafos
function agregarParrafos(){
    for(let i=0; i<todosLosDivs.length; i++){
        let content = todosLosDivs[i].textContent;
        let nuevoElemento = document.createElement('p');
        nuevoElemento.textContent = content;
        nuevoElemento.style.color = 'green';

        document.querySelector('#mysection').prepend(nuevoElemento);
    }
}





//document.querySelector('#mysection');


// console.log('segunda parte')
// for(let valor in todosLosDivs){
//     console.log(valor);
// }


// function cambiaColor(color){
//     caja.style.color = color;
// }

// function formatoCaja(color, padding='0px', background='automatic'){
//     caja.style.color = color;
//     caja.style.padding = padding;
//     caja.style.background = background;
// }

// var caja = document.getElementById("mi-caja");
// console.log(caja.innerHTML);
// caja.innerHTML = "Texto Manipulado con JS"
// console.log(caja.innerHTML);

// // Utilizando el query selector

// console.log('Usando querySelector')
// var caja_1 = document.querySelector("#mi-caja");
// console.log(caja.innerHTML);