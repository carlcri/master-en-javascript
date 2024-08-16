# 24_Condicionales

Atajo en EDGE y CHROME en Windows:

    CTRL + SHIFT +J

Seguimos practicando.

```js
'use strict'

var nombre = 'Rodrigo';
var edad = 17;
console.log(typeof(edad))

if(edad>=65){
    console.log(nombre + ' ' + 'adulto mayor');
}else if(edad>=18){
    console.log(nombre + ' ' + 'adulto');
}else{
    console.log('under age');    
}
```

# Operadores Logicos

AND: &&
OR: ||
NOT: !

Aqui un ejemplo:

```js
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
```
