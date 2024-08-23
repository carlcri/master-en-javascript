# 46 Funciones Anonimas y Callbacks

## Funciones Anonimas

Son aquellas que no tienen nombre, por ejemplo:

```js
// Anonymous function assigned to a variable
var myFunction = function() {
    console.log("This is an example of an anonymous function.");
};
  
// Invoking the anonymous function
myFunction();
```

Aquí, la función se asigna a la variable **myFunction**, pero la propia función no tiene nombre. Aunque se puede invocar usando myFunction(), la función en sí sigue siendo anónima porque no tiene un identificador propio.

## CALLBACKS

Un callback en JavaScript es una función que se pasa como argumento a otra función para ser ejecutada después de que la función principal completa su operación. Esto permite manejar operaciones complejas y asincrónicas de manera eficiente y modular.

Para entenderlo mejor veamos algunos ejemplos:

### Ejemplo 1

Crear una funcion anonima que salude y se despida.

```js
function saludar(nombre, callback) {
    console.log("Hola, " + nombre);
    callback(nombre); 👈
}

function despedirse(nombre) {
    console.log(`Adios ${nombre}`);
}

saludar("Juan", despedirse);
```

La funcion **saludar** recibe dos parametros: *nombre* y *callback*, donde esta ultima es una funcion, y que se invoca dentro de la funcion principal, por decirlo de alguna manera.

*SALIDA*

    Hola, Juan
    Adios Juan


### Ejemplo 2

Callback con datos procesados. 

```js
function procesarDatos(datos, callback) {
    let resultado = datos * 2;
    callback(resultado);
}

function mostrarResultado(resultado) {
    console.log("El resultado es: " + resultado);
}

procesarDatos(5, mostrarResultado);

```

- *procesarDatos* toma un número y un callback.
- Multiplica el número por 2 y luego pasa el resultado a *mostrarResultado* a través del callback.

*SALIDA*

    El resultado es: 10

### Ejemplo 3

Callback en Métodos de Array

Los métodos de array como forEach, map, filter, etc., utilizan callbacks.

Ejemplo con *forEach*:

```js
let frutas = ["manzana", "banana", "uva"];

frutas.forEach(function(x){
    console.log(`me gusta comer ${x}`)
});
```

*SALIDA:* 

```vbnet
Me gusta comer manzana
Me gusta comer banana
Me gusta comer uva
```

Aqui tenemos un codigo equivalente, y la salida seria la misma:
 
```js
let frutas = ["manzana", "banana", "uva"];


function mostrar_fruta(fruta){
    console.log(`Me gusta comer ${fruta}`);    
}


frutas.forEach(mostrar_fruta);
``` 
### Ejemplo 4

Dado un arreglo de numeros, usar el metodo *map*, para multiplicar cada elemento por menos cinco y sumarle 10.

```js
let numbers= [-3, -2, -1, 0, 1, 2, 3]

let y = numbers.map(function(x){
    return x*(-5)+10
})

console.log(y)
```

*OUTPUT*

    [25, 20, 15, 10, 5, 0, -5]


### Ejemplo 5

Dado que tenemos una funcion principal llamada *f_x* y una funcion secundaria de callback que llamaremos *g_x*:

```js
function f_x(number, callback){
    let result = 5*number;
    return callback(result);
}

function g_x(entrada){
    return entrada-5;
}


let salida = f_x(-5, g_x)
console.log(salida)
```

Donde *f_x* recibe un numero y un callback. La funcion de callback resta cinco. 


### Ejemplo 6.

Usar la funcion f_x de tal forma que dado un arreglo, de numeros, podamos aplicar f(x) y g(x), sin rescribir codigo.

```js
let values = [1, 3, 5, 7, 9]

let salida = values.map(function(value){
    return f_x(value, g_x)
})
```
OUTPUT:

    [0, 10, 20, 30, 40]