'use strict'

function farenthein(centigrados){
    return centigrados*9/5 + 32;
}
var temperature = -17.7778;
var conversion = farenthein(temperature);

console.log(temperature + ' en grados centigrados equivale a ' + conversion + ' farenheit');