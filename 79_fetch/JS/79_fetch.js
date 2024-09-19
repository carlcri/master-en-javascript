'use strict'

var usuarios = []
var usuarios_lista = document.querySelector('#usuarios-lista');
console.log(usuarios_lista.innerHTML)
// fetch('https://reqres.in/api/users?page=1')
//      .then(data => data.json())
//      .then(data => {
//           usuarios = data.data;
//           console.log(usuarios);
// })

// fetch('https://reqres.in/api/users?page=1')
//      .then(data => data.json())
//      .then(users => {
//           usuarios = users.data;
//           console.log(usuarios);
// })


fetch('https://reqres.in/api/users?page=1')
     .then(function(data) {
          return data.json();  // Convierte la respuesta a JSON
     })
     .then(function(users) {
          usuarios = users.data;  // Accede a la propiedad 'data'

          usuarios.forEach(function(element){
               let elemento_lista = document.createElement('li');
               elemento_lista.append(`${element.id}: ${element.first_name} ${element.email}`);
               usuarios_lista.append(elemento_lista);
          })
});



// for(item in usuarios){
//      console.log(item);
// }

// var aux = ['cat', 'dog']
// for(let item in aux){
//      console.log(item);
// }

// console.log(aux);
// console.log(typeof aux);
// console.log(Array.isArray(usuarios))