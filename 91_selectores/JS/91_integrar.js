'use strict'

$(document).ready(function(){
    console.log('Jquery ha cargado. Feliz');
    var div_red = $('#red')
    console.log(div_red);
    console.log(div_red[0].innerHTML);

    $('#red').css('background', 'red');


    var div_yellow = $('#yellow').css('background', 'yellow')
                                 .css('color', 'blue');

    console.log(div_yellow)
})

jQuery(document).ready(function(){
    console.log('jQuery está presente con el nombre completoo')
})


