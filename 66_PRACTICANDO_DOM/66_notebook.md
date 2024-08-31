# 66 PRACTICANDO CON EL DOM

A uno de los divs, le agregaremos clases, una llamada *gato*, y otra llamada *perro*:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Practicando</title>
</head>
<body>
    <h1>Curso JavaScript victorroblesweb.es</h1>

    <h2>Mi Seccion</h2>
    <section id="mysection">
        <!-- <hr> -->
    </section>

    <div id="mi-caja">Hola soy una caja</div>
    <div class="loro">Soy el primer div</div>
    <div class="gato">Soy el segundo div</div>
    <div class="perro">Soy el tercer div</div>
    <div class="loro">Soy el cuarto div</div>
    <div class="gato">Soy el quinto div</div>
    <div class="perro">Soy el sexto div</div>
    <div class="perro">Soy el septimo div</div>

    <!--scripts-->
    <script type="text/javascript" src="./JS/66-practica.js"></script>
</body>
</html>
```

## Ejercicio

Ubicar todos los elementos HTML que sean de la clase perro, y cambiarles el color. 

Se hicieron todos los ejercicios y la verdad, quede un poco desencantado con el *getElementsByClassName*. Primero la explicacion del instructor esta enredada, y segundo la funcionalidad de autocompletar me sugeria algo que no tenia sentido, y muy molesto 😒

Por otra parte el *querySelectorAll* y los callbacks salvaron el dia, y Visual Studio code autocompletaba con algo que si tenia sentido. 😀