# Ejercicio-37. 

Muestra todos los numeros divisires de un numero introducido por el usuario

## Solucion

```js
'use strict'

console.log("Ejercicio-37. Muestra todos los numeros divisires de un numero introducido por el usuario")
var number = parseInt(prompt("introduce un numero ", 11));


for(let divisor=1; divisor<=number/2; divisor++){
    if(number%divisor ==0){
        let imprimir = divisor + ' es divisor de ' + number
        console.log(imprimir);
        document.write(imprimir);
    }
}
```

# Ejercicio 38

Ejercicio-38. Indica si un numero es par o impar. Si la entrada no es un numero, volver a pedir el numero.

Para ilustrar algunas sutiles diferencias con otros lenguajes de programacion:

```js
'use strict'

console.log("Ejercicio-38. Indica si un numero es par o impar")
var number = parseInt(prompt("introduce un numero ", 11));

console.log(typeof(number)); 👈
console.log(number);
```

Uno esperaria que la funcion *typeof* retornara un valor invalido o string si se digita una cadena de texto, pero no. Esto es lo que mostraria en consola.

```
number 👈
NaN
```

Un poco confuso. Entonces es mejor usar otros metodos para saber si lo que hay en la variable es NaN(Not a Number), o no lo es:

```js
'use strict'

console.log("Ejercicio-38. Indica si un numero es par o impar")
var number = parseInt(prompt("introduce un numero ", 11));

while(isNaN(number)){
    console.log('valor incorrecto, introduce un valor numerico');
    number = parseInt(prompt("introduce un numero ", 11));
}

if(number%2 == 0){
    console.log('numero ' + number + ' es par');
}
else{
    console.log('numero ' + number + ' es impar');
}
```

Sin embargo, ocurre una cosa curiosa: si ingresamos por ejemplo un numero seguido de una  texto *56Haua* indicara que par. Mientras que si ingresamos una texto seguido de un numero, indicara que no es un valor correcto, ¿Porque?:

![output](https://i.imgur.com/Lkx26iz.png)

![hola](https://i.imgur.com/8sPckrE.png)
### Respuesta

Este comportamiento se debe a cómo la función parseInt() en JavaScript interpreta las cadenas de texto que contienen caracteres no numéricos.

#### Funcionamiento de parseInt()

parseInt(): Esta función convierte una cadena de texto en un número entero. Empieza a leer la cadena desde el principio, y si encuentra un número válido, lo convierte hasta que encuentra un carácter no válido (que no es un dígito).
