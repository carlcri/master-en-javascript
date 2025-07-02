# FIND y PARENT

Imagina que tienes una lista de tareas. Quieres poder marcar una tarea como completada, o quizás identificar la tarea "número X" para realizarle alguna acción. Aquí es donde find(), parent() y eq() brillan.

## Ejercicios

### Paso 2

Vamos a hacer que, al hacer clic en el botón "Completar" de una tarea, toda la tarea se marque visualmente como completada.

#### Paso 2.1

Cada vez que se de click en una tarea, mostrar en consola el texto del boton:

```js
    var class_mark_completed = $('.mark-completed');

    class_mark_completed.click(function(){ 
        console.log($(this)[0].innerHTML);
    });
```

#### Paso 2.4 Encuentra el Elemento Padre

Del boton que se clickeo. En nuestro HTML, el padre del ``<button>`` es el ``<li> ``con la clase ``.task-item``
```js
    var class_mark_completed = $('.mark-completed');
    class_mark_completed.click(function(){ 

        const $buttonClicked = $(this);
        console.log($buttonClicked[0].innerHTML);
        $buttonClicked[0].innerHTML = 'completada';

        const $taskItem = $buttonClicked.parent();
        console.log($taskItem);
        console.log($taskItem[0].innerHTML);     
    });
```

#### Sub-Paso 2.5: Añade la Clase ``completed`` al Elemento Tarea

```js
    var class_mark_completed = $('.mark-completed');
    class_mark_completed.click(function(){ 

        const $buttonClicked = $(this);
        console.log($buttonClicked[0].innerHTML);
        $buttonClicked[0].innerHTML = 'completada';

        const $taskItem = $buttonClicked.parent();
        console.log($taskItem);
        console.log($taskItem[0].innerHTML);     

        $taskItem.addClass('completed'); 👈
    });
```

![image](https://imgur.com/rSPglFI.png)

Observa que cuando se da click se añade al elemento ``li``, la clase ``completed``

Observarmos tambien que una vez se hace click, el texto se tacha:

```css
.completed .task-text {
    text-decoration: line-through; /* ¡Esta es la propiedad que tacha el texto! */
    color: #888;
}
```

Cuando tu ``<li>`` pasa de ser ``<li class="task-item">`` a ``<li class="task-item completed">``, el navegador ve que ahora el ``<li>`` tiene la clase *completed*. Como el ``<span>`` con class="task-text" está dentro de ese ``<li>`` que ahora tiene *completed*, la regla CSS ``.completed .task-text`` se activa y le aplica el estilo text-decoration: line-through;, que es lo que produce el efecto de tachado.


En ese orden de ideas, tambies se aplica la regla `.completed .mark-completed`, que cambia el background color a verde, y desactiva el cursor. Aunque todavia se puede clicker sobre el mismo. 

```css
.completed .mark-completed {
    background-color: #28a745; /* Verde para completado */
    cursor: not-allowed;
    opacity: 0.7;
}
```

#### Sub-Paso 2.6: (Opcional) Deshabilita el Botón Clicado

ver codigo 

#### Sub-Paso 2.7: (Opcional) Cambia el Texto del Botón

Ya lo habiamos realizado

```js
$(document).ready(function() {
    console.log('jQuery ha cargado y el DOM está listo.');

    var class_mark_completed = $('.mark-completed');
    class_mark_completed.click(function(){ 

        const $buttonClicked = $(this);
        console.log($buttonClicked[0].innerHTML);
        $buttonClicked[0].innerHTML = 'completada'; 👈

        const $taskItem = $buttonClicked.parent();
        console.log($taskItem);
        console.log($taskItem[0].innerHTML);     

        $taskItem.addClass('completed');
        console.log($taskItem[0].innerHTML); 

        // Deshabilita el botón que fue clicado para que no se pueda volver a clicar.
        //$buttonClicked.prop('disabled', true);
    });
});
```

#### Sub-Paso 2.8: Encuentra el Texto de la Tarea (.find())

Si lo hicieramos con JS navivo, por ejemplo, con *queryselector*:

```js
// Dentro de la función de clic del botón "Completar"
$('.mark-completed').on('click', function() {
    const $buttonClicked = $(this);
    const $taskItem = $buttonClicked.parent(); // $taskItem es un objeto jQuery

    // Para usar querySelector, necesitamos el elemento DOM nativo del <li>.
    // Podemos obtenerlo de $taskItem usando [0] o .get(0)
    const taskItemNative = $taskItem[0]; // O $taskItem.get(0);

    // Ahora, en el elemento DOM nativo, usamos querySelector
    // para encontrar el primer descendiente con la clase 'task-text'.
    const taskTextSpanNative = taskItemNative.querySelector('.task-text');

    // Para obtener el texto de un elemento DOM nativo, usamos .textContent
    const taskText = taskTextSpanNative.textContent;

    console.log('Tarea marcada como completada (JS puro find):', taskText);

    // ... (resto del código jQuery: addClass, prop, text) ...
    $taskItem.addClass('completed');
    $buttonClicked.prop('disabled', true);
    $buttonClicked.text('Completada');
});
```

Y usando Jquery:

```js
console.log($taskItem.find('.task-text')[0].innerText);
```

Y mucho mas simple:


