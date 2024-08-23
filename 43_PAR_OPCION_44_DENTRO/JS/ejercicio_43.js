'use strict'

function farenthein(centigrados, mostrar = false){
    if(mostrar){
        document.write('valor conversion '+ (centigrados*9/5 + 32));
    }
    return centigrados*9/5 + 32;
}
var temperature = 112;
var conversion = farenthein(temperature, true);

console.log(temperature + ' en grados centigrados equivale a ' + conversion + ' farenheit');
console.log(typeof conversion);


function control_temperatura(temperatura_farenheit){
    let estado = false;
    let centigrados = farenthein(temperatura_farenheit, true);
    if(centigrados>302 && centigrados<392){
        estado = true      
    }
    return estado
}

console.log('Programa Horno');
temperature = parseInt(prompt('Lectura del sensor en grados Celsius', 0)); 
console.log(`Estado del horno ${control_temperatura(temperature)}`);

