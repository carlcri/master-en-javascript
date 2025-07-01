'use strict'


$(document).ready(function(){
    console.log('Jquery ha cargado. Felizz');

    
    // Selectores de Clase

    $('.without_border').click(function() { 
        console.log('click dado');
        $(this).addClass('with_border');  
    });

})




