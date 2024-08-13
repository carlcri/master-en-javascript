'use strict'

var caja = document.getElementById("mi-caja");
console.log(caja.innerHTML);
caja.innerHTML = "Texto Manipulado con JS"
caja.style.color = "green";
console.log(caja.innerHTML);