# 68 BOM BROWSER OBJECT MODEL

El BOM (Browser Object Model) es un conjunto de objetos proporcionados por el navegador web que permiten interactuar con el entorno del navegador en el cual se ejecuta una página web. A diferencia del DOM (Document Object Model), que se centra en la estructura y contenido de la página web (como elementos HTML), el BOM se refiere a todo lo que rodea la página dentro del navegador.

Vamos adicionar un nuevo script que se va llamar *68-bom.js*

## Dimensiones de la Ventana

Los comandos console.log(window.innerHeight) y console.log(window.innerWidth) se utilizan para mostrar en la consola del navegador las dimensiones interiores de la ventana del navegador en píxeles.

```js
console.log(window.innerHeight);
console.log(window.innerWidth);
```
Tambien puedo usar:

```js
console.log(screen.height);
console.log(screen.width);
```

![image](https://i.imgur.com/k6hTnHE.png)

### ¿Porque la diferencia?

- screen.height: Retorna la altura total de la pantalla del dispositivo (en píxeles), incluyendo todas las áreas visibles y no visibles, como las barras de tareas o el dock.

- screen.width: Retorna el ancho total de la pantalla del dispositivo (en píxeles).

Estos valores representan el tamaño total de la pantalla física, es decir, la resolución completa de la pantalla del dispositivo.

- window.innerHeight: Retorna la altura del área visible de la ventana del navegador, es decir, el área donde se muestra el contenido de la página web, excluyendo elementos como las barras de herramientas del navegador o las barras de desplazamiento.

- window.innerWidth: Retorna el ancho del área visible de la ventana del navegador, excluyendo las barras de desplazamiento verticales, si las hay.

## window.location

El objeto window.location en JavaScript es parte del BOM (Browser Object Model) y representa la URL de la ventana del navegador. Este objeto permite acceder a la URL actual de la página web, modificarla, o redirigir al usuario a otra página.

Por ejemplo, para obtener la URL completa de la página actual.

```js
console.log(window.location.href);
```

Resultado:

    http://localhost:5500/68_BOM/


### Ejercicio

Usar la propiedad *location.href* para redirigirse a otra URL. 

```js
function redirect(url){
    window.location.href = url;
}
```
Y al usar la funcion en la consola:

    redirect('https://www.google.com/')

Nos redirigira a dicha URL.

### Ejercicio

Usar el mismo metodo anterior, para abrir una nueva pestaña

```js
function ventanita(url){
    window.open(url);
}
```

Si queremos abrir una nueva ventananita, pero con dimensiones especificas

````js
function ventanita(url){
    window.open(url, "", "width=400, height=300");
}
```
