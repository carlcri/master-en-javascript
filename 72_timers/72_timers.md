# 72 Timers

Usaremos el evento 'load' para practicar lo anterior 

## Ejercicio 1

Imprimir en la consola cada 3 segundos un mensaje de 'hola mundo':

```js
'use strict'

window.addEventListener('load', function(){
    // Timers
    var imprimir = setInterval(function(){
        console.log('hola');
    }, 3000)
})
```

## Ejercicio 2

Modificar el script anterior para que cada tres segundos, el primer *h1* que encuentre, le cambie la fuente entre una grande y una chica, cada 2 segundos:

```js
window.addEventListener('load', function(){
    // Timers
    var imprimir = setInterval(function(){
        console.log('hola');
        let tamano_fuente = titulo.style.fontSize;

        if(tamano_fuente != '20px'){
            titulo.style.fontSize = '20px';
        }
        else{
            titulo.style.fontSize = '40px';
        }
    }, 2000)

    var titulo = document.querySelector("h1");
    console.log(titulo.textContent); 
})
```

## Ejercicio 3

Modificar el proyecto de tal forma que se agregue un boton, cuya funcionalidad sea parar el parpadeo de las letras, definido en la funcion anterior.

```js
window.addEventListener('load', function(){
    // Timers
    var parpadear = setInterval(function(){ 👈
        console.log('hola');
        let tamano_fuente = titulo.style.fontSize;

        if(tamano_fuente != '20px'){
            titulo.style.fontSize = '20px';
        }
        else{
            titulo.style.fontSize = '40px';
        }
    }, 2000)

    var titulo = document.querySelector("h1");
    var boton_parar = document.querySelector('#boton-parar'); 👈

    //Evento click
    boton_parar.addEventListener('click', function(){ 👈
        clearInterval(parpadear); 👈
        window.alert('parpadeo detenido')
    })
})
```

1. Usamos el *querySelector* para seleccionar el boton y guardarlo en una variable
2. Añadimos un evento para detectar cuando se haga click en el boton
3. La funcion *clearInterval* es por decirlo asi la contrapartida de *setInterval*, y enviamos como parametro la variable *parpadear*.

## Ejercicio 4

Modificar el proyecto para añadir un segundo boton, donde al darle click, se inicie el parpadeo. Segun el profe este script deberia funcionar, sin embargo tiene un bug. Si se detiene la primera vez, bien. Pero si se vuelve a iniciar y se vuelve a intentar parar, ya no para:

```js
'use strict'

window.addEventListener('load', function(){

    function intervalo(){
        var parpadear = setInterval(function(){ 
            console.log('hola');
            let tamano_fuente = titulo.style.fontSize;
    
            if(tamano_fuente != '20px'){
                titulo.style.fontSize = '20px';
            }
            else{
                titulo.style.fontSize = '40px';
            }
        }, 1000)
        return parpadear;
    }

    // variable
    var titulo = document.querySelector("h1");
    var boton_parar = document.querySelector('#boton-parar'); 
    var boton_iniciar = document.querySelector('#boton-iniciar');
    var parpadear = intervalo();


    //click on stop
    boton_parar.addEventListener('click', function(){ 
        clearInterval(parpadear); 
        window.alert('parpadeo detenido')
    })


    //click on start
    boton_iniciar.addEventListener('click', function(){
        console.log('iniciando');
        intervalo();
    })
})
```

### Corrigiendo el bug

archivo: *72-timers_v1*. Se reorganiza un poco el codigo, y dentro del evento click asociado al boton de inicio, se guarda en la misma variable, que se usa para el *clearInterval*:

```js
'use strict'

window.addEventListener('load', function(){
    //variables
    var titulo = document.querySelector("h1");
    var boton_parar = document.querySelector('#boton-parar'); 
    var boton_iniciar = document.querySelector('#boton-iniciar');
    var parpadear = cambiar_fuente();


    function cambiar_fuente(){
        var parpadear = setInterval(function(){ 
            console.log('hola');
            let tamano_fuente = titulo.style.fontSize;
    
            if(tamano_fuente != '20px'){
                titulo.style.fontSize = '20px';
            }
            else{
                titulo.style.fontSize = '40px';
            }
        }, 1000)
        return parpadear;
    }

 
    //click on stop
    boton_parar.addEventListener('click', function(){ 
        clearInterval(parpadear); 
        window.alert('parpadeo detenido')
    })


    //click on start
    boton_iniciar.addEventListener('click', function(){
        console.log('iniciando');
        parpadear = cambiar_fuente(); 👈
    })
})
```
