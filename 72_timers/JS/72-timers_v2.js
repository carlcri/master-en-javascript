'use strict'

window.addEventListener('load', function() {
    // Variables
    var parpadear;
    var titulo = document.querySelector("h1");
    var boton_parar = document.querySelector('#boton-parar'); 
    var boton_iniciar = document.querySelector('#boton-iniciar');

    // Click on start
    boton_iniciar.addEventListener('click', function() {
        if (!parpadear) { // Verificar que no haya un intervalo en ejecución
            parpadear = setInterval(function() {
                console.log('Hola');
                let tamano_fuente = titulo.style.fontSize;

                if (tamano_fuente != '20px') {
                    titulo.style.fontSize = '20px';
                } else {
                    titulo.style.fontSize = '40px';
                }
            }, 2000);
        }
        console.log('Iniciando');
    });

    // Click on stop
    boton_parar.addEventListener('click', function() { 
        clearInterval(parpadear); 
        parpadear = null; // Reiniciar la variable para poder iniciar de nuevo
        window.alert('Parpadeo detenido');
    });
});
