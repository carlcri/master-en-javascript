'use strict'

console.log('Condicioanles')

var nombre = 'Rodrigo';
var edad = 17;
console.log(typeof(edad))

if(edad >=18){
    console.log(nombre + ' ' +  'adulto');
    if(edad >=65){
        console.log('adulto mayor');
    }
}
else{
    console.log('niño');
}


if(edad>=65){
    console.log(nombre + ' ' + 'adulto mayor');
}else if(edad>=18){
    console.log(nombre + ' ' + 'adulto');
}else{
    console.log('under age');    
}


//Operadores Logicos
console.log('Operadores Logicos')

var temperatura = 10;

if(temperatura <= -25 ){
    console.log("it is freezing. Tempeture is now " + temperatura );
}else if(temperatura >-25 && temperatura <= 0){
    console.log("temperature is below cero: " +temperatura);
}else if(temperatura >0 && temperatura < 10){
    console.log("weather is now much better. Tempeture is now " + temperatura);
}
else{
    console.log("spring is comming")
}
