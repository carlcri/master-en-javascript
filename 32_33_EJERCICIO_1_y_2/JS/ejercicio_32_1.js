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
