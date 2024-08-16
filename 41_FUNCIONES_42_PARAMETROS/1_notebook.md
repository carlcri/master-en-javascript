# 41 Crear Funciones

Con la palabra reservada *function* se crean funciones. La siguiente funcion retorna una cadena de texto:

```js
'use strict'

function farenthein(){
    return "Convierto de centigrados a farenthein";
}

var conversion = farenthein();
console.log(conversion);
```

# 42 Parametros

Modifica la funcion anterior para que reciba un parametro que indique la temperatura en grados centigrados.

```js
function farenthein(centigrados){
    return centigrados*9/5 + 32;
}
var temperature = -17.7778;
var conversion = farenthein(temperature);

console.log(temperature + ' en grados centigrados equivale a ' + conversion + ' farenheit');
```

