# 80 Promesas

Una promesa en JavaScript es una estructura que maneja operaciones asíncronas. Te promete un resultado futuro y te permite definir lo que ocurrirá cuando la operación termine (ya sea con éxito o con un error).

``fetch`` devuelve un objeto de tipo promesa. Para demostrarlo, podemos hacer que el resultado de la llamada a fetch sea registrado directamente en la consola antes de usar los métodos then.

```js
let promesa = fetch('https://reqres.in/api/users?page=1');
console.log(promesa);
```
Esto imprimirá un objeto de tipo ``Promise`` en la consola: 

![imagen](https://i.imgur.com/rlawvdk.png)

### ¿Qué hace que una promesa sea útil?

Las promesas son útiles porque te permiten escribir código que espera a que una operación asíncrona termine antes de continuar, sin bloquear el flujo principal del programa. Te permiten manejar operaciones asíncronas de una manera más legible y organizada.

Cuando usas ``fetch``, haces una solicitud de datos a un servidor. El navegador promete que cuando los datos estén disponibles, podrás trabajar con ellos. Mientras tanto, tu programa puede seguir ejecutándose sin bloquearse. Cuando los datos finalmente llegan (promesa cumplida), el navegador ejecuta el código dentro de ``then``. 

Si hay un error (promesa rechazada), puedes manejarlo con ``catch``.

### Reescribiendo el codigo 

Reescribiendo para hacerlo mucho mas legible con funciones flecha, que poco a poco las entendemos mas, y con una terminologia mas adecuada. Y con funciones, dandole asi mas legibiliad:

```js
var promesa = fetch('https://reqres.in/api/users?page=1');

function listadoUsuarios(usuarios){
     let  usuarios_lista = document.querySelector('#usuarios-lista');
     usuarios.forEach(function(element){
          let elemento_lista = document.createElement('li');

          elemento_lista.append(`${element.id}: ${element.first_name} ${element.email}`);
          usuarios_lista.append(elemento_lista);
     })
}


promesa
    .then(response => response.json()) 👈
    .then(users =>{
          document.querySelector('.loading').style.display = 'none'; 
          let usuarios = users.data;
          listadoUsuarios(usuarios);
    })
```

Vamos a modificar ligeramente el codigo, creando una funcion que se llame *getUsuarios*, y otra funcion *getUsuario*, que devuele el usuario de acuerdo al ``id``.

Recuerda *getUsuarios* y *getUsuario* devuelve un objeto tipo *Promise*. 

```js
function listadoUsuarios(usuarios){
     let  usuarios_lista = document.querySelector('.usuarios-lista');
     usuarios.forEach(function(element){
          let elemento_lista = document.createElement('li');

          elemento_lista.append(`${element.id}: ${element.first_name} | ${element.email}`);
          usuarios_lista.append(elemento_lista);
     })
}

function listadoUsuario(usuario){
     let  usuario_id= document.querySelector('#usuario');

     let parrafo = document.createElement('p');
     parrafo.append(`${usuario.id}: ${usuario.first_name} | ${usuario.email}`)
     usuario_id.appendChild(parrafo);
}

// devuelve un objeto de tipo Promise
function getUsuarios(){👈
     return fetch('https://reqres.in/api/users?page=1');
}


function getUsuario(id){ 👈
     return fetch(`https://reqres.in/api/users/${id}`)
}


getUsuarios()
    .then(response => response.json())
    .then(users =>{
          document.querySelector('.loading').style.display = 'none'; 
          let usuarios = users.data;
          listadoUsuarios(usuarios);
    })


getUsuario(1)
    .then(response =>response.json())
    .then(user => {
          let usuario = user.data;
          listadoUsuario(usuario);
    })
```

Igualmente realizamos las modificaciones en el HTML para visualizar el usuario, y agregar la funcion 

## Ejercicio

Modificar el codigo para que una vez se tenga el listado de los usuarios, muestre el usuario especifico de acuerdo a la peticion *getUsuario*. 

```js
getUsuarios()
    .then(response => response.json())
    .then(users =>{
          document.querySelector('.loading').style.display = 'none'; 
          let usuarios = users.data;
          listadoUsuarios(usuarios);

          return getUsuario(1) 👈 // devuelve un objeto tipo Promise que se usa en el siguiente then
    })
    .then(response =>response.json())
    .then(user => {
          document.querySelector('.loading').style.display = 'none';  
          let usuario = user.data;
          listadoUsuario(usuario);
     })
```

Como ves, se van encadenando unos then con los siguientes y asi sucesicamente. 

### Ejercicio

Modificar el codigo para agregar una foto del usuario. Hay un campo dentro de cada usuario que es avatar, donde esta la fotico.

```js
function listadoUsuario(usuario){
     let  usuario_id= document.querySelector('#usuario');

     let parrafo = document.createElement('p');
     parrafo.append(`${usuario.id}: ${usuario.first_name} | ${usuario.email}`)
     usuario_id.appendChild(parrafo);

     // inserta la foto
     let imagen = document.createElement('img') 👈
     imagen.src = usuario.avatar;
     usuario_id.appendChild(imagen);
}
```

## Resumen

```js
getUsuarios()
    .then(response => response.json())
    .then(users =>{
          document.querySelector('.loading').style.display = 'none'; 
          let usuarios = users.data;
          listadoUsuarios(usuarios);

          return getUsuario(1)
    })
    .then(response =>response.json())
    .then(user => {
          document.querySelector('#usuario .loading').style.display = 'none'; 
          let usuario = user.data;
          listadoUsuario(usuario);
          console.log(usuario.avatar)
     })
```


1. **fetch**: Hace solicitudes HTTP y devuelve una promesa.

2. **Promesa**: Representa la eventual finalización o fracaso de una operación asíncrona. En este caso, las promesas son utilizadas para manejar las respuestas de las solicitudes HTTP.

3. **then**: Se usa para manejar la resolución de la promesa. Permite encadenar operaciones que dependen del resultado de la promesa anterior.

**Conclusión**: El código ilustra cómo manejar múltiples operaciones asíncronas secuenciales usando promesas. Primero, obtiene una lista de usuarios, muestra esos usuarios en la interfaz, luego, obtiene y muestra información detallada de un usuario específico. Cada paso espera a que el anterior se complete antes de proceder, utilizando ``then`` para encadenar las operaciones.