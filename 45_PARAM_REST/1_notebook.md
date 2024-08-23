# 45 Parametros rest and spread
## Parametros Rest


Creamos una funcion que recibe dos parametros
```js
'use strict'

function listaFrutas(fruta0, fruta1){
    console.log('Primera fruta: ', fruta0);
    console.log('Segunda fruta: ', fruta1);
}

listaFrutas('banana', 'coco');
```

Si ingresamos mas frutas, por ejemplo:

    listaFrutas('coco', 'pera', 'banana')

Pues no es que vaya a dar un error, pero igualmente no las muestra. Entonces creamos un parametro *rest* con tres puntos suspensivos, para poder manipular el resto de parametros.

```js
function listaFrutas(fruta0, fruta1, ...resto_frutas){ 👈
    console.log('Primera fruta: ', fruta0);
    console.log('Segunda fruta: ', fruta1);
    console.log('frutas adicionales', resto_frutas);
}
```

![imagen](https://i.imgur.com/ZTASKKV.png)

Como es el caso de una fruta adicional, entonces vemos que las ingresa a un arreglo.

## Parametros Spread

Si ahora creamos un arreglo que se llama frutas, donde tengo limon y naranja:

    frutas = ['limon', 'naranja']

Y ahora quiero pasarlas como parametro 1 y 2 de la funcion, si lo hago directamente, pues no. Yo quiero que la primera fruta sea limon, y la segunda sea naranja.

![imagen](https://i.imgur.com/JlmIR3s.png)

Entonces lo que hago es colocar pero tres puntos al inicio, y frutas seria un parametro *spread*:

![image](https://i.imgur.com/GQIcnUs.png)