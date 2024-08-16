'use strict'

var numero_1 = parseInt(prompt("digite numero 1", 0));
var numero_2 = parseInt(prompt("digite numero 2", 1));

console.log(numero_1, numero_2);

if(numero_1 >= numero_2){
    console.log(numero_1 + " es mayor o igual " + numero_2);
}
else{
    console.log(numero_1 + " es menor que " + numero_2);
}
