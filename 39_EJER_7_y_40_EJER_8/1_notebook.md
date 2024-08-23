# 39 EJERCICIO 7

realizar la tabla de multiplicacion de un numero que diga el usuario

# 40 EJERCICIO 8

Mostrar en el documento html y en una alerta el resultado de operaciones basicas entre dos numeros.

### Solucion

Para la alerta los saltos de linea no pueden ser con ``br`` sino con backslash n: ``\n`` 

```js
'use strict'

console.log("Ejercicio-40.")
var number_1 = parseInt(prompt("ingrese numero 1", 1));
var number_2 = parseInt(prompt("ingrese numero 2", 1));


while(isNaN(number_1) || isNaN(number_2)){
    console.log("valores incorrectos vuelvalos a ingresar: ")
    var number_1 = parseInt(prompt("ingrese numero 1", 1));
    var number_2 = parseInt(prompt("ingrese numero 2", 1));    
}

var resultado = number_1 + '+' + number_2 + ' = ' + (number_1+number_2) + '<br>' +
            number_1 + '-' + number_2 + ' = ' + (number_1-number_2) + '<br>' +
            number_1 + '*' + number_2 + ' = ' + (number_1*number_2) + '<br>' +
            number_1 + '/' + number_2 + ' = ' + (number_1/number_2) + '<br>';


var resultado_1 = number_1 + '+' + number_2 + ' = ' + (number_1+number_2) + '\n' +
            number_1 + '-' + number_2 + ' = ' + (number_1-number_2) + '\n' +
            number_1 + '*' + number_2 + ' = ' + (number_1*number_2) + '\n' +
            number_1 + '/' + number_2 + ' = ' + (number_1/number_2) + '\n';            

document.write(resultado); 👈
alert(resultado_1); 👈
```