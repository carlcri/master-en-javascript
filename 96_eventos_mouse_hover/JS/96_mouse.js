'use strict';

$(document).ready(function() {
    console.log('jQuery ha cargado y el DOM está listo.');

    let aux = $('#box1').text();
    console.log(aux);

    $('#box1').mouseover(function () { 
        $(this).css('background', 'yellow');
    });


    $('#box1').mouseout(function () { 
        $(this).css('background', 'red');
    });




    console.log('mouse hover:');
    $('#box2').hover(function () {
            // over
            $(this).css('background', 'yellow');
            
        }, function () {
            // out
            $(this).css('background', 'red');
        }
    );

    //doble click y click
    $('#box3').click(function() { 
        $(this).text('me diste click');
        $(this).css('border','5px solid blue');
    });

    $('#box3').dblclick(function() { 
        $(this).text('me diste doble click')
        $(this).css('border','5px solid green');
    });





    // var class_mark_completed = $('.mark-completed');
    // class_mark_completed.click(function(){ 

    //     const $buttonClicked = $(this);
    //     console.log($buttonClicked[0].innerHTML);
    //     $buttonClicked[0].innerHTML = 'completada';

    //     const $taskItem = $buttonClicked.parent();
    //     console.log($taskItem);
    //     console.log($taskItem[0].innerHTML);     

    //     $taskItem.addClass('completed');
    //     console.log($taskItem[0].innerHTML);
    //     console.log($taskItem.eq(0).text())

    //    const $taskText =  $taskItem.find('.task-text').text();
    //    console.log(`texto de la tarea clickeada: ${$taskText}`);

       

        // Deshabilita el botón que fue clicado para que no se pueda volver a clicar.
        //$buttonClicked.prop('disabled', true);
    // });
});


