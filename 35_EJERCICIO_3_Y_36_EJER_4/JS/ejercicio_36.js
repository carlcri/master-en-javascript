'use strict'

console.log("Ejercicio-36. Muestra los numeros impares entre un rango dado por el usuario")
var low = parseInt(prompt("valor minimo", 0));
var high = parseInt(prompt("valor maximo", 1));

while(low <= high){
    if(low%2 != 0){
        console.log(low);
        document.write(low + '<br>')
    }
    low++;
}






