# 78 Ejercicio Completo Local Storage

## Borrando una Pelicula

La solución más recomendada es asegurarte de que los ``id`` sean únicos. Podrías cambiar los ``id`` a ``class``, ya que las clases pueden repetirse en varios elementos. Luego, puedes usar selectores más específicos:

```js
<h1>Añade tu pelicula</h1>
    <form action="" method="post" id="formulario-peliculas">
        <input type="text" name="titulo-pelicula" class="titulo-pelicula"> 👈
        <input type="submit" value="guardar pelicula" id="submit">
    </form>

...

    <h1>Borrar tu pelicula</h1>
    <form action="" method="post" id="formulario-peliculas-borrar">
        <input type="text" name="titulo-pelicula" class="titulo-pelicula"> 👈
        <input type="submit" value="borrar pelicula" id="submit">
    </form>
```

Y observa como estamos usando los selectores:

```js
// evento submit agregar
formulario.addEventListener('submit', function(){
     event.preventDefault();
     let titulo_pelicula = document.querySelector('#formulario-peliculas .titulo-pelicula').value; 👈
     localStorage.setItem(titulo_pelicula, titulo_pelicula);
})


// evento submit borrar
formulario_borrar.addEventListener('submit', function(){
     event.preventDefault();
     let titulo_pelicula = document.querySelector('#formulario-peliculas-borrar .titulo-pelicula').value; 👈
     localStorage.removeItem(titulo_pelicula);
})
```