# 78 Ejercicio Completo Local Storaga

Crearemos un formulario muy sencillo que nos permita guardar peliculas en el local storage. 

```html
    <form action="" method="post" id="formulario-peliculas">
        <input type="text" name="titulo-pelicula" id="titulo-pelicula">
        <input type="submit" value="guardar pelicula" id="submit">
    </form>
```

```js
var formulario = document.querySelector('#formulario-peliculas');

// evento submit
addEventListener('submit', function(){
     event.preventDefault();
     let titulo_pelicula = this.document.querySelector('#titulo-pelicula').value;
     this.localStorage.setItem(titulo_pelicula, titulo_pelicula);
})
```

## Mostrando las peliculas en el HTML

Se realizo de dos formas:

```js
// Mostrando en consola lo del local storage metodo 1
for(let i=0; i < localStorage.length; i++){
     let clave = localStorage.key(i);
     let valor = localStorage.getItem(clave);
     console.log(clave, valor);
}

// Mostrando en consola lo del local storage metodo 2 
for(var i in localStorage){
     console.log(localStorage[i]);
}
```

La primera forma es mucho mas legible en consola. Aqui se muestra la segunda

![image](https://i.imgur.com/xLQ3YMo.png)

### Añadiendo las peliculas al documento html

Solo mostraremso el segundo metodo, tener en cuenta estamos validando que solo si la informacion en local storage es un sring.

```js
for(let i in localStorage){
     if(typeof localStorage[i]== 'string'){
          let li = document.createElement('li');
          li.append(localStorage[i]);
          peliculas_list.append(li);
     }
}
```

## Borrando una Pelicula

Lo continuaremos en la segunda parte

