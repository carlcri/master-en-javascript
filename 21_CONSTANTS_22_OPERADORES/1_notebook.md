# 21_Constantes

Atajo en EDGE y CHROME en Windows:

    CTRL + SHIFT +J

Con la palabra reservada *const*:

    const pi = 3.1416;

# OPERADORES Y TIPOS DE DATOS

## Operadores Basicos

Mostrar el valor de la suma de dos numeros en consola

```js
var number_1 = 10;
var number_2 = 4;

var suma = number_1 + number_2;
var resta = number_1 - number_2;
var modulo = number_1 % number_2;

console.log("El valor de la suma es: " + suma);
console.log("El valor de la resta es: " + resta);
console.log("El valor del modulo: " + modulo);
```

## Tipos de Datos Basicos

```js
var entero = 4;
var cadena_texto = "hello world";
var booleano = falso;

console.log(entero, cadena_texto, booleano);
```

Y conversiones basicas con *parseInt* y *parseFloat*

```js
var numero_falso = "5.5";
console.log(parseInt(numero_falso)**2);
console.log(parseFloat(numero_falso)**2);
```

Si al *numero_falso* le sumamos 2, no nos dara error, pero nos dara una cadena de caracteres:

```js
var numero_falso = "5.5";
console.log(numero_falso+2);
console.log(typeof(numero_falso+2));
```

OUT:

    5.52
    string


