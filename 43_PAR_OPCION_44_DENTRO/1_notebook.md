# 43 Parametros Opcionales

Modifica la funcion anterior para que reciba un parametro que indique la temperatura en grados centigrados.

```js
function farenthein(centigrados){
    return centigrados*9/5 + 32;
}
var temperature = -17.7778;
var conversion = farenthein(temperature);

console.log(temperature + ' en grados centigrados equivale a ' + conversion + ' farenheit');
```

Para este caso el parametro *centrigrados* es obligatorio. Vamos añadir un parametro opcional llamado *mostrar*:


```js
'use strict'

function farenthein(centigrados, mostrar = false){
    if(mostrar){
        document.write('valor conversion '+ (centigrados*9/5 + 32));
    }
    return centigrados*9/5 + 32;
}
var temperature = 0;
var conversion = farenthein(temperature, true);

console.log(temperature + ' en grados centigrados equivale a ' + conversion + ' farenheit'); 👈
```

# 44 Funciones dentro de otras

Un sensor hace una lectura de la temperatura de un horno en grados centigrados, pero el sistema de control apaga o enciende el horno para mantener la temperatura en un rango entre 302 y 392 grados farenheit.

```js
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
```
Donde la funcion *farenthein* la estoy usando dentro de la funcion *control_temperatura*.