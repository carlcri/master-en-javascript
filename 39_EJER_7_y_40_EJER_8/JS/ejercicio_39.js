'use strict'

console.log("Ejercicio-39. Tabla de multiplicar")
var number = parseInt(prompt("¿De que numero quieres la tabla?", 1));

for(let i=0; i<=10; i++){
    let output = i + ' x ' + number + ' = ' + i*number
    console.log(output);
    document.write(output+'<br>')
}

