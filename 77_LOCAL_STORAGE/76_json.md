# LOCAL STORAGE

Local Storage en JavaScript es una forma de almacenar datos en el navegador del usuario de manera persistente, es decir, los datos no se eliminan al cerrar la pestaña o el navegador (a diferencia de Session Storage, que se borra al cerrar la pestaña).

 Local Storage es una característica del navegador, lo que significa que cualquier lenguaje que pueda ejecutarse en el contexto del navegador y tenga acceso al API del navegador puede interactuar con Local Storage. JavaScript es el lenguaje principal para manipular Local Storage en la web, ya que es el lenguaje nativo de los navegadores

Capacidad de almacenamiento: Puedes almacenar hasta 5-10 MB de datos dependiendo del navegador, pero solo se pueden guardar cadenas de texto (strings). Si quieres almacenar objetos, primero debes convertirlos a formato JSON.

### ¿Como saber si el Local Storage esta disponible

Verificando si el navegador del usuario es compatible con la API de Web Storage, que incluye Local Storage y Session Storage.

- Si el navegador admite Web Storage, typeof(Storage) devolverá `object`.
Si el navegador no lo admite (es decir, es muy antiguo o está deshabilitado), devolverá ``undefined``.

```js
   if(typeof(Storage) != 'undefined'){
        console.log('Local Storage Disponible')     
   }
```

### Administrando la memoria

En la consola del navegador ir a *aplication*:

![imagen](https://i.imgur.com/4y1oNpG.png)

Y de ahi a almacenamiento local

![image](https://i.imgur.com/0vU7k0h.png)

### Guardar datos en el local storage

Es muy facil, primero la clave y luego el valor:

```js
localStorage.setItem("titulo", "cien años de soledad");
```

### Ejercicio

Añadir al documento html:

- El titulo del libro guardada en el local storage:
- El autor

```js
window.addEventListener('load',function(){
   if(typeof(Storage) != 'undefined'){
        console.log('Local Storage Disponible')     
   }

   // guardo datos local storage
   localStorage.setItem("titulo", "cien años de soledad");
   localStorage.setItem("autor", "GABO");

   //recuperar datos del local storage
   var titulo = this.localStorage.getItem("titulo");
   console.log(`titulo: ${titulo}`);


   //visualizando en el documento html el titulo
   var libros = this.document.querySelector('#libros'); 👈
   libros.innerHTML = titulo;

   this.document.querySelector('#autores').innerHTML = this.localStorage.getItem('autor'); 👈
})
```

### Gaurdando Objetos

```js
   var usuario = {
        first_name: 'Victor',
        last_name: 'Robles',
        email: 'vrobles@web.com'
   }

   this.localStorage.setItem("usuario", usuario);
```
No has guardado los datos correctamente. El problema es que el método localStorage.setItem solo acepta valores en formato cadena de texto (string), pero estás intentando guardar un objeto JavaScript directamente, lo cual es posible, pero generara problemas.

Para almacenar un objeto en localStorage, necesitas convertir el objeto a una cadena JSON usando ``JSON.stringify()`` antes de guardarlo:

#### Guardando Objetos Correctamente

    this.localStorage.setItem("usuario", JSON.stringify(usuario));

Y para recuperarlos, tener en cuenta que se guardaron como cadena de texto, y se necesita convertirlos nuevamente a un objeto:

```js
   var objeto = JSON.parse(this.localStorage.getItem('usuario'));
   console.log(objeto.first_name, objeto.last_name, objeto.email);
```

#### Mostrando el objeto en el documento html

```js
this.document.querySelector('#datos').append(`hello ${objeto.first_name} ${objeto.last_name} your email is ${objeto.email}`);
```


