'use strict';

$(document).ready(function() {
    console.log('jQuery ha cargado y el DOM está listo.');

    $('#lastname').focus(function(){ 
        $(this).css('border', '5px solid green');
        console.log('blur')
//       console.log($(this).text())
    });

    $('#lastname').blur(function() { 
        $(this).css('border', '1px solid #ccc');

        // $('#box').show()
        // var lastname = $(this).val();
        // $('#box').text(lastname);  
        
         $('#box').show().text($(this).val());
    });


    console.log($('#box').text())
    console.log($('#box').html())

});


