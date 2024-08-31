'use strict'

window.addEventListener('load', function(){

    function cambiar_fuente(){
        var parpadear = setInterval(function(){ 
            console.log('hola');
            let tamano_fuente = titulo.style.fontSize;
    
            if(tamano_fuente != '20px'){
                titulo.style.fontSize = '20px';
            }
            else{
                titulo.style.fontSize = '40px';
            }
        }, 1000)
        return parpadear;
    }

    // variable
    var titulo = document.querySelector("h1");
    var boton_parar = document.querySelector('#boton-parar'); 
    var boton_iniciar = document.querySelector('#boton-iniciar');
    var parpadear = cambiar_fuente();


    //click on stop
    boton_parar.addEventListener('click', function(){ 
        clearInterval(parpadear); 
        window.alert('parpadeo detenido')
    })


    //click on start
    boton_iniciar.addEventListener('click', function(){
        console.log('iniciando');
        cambiar_fuente();
    })
})