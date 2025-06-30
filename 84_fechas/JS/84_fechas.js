'use strict'

let fecha = new Date();
let year = fecha.getFullYear();
let month = fecha.getMonth();
let day = fecha.getDate();

console.log(`current year: ${year}, current month: ${month}, dia: ${day}`)


let radio = prompt('ingrese radio', 1)
let area = Math.PI*Math.pow(radio,2); 
console.log(area);

