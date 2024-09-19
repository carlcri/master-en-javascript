# 79 Fetch 1

Aprovechando los tiempos de carga, mostrar un mensaje de cargando, que luego desaparecera una vez carguen los datos.

Dentro de un span, colocar el mensaje de *cargando datos*, con una clase *loading*

```html
<body>
    <h1>Users List</h1>
    <span class="loading">cargando datos</span>
    <div id="usuarios">
        <ul id="usuarios-lista">  </ul>
    </div>
    <!-- Scripts -->
    <script src="./JS/79_fetch_1.js"></script>
</body>
```

La Clase *loading* le aplicaremos un *display none* para que se oculte, una vez se complete la peticion:

```js
          document.querySelector('.loading').style.display = 'none'; // se oculta el elemento 👈

          usuarios.forEach(function(element){
               let elemento_lista = document.createElement('li');
               elemento_lista.append(`${element.id}: ${element.first_name} ${element.email}`);
               usuarios_lista.append(elemento_lista);
```

tambien se hubiera podido hacer asi:

     var mensaje_carga = document.querySelector('.loading');
     ...
     mensaje_carga.style.display = 'none'; 


