'use strict'

// Free API Key
const REQRES_API_KEY = 'reqres-free-v1';

var profesor = {
     'name': 'Victor',
     'lastname': 'Robles',
}


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

     // inserta la foto
     let imagen = document.createElement('img')
     imagen.src = usuario.avatar;
     usuario_id.appendChild(imagen);
}


// devuelve un objeto de tipo Promise
function getUsuarios(){
     return fetch('https://reqres.in/api/users?page=2', {
          headers: {
               'x-api-key': REQRES_API_KEY
          }
     });
}


function getUsuario(id){
     return fetch(`https://reqres.in/api/users/${id}`, {
          headers: {
               'x-api-key': REQRES_API_KEY     
          }
     })
}


getUsuarios()
    .then(response => response.json())
    .then(users =>{
          document.querySelector('.loading').style.display = 'none'; 
          let usuarios = users.data;
          listadoUsuarios(usuarios);

          return getInfo();
    })
     .then(data => {
          console.log(`datos profesor 2 ${data}`);
          return getUsuario(1);
     })
     .then(response =>response.json())
     .then(user => {
          document.querySelector('#usuario .loading').style.display = 'none'; 
          let usuario = user.data;
          listadoUsuario(usuario);
          console.log(usuario.avatar);
     })
