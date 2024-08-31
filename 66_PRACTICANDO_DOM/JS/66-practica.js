'use strict'

// Muestra en Consola el Script de JS se esta usando
const currentScript = document.currentScript.src;
const fileName = currentScript.split('/').pop();
console.log('JS file: ' + fileName);


var perros = document.getElementsByClassName('perro');

for(let i=0; i< perros.length; i++){
    console.log(perros[i].innerHTML);
    perros[i].style.color = 'green';
}

var gatos = document.querySelectorAll('.gato');

gatos.forEach(function(elemento){
    elemento.style.color = 'red';
    elemento.textContent =  ` ${elemento.textContent} miau`;
})

var loros = document.querySelectorAll('.loro');


// La funcion cambia_color la use directamente en la consola
function cambia_color(clase_animal, color){
    clase_animal.forEach((elemento) => {
        elemento.style.color = color;
    })
}













// for(let div in divsPerro){
//     console.log(divsPerro[div])
// }

// for(let i=0; i< divsPerro.length; i++){
//     divsPerro[i].textContent = 'Hola Mundo';
//     divsPerro[i].style.color = 'green';
// }

// console.log(typeof divsPerro);

// // divsPerro[0].style.color = 'green';
// // divsPerro[0].textContent
