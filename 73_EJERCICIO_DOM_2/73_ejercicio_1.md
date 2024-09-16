# 73 Ejercicio Completo Parte 2

Ahora una vez se envia el formulario, debe aparecer una cajita con los datos del formulario. La cajita solo debe aparecer cuando se da submit, de lo contrario debe permanecer oculta.

- En vez de meter el formulario en un parrafo meterlo en un div con una clase box. 
- Agregaremos otro div que tendra dos clases: box y dashed

```html
 <div class="box"> 👈
        <form action="#" method="POST" id="formulario">
            <label for="firstname">Nombre</label> <br>
            <input type="text" name="firstname" id="firstname"> <br>

            <label for="lastname">Apellido</label> <br>
            <input type="text" name="lastname" id="lastname"> <br>

            <label for="age">Edad</label> <br>
            <input type="number" name="age" id="age"> <br>

            <input type="submit" value="Enviar Formulario" id="submit"> <br>
        </form>
    </div>

    <div class="box dashed"> 👈
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet commodo metus, sit amet porttitor arcu. Aliquam finibus rutrum tempor. Donec eget viverra lectus. Donec cursus mi orci, ac congue justo gravida et. Aenean quis porttitor magna. Curabitur eu urna eget urna aliquam tincidunt a a tellus.
        </p>
    </div>
```

### Relación entre las clases

Cuando se usa la clase box dashed en un elemento, se están combinando los estilos de ambas clases. Esto se logra mediante la combinación de las dos clases en el atributo class del elemento HTML:

```css
.box{
    width: 250px;
    margin: 20px;
    border: 1px solid red;
    padding: 5px;
}

.dashed{
    border: 2px dashed orange;
}
```

![image](https://i.imgur.com/irzCP3w.png)

## Ocultando la clase dashed

El cuadrito naranja tiene que permanecer oculto si no se ha presionado el boton submit. Nuevamente se usa el quereSelector, y 

- con la propiedad display lo ocultamos y lo mostramos: none y block

```js
'use strict'

window.addEventListener('load', function(){
    // Variables
    var formulario = document.querySelector('#formulario');
    var box_dashed = this.document.querySelector('.dashed');
    box_dashed.style.display = 'none'; 👈


    // Eventos
    formulario.addEventListener('submit', function(){
        event.preventDefault();  // Evita el envío del formulario
        console.log('evento submit capturado');
        box_dashed.style.display = 'block'; 👈

        let nombre = document.querySelector('#firstname').value;
        let apellido = document.querySelector('#lastname').value;
        let edad = document.querySelector('#age').value;
        console.log(nombre, apellido, edad);
    })
})
```
## Mostrando los datos 

Hay varias formas de mostrar la informacion del usuario, se podria por ejemplo crear un nuevo parrafo con la informacion del usuario.

```js
        var parrafo = document.createElement("p");
        parrafo.append(`${nombre} ${apellido} ${edad}`);
        box_dashed.append(parrafo);
```

![image](https://i.imgur.com/cQCCuPA.png)

No se mostro la edad porque no se la envie.

### Segunda forma

Los datos del usuario estaran guardando en un array, y se van a gregar tantos parrafos como datos del usuario.

```js
        var datos_usuario = [nombre, apellido, edad];

        datos_usuario.forEach(function(dato){
            let parrafo = document.createElement("p");
            parrafo.append(dato);
            box_dashed.append(parrafo);

        })
```