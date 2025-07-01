'use strict'


$(document).ready(function(){
    console.log('Jquery ha cargado. Feliz');

    // Selectores de ID
    var div_red = $('#red')
    console.log(div_red);
    console.log(div_red[0].innerHTML);

    $('#red').css('background', 'red');


    var div_yellow = $('#yellow').css('background', 'yellow')
                                 .css('color', 'blue');

    console.log(div_yellow)


    // Selectores de Clase
    console.log('selectores de clase');
    var clase_zebra = $('.zebra');
    console.log(clase_zebra)

    console.log(clase_zebra[0]);
    console.log(clase_zebra.eq(0))

    clase_zebra.css('background', 'green')
               .css('color', 'brown');
})

jQuery(document).ready(function(){
    console.log('jQuery está presente con el nombre completoo')
})


