# 35 ejercicio 3

Mostrar todos los numeros enteros entre dos numeros introducidos por el usuario:

```js
var low = parseInt(prompt("valor minimo", 0));
var high = parseInt(prompt("valor maximo", 1));

if(low>high){
    console.log('Error. Rango Invalido');
}
else{
    for(let i=low; i<=high; i++){ 👈
        console.log(i);
    }
}
```

Observe que use la sentencia **let** para declarar la variable **i**.

## Escribir en el documento HTML

Haciendo uso del objeto  **document**, vamos a modificar el programa para escribir directamente en el documento html.

En JavaScript, el objeto *document* es una interfaz proporcionada por el navegador que representa el documento cargado en la ventana del navegador.

El objeto document es la puerta de entrada para interactuar con el DOM. A través de *document*, puedes acceder y manipular los elementos del DOM, como modificar el contenido de una página, añadir o eliminar elementos, cambiar atributos, y más.

```js
var low = parseInt(prompt("valor minimo", 0));
var high = parseInt(prompt("valor maximo", 1));

if(low>high){
    console.log('Error. Rango Invalido');
}
else{
    document.write("<h3> Secuencia del " + low + " al numero " + high + "</h3>"); 👈
    for(let i=low; i<=high; i++){
        console.log(i);
        document.write(i); 👈     
    }
}
```

Con la primera sentencia se esta colocando un h3 directamente en el documento html, lo mismo que con la segunda. 

![](https://i.imgur.com/OL2RIxq.png)

### Añadiendo un salto de linea.

La etiqueta ```<br>``` en HTML se utiliza para insertar un salto de línea (line break) dentro de un texto. A diferencia de otros elementos de bloque como ```<p>``` o ``<div>``, que crean un nuevo párrafo o sección, ``<br>`` simplemente rompe la línea actual y continúa el texto en la siguiente línea.

Características de ``<br>``:
Elemento vacío: No tiene contenido de apertura o cierre, por lo que se escribe solo como ``<br>``.

```js
var low = parseInt(prompt("valor minimo", 0));
var high = parseInt(prompt("valor maximo", 1));

if(low>high){
    console.log('Error. Rango Invalido');
}
else{
    document.write("<h3> Secuencia del " + low + " al numero " + high + "</h3>");
    for(let i=low; i<=high; i++){
        console.log(i);
        document.write(i+"<br>"); 👈     
    }
}
```

![](https://i.imgur.com/xfco6Wg.png)

El profe uso ``<br/>``


# 36 Ejercicio 4

Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario. Hacerlo con un while

## Solucion

- creamos un nuevo script *ejercicio_36.js* y en la etiqueta source de nuestro html lo relacionamos:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>ejercicio 3</title>
    <script type="text/javascript" src="./JS/ejercicio_36.js"></script> 👈
</head>
<body>
    <h1>Curso JS</h1>
    <p>primer script con JS</p>
</body>
</html>
```

Nota que el operador de modulo es el mismo que el de python.

```js
'use strict'

console.log("Ejercicio-36. Muestra los numeros impares entre un rango dado por el usuario")
var low = parseInt(prompt("valor minimo", 0));
var high = parseInt(prompt("valor maximo", 1));

while(low <= high){
    if(low%2 != 0){
        console.log(low);
        document.write(low + '<br>')
    }
    low++;
}
```
