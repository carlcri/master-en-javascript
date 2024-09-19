'use strict'

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
     return fetch('https://reqres.in/api/users?page=1');
}


function getUsuario(id){
     return fetch(`https://reqres.in/api/users/${id}`)
}


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


// getUsuario(1)
//     .then(response =>response.json())
//     .then(user => {
//           let usuario = user.data;
//           listadoUsuario(usuario);
//     })

