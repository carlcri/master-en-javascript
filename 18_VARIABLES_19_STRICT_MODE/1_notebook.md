# 18. Variables

Atajo en EDGE y CHROME en Windows:

    CTRL + SHIFT +J

Mover el archivo de JS a una nueva carpeta que se llame *JS*, y crear un archivo para las variables.

En el archivo  *02-variables.js* practicamos como declarar variables con *var*, e imprimirlas en consola.

```js
var country = "España";
var continent = "Europe";
var year = 2024;


console.log(country, continent, year);

continent = "Africa";
country = 'Angola';
year = 1600;

console.log(country, continent, year);
```

## Buena Practica usar El modo Estricto

Tambien hay la posibilad de activar el *modo estrico*: 

Por ejemplo, nuestro codigo se va a ejecutar correctamente si, declaramos una variable sin la palabra reservada *var*:

```js
country = "Alemania";
console.log(country, continent, year);
```

Simplemente añadimos *'use strict'* al comienzo de nuestro archivo.



