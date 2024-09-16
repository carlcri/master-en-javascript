# 78 Ejercicio Completo Local Storage

## Borrando una Pelicula

```html
<body>
    <h1>Añade tu pelicula</h1>
    <form action="" method="post" id="formulario-peliculas">
        <input type="text" name="titulo-pelicula" id="titulo-pelicula"> 👈
        <input type="submit" value="guardar pelicula" id="submit">
    </form>

    <h2>
        <div id="peliculas">
            <ul id="peliculas-list">
                <li>Rapido y Furioso</li>
            </ul>
        </div>
    </h2>

    <h1>Borrar tu pelicula</h1>
    <form action="" method="post" id="formulario-peliculas-borrar">
        <input type="text" name="titulo-pelicula" id="titulo-pelicula"> 👈
        <input type="submit" value="borrar pelicula" id="submit">
    </form>

    <!-- Scripts -->
    <script src="./JS/78-completo.js"></script>
</body>
```
Observa que tenemos dos formularios, donde en ambos existe una etiqueta input, con el mismos id. ¿COmo hacemos para diferenciar uno del otro?

Podemos usar el *querySelector* en el contexto de los formularios, por ejemplo con dos ids:

```js
formulario.addEventListener('submit', function(){
     event.preventDefault();
     let titulo_pelicula = document.querySelector('#formulario-peliculas #titulo-pelicula').value; 👈
     localStorage.setItem(titulo_pelicula, titulo_pelicula);
})


// evento submit borrar
formulario_borrar.addEventListener('submit', function(){
     event.preventDefault();
     let titulo_pelicula = document.querySelector('#formulario-peliculas-borrar #titulo-pelicula').value; 👈
     localStorage.removeItem(titulo_pelicula);
})
```





