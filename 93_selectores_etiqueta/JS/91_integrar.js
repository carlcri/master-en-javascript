'use strict'


$(document).ready(function(){
    console.log('Jquery ha cargado. Muy Feliz');

    
    // Selectores de Clase

    $('.without_border').click(function() { 
        console.log('click dado');
        $(this).addClass('with_border');  
    });

    // Selectores de Etiqueta
    var parrafo = $('p').css('cursor', 'pointer');
    console.log(parrafo);

    parrafo.click(function() { 

        if($(this).hasClass('grande')){
            $(this).removeClass('grande');
        }
        else{
            $(this).addClass('grande');
        }
        
//        console.log($(this).hasClass('grande'));
//        $(this).addClass('grande');
    });


    // Selectores de Atributo
    var titulo = $('[title=bbc]').css('background', 'blue');

})




