'use strict'

// Muestra en Consola el Script de JS se esta usando
const currentScript = document.currentScript.src;
const fileName = currentScript.split('/').pop();
console.log('JS file: ' + fileName);


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

function add_margin(){
    boton_presionar.style.padding = '5px';
    boton_presionar.style.border = "1px solid red"
    console.log('margen y padding modificados')
}

var boton_presionar = document.querySelector('#boton');
console.log(boton_presionar.textContent);


//Eventos

boton_presionar.addEventListener('click', function(){
    cambiar_color();
})

boton_presionar.addEventListener('dblclick', function(){
    add_margin();
})

boton_presionar.addEventListener('mouseover', function(){
    boton_presionar.style.background = "red";
})

boton_presionar.addEventListener('mouseout', function() {
    boton_presionar.style.background = "yellow"; 
});

