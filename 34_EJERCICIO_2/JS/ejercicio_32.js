'use strict'

console.log("programa para calcular la media")
var suma = 0;
var count = 0;

var number = parseInt(prompt("digite numero 1", 0));

while(number>=0){
    suma += number;
    count ++;
    number = parseInt(prompt("digite numero: ", 0));
}

console.log('contador: '+ count);
console.log('la suma es: '+ suma);
console.log('media: '+ suma/count);