'use strict'

window.addEventListener('load', function(){
    // Variables
    var formulario = document.querySelector('#formulario');
    var box_dashed = this.document.querySelector('.dashed');
    box_dashed.style.display = 'none';


    // Eventos
    formulario.addEventListener('submit', function(){
        event.preventDefault();  // Evita el envío del formulario
        console.log('evento submit capturado');
        box_dashed.style.display = 'block';

        let nombre = document.querySelector('#firstname').value;
        let apellido = document.querySelector('#lastname').value;
        let edad = document.querySelector('#age').value;
        console.log(nombre, apellido, edad);
    })
})
