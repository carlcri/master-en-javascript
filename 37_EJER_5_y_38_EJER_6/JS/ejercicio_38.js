'use strict'

console.log("Ejercicio-38. Indica si un numero es par o impar")
var number = parseInt(prompt("introduce un numero ", 11));

while(isNaN(number)){
    console.log('valor incorrecto, introduce un valor numerico');
    number = parseInt(prompt("introduce un numero ", 11));
}

if(number%2 == 0){
    console.log('numero ' + number + ' es par');
}
else{
    console.log('numero ' + number + ' es impar');
}