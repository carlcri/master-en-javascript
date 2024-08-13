# 20_LED_AND_VAR

Atajo en EDGE y CHROME en Windows:

    CTRL + SHIFT +J

Se pueden declarar variables con *LET* or *VAR*, pero hay una sutil diferencia

## Con VAR

```js
'use strict'

var texto = 'valor antiguo';
console.log(texto)

if(true){
    var texto = 'nuevo valor'
    console.log(texto)
}

console.log(texto)
```

Resultado:

    valor antiguo
    nuevo valor
    nuevo valor

## Con LET

```js
let texto_1 = 'valor antiguo';
console.log(texto_1)

if(true){
    let texto_1 = 'nuevo valor'
    console.log(texto_1)
}

console.log(texto_1)
```

Resultado:

    valor antiguo
    nuevo valor
    valor antiguo

## Conclusion

La diferencia principal entre *var* y *let* en JavaScript radica en su alcance y comportamiento de hoisting.

Las variables definidas con **var** tienen un alcance de función o global 

En cambio, las variables definidas con **let** tienen un alcance de bloque (es decir, limitadas a las llaves {} más cercanas)

### Lectura

El "hoisting" es un comportamiento en JavaScript donde las declaraciones de variables y funciones se mueven automáticamente al comienzo de su contexto de ejecución (ya sea una función o el ámbito global) durante la fase de compilación. 

Esto significa que puedes usar variables y funciones antes de haberlas declarado en el código. Sin embargo, mientras las declaraciones de variables con var son "hoisted" y se inicializan como undefined, las variables declaradas con let y const también se elevan, pero no se inicializan, lo que lleva a un error si se intenta acceder a ellas antes de su declaración. 

Las funciones declaradas de forma tradicional también se "hoistean" completamente, lo que permite llamarlas antes de su definición en el código.