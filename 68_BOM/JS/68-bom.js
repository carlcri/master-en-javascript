'use strict'

// BOM - BROWSER OBJECT MODEL
console.log('Usando innerHeight y innerWidth')
console.log(window.innerHeight);
console.log(window.innerWidth);

console.log('Usando height and width')
console.log(screen.height);
console.log(screen.width);

console.log(window.location.href);

function redirect(url){
    window.location.href = url;
}

function ventanita(url){
    window.open(url, "", "width=400, height=300");
}