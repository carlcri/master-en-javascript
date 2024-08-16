'use strict'

console.log("Muestra los numeros enteros entre un rango dado por el usuario")

var low = parseInt(prompt("valor minimo", 0));
var high = parseInt(prompt("valor maximo", 1));

if(low>high){
    console.log('Error. Rango Invalido');
}
else{
    document.write("<h3> Secuencia del " + low + " al numero " + high + "</h3>");
    for(let i=low; i<=high; i++){
        console.log(i);
        document.write(i+"<br>");     
    }
}
