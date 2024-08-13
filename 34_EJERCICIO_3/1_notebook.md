# 34 ejercicio 3

Usando un bucle, mostrar la media y la suma de los numeros introducidos, hasta introducir un numero negativo. 

## Solucion con un while

```js
'use strict'

console.log("programa para calcular la media")
var suma = 0;
var count = 0;

var number = parseInt(prompt("digite numero 1", 0));

while(number>=0){
    suma += number;
    count ++;
    number = parseInt(prompt("digite numero 1", 0));
}

console.log('contador: '+ count);
console.log('la suma es: '+ suma);
```
## SOLUCION con un DO While

La verda no la recomiendo para este ejercicio.