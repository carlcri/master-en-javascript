# 81 Como Crear Promesas 1

Continuar modificando el codigo de acuerdo a lo explicado por el profesor. 

- Se encapsulo la logica de la PROMISE en la funcion get_info

```js
function getInfo(){
     let profesor_string = JSON.stringify(profesor);

     return new Promise(resolve => { // Create and return a new Promise
          setTimeout(() => {
               return resolve(profesor_string); // Resolve it after the delay
          }, 3000); // 3 seconds
     });
}
...
...
getUsuarios()
    .then(response => response.json())
    .then(users =>{
          document.querySelector('.loading').style.display = 'none'; 
          let usuarios = users.data;
          listadoUsuarios(usuarios);

          return getUsuario(2)
    })
    .then(response =>response.json())
    .then(user => {
          document.querySelector('#usuario .loading').style.display = 'none'; 
          let usuario = user.data;
          listadoUsuario(usuario);
          console.log(usuario.avatar);

          return getInfo(); 👈

     })
     .then(data => console.log(`datos profesor 1 ${data}`))

```
### Ejercicio

Modificar el flujo de las promesas, de tal forma que muestre la lista de usuarios primero, espere tres segundos, y luego muestre la informacion del profeson primero, y posteriormente la de la funcion 'get_usuario'

SOL

```js
getUsuarios()
    .then(response => response.json())
    .then(users =>{
          document.querySelector('.loading').style.display = 'none'; 
          let usuarios = users.data;
          listadoUsuarios(usuarios);

          return getInfo(); 👈
    })
     .then(data => {
          console.log(`datos profesor 2 ${data}`); 👈
          return getUsuario(1);
     })
     .then(response =>response.json())
     .then(user => {
          document.querySelector('#usuario .loading').style.display = 'none'; 
          let usuario = user.data;
          listadoUsuario(usuario);
          console.log(usuario.avatar);
     })
```

### Ejercicio

Mostrar los datos del profesor dentro del documento HTML


```html
    <div id="profesor">
        <p>cargando profesor...</p>
    </div>
```


```js
function getInfo(){
     let profesor_string = JSON.stringify(profesor);
     let div_profesor = document.querySelector('#profesor')
//     console.log(div_profesor.innerHTML)

     return new Promise(resolve => { // Create and return a new Promise
          setTimeout(() => {
               div_profesor.innerHTML = profesor_string;
               return resolve(profesor_string); // Resolve it after the delay
          }, 2000); // 3 seconds
     });
}
```