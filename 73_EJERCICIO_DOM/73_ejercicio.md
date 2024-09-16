# 73 Ejercicio Completo

Crearemos un formulario para colocar los datos, donde se pueda enviar un formulario, y una vez se envia se muestran los datos en pantalla. 

- crearemos un formulario dentro de una etiqueta de parrafo

```html
        <form action="" method="POST" id="formulario">
            <label for="firstname">Nombre</label> <br> 👈
            <input type="text" name="firstname" id="firstname"> <br> 👈

            <label for="lastname">Apellido</label> <br>
            <input type="text" name="lastname" id="lastname"> <br>

            <label for="age">Edad</label> <br>
            <input type="number" name="age" id="age"> <br>

            <input type="submit" value="Enviar Formulario" id="submit"> <br>
        </form>
```

### Recomendaciones a la hora de crear formularios

- El atributo for en la etiqueta ``<label>`` y el atributo id en la etiqueta ``<input>`` deben coincidir para crear una relación explícita entre la etiqueta y el campo de entrada. Esta relación tiene varias ventajas: Mejora de la accesibilidad, Mayor area de click, Claridad y organizacion. 

### Trabajando con el formulario

- Usar el querrySelector para seleccionar o capturar el formulario
- Sobre el formulario, capturar el *evento submit*.

#### Error al enviar el formulario

Pero hay un problema cuando se da click al formulario, un *error 405: failed to load resource*.

El error 405 que estás viendo es un error de "Method Not Allowed" que ocurre cuando el servidor no permite el método HTTP que estás intentando usar para acceder a la página o enviar datos. En el contexto de un formulario HTML, este error a menudo se produce porque el formulario intenta enviar datos a una URL en la que el método HTTP **POST** no está permitido, o porque no se ha configurado correctamente un controlador para manejar la solicitud POST.

##### Posible solucion

Prevenir el Envío del Formulario: Puedes evitar que el formulario se envíe y, en su lugar, ejecutar tu código JavaScript para mostrar el mensaje en la consola.

`event.preventDefault();`

### Continuo trabajando con el formulario

Una vez se ha capturado el evento submit, mostrar los datos del formulario

- Se usa el querry selector junto con la propiedad *value*:

`let nombre = document.querySelector('#firstname').value;`

```js
'use strict'

window.addEventListener('load', function(){
    // Variables
    var formulario = document.querySelector('#formulario'); 👈

    // Eventos
    formulario.addEventListener('submit', function(){
        event.preventDefault();  // Evita el envío del formulario 👈
        console.log('evento submit capturado');

        let nombre = document.querySelector('#firstname').value; 👈
        let apellido = document.querySelector('#lastname').value;
        let edad = document.querySelector('#age').value;
        console.log(nombre, apellido, edad);
    })
})
```

