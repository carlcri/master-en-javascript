'use strict'

console.log("Ejercicio-37. Muestra todos los numeros divisires de un numero introducido por el usuario")
var number = parseInt(prompt("introduce un numero ", 11));


for(let divisor=1; divisor<=number/2; divisor++){
    if(number%divisor ==0){
        let imprimir = divisor + ' es divisor de ' + number
        console.log(imprimir);
        document.write(imprimir);
    }
}

