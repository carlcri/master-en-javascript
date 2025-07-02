'use strict';

$(document).ready(function() {
    console.log('jQuery ha cargado y el DOM está listo.');

    var class_mark_completed = $('.mark-completed');
    class_mark_completed.click(function(){ 

        const $buttonClicked = $(this);
        console.log($buttonClicked[0].innerHTML);
        $buttonClicked[0].innerHTML = 'completada';

        const $taskItem = $buttonClicked.parent();
        console.log($taskItem);
        console.log($taskItem[0].innerHTML);     

        $taskItem.addClass('completed');
        console.log($taskItem[0].innerHTML); 

       const $taskText =  $taskItem.find('.task-text').text();
       console.log(`texto de la tarea clickeada: ${$taskText}`);

       

        // Deshabilita el botón que fue clicado para que no se pueda volver a clicar.
        //$buttonClicked.prop('disabled', true);
    });
});

