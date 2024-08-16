# 32 ejercicio 1

Pide dos numeros al usuario y determina si es mayor o menor.

SOLUCION

Usando la funcion *prompt*, podemos asignar valores por defecto, en este caso 0 y 1.

```js
var numero_1 = parseInt(prompt("digite numero 1", 0));
var numero_2 = parseInt(prompt("digite numero 2", 1));
```

Y posteriormente comparar:

```js
if(numero_1 >= numero_2){
    console.log(numero_1 + " es mayor o igual " + numero_2);
}
else{
    console.log(numero_1 + " es menor que " + numero_2);
}
```

## Solucionando un bug

Si en vez de introducir numeros, introducimos letras, por ejemplo 8 y la letro T, dara resultados ilogicos:

    8 es menor que NaN

Donde NaN es *Not a Number*.

### Solucion

Crearremos una nuevo html llamado *bug.html*, y un nuevo archivo JS(ejercicio_32_1.js)

Usaremos la built-in function **isNan** y un ciclo while. 

```js
'use strict'

var numero_1 = parseInt(prompt("digite Numero 1", 0));
var numero_2 = parseInt(prompt("digite Numero 2", 1));

while(isNaN(numero_1) || isNaN(numero_2)){
    console.log('numeros invalidos');

    var numero_1 = parseInt(prompt("digite Numero 1", 0));
    var numero_2 = parseInt(prompt("digite Numero 2", 1));      
}

console.log(numero_1, numero_2);

if(numero_1 >= numero_2){
    console.log(numero_1 + " Es mayor o igual " + numero_2);
}
else{
    console.log(numero_1 + " Es menor que " + numero_2);
}
```


