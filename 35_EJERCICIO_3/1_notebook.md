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

![](https://imgur.com/OL2RIxq.png)

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

![](https://imgur.com/xfco6Wg.png)

El profe uso ``<br/>``