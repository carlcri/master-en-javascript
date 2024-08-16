# 26 CONDICIONAL SWITCH

Atajo en EDGE y CHROME en Windows:

    CTRL + SHIFT +J

## Ejercicio

Construir una calculadora para realizar operacion entre dos numeros:

```js
console.log('Calculadora');
console.log('(1)Suma, (2)Resta, (3)Multiplicacion, (4)Division, Por defecto realiza una potencia');

var opcion = 7;
var number_1 = 10;
var number_2 = 2;

switch(opcion){
    case 1:
        console.log(number_1+number_2);
        break;
    case 2:
        console.log(number_1-number_2);
        break;
    case 3:
        console.log(number_1*number_2);
        break;
    case 4: 
        console.log(number_1/number_2);
        break;
    default:
        console.log(number_1**number_2);
}
```

