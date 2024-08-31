'use strict'

// Muestra en Consola el Script de JS se esta usando
const currentScript = document.currentScript.src;
const fileName = currentScript.split('/').pop();
console.log('JS file: ' + fileName);

var boton_presionar = document.querySelector('#boton');
console.log(boton_presionar.textContent);



function cambiar_color(){
    console.log('Boton presionado');
    let color = boton_presionar.style.background;
    if(color == 'navy'){
        boton_presionar.style.background = 'ivory';
    }
    else{
        boton_presionar.style.background = 'navy'
    }
}