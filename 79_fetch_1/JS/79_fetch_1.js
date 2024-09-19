'use strict'

var usuarios = []
var usuarios_lista = document.querySelector('#usuarios-lista');
var mensaje_carga = document.querySelector('.loading');

fetch('https://reqres.in/api/users?page=1')
     .then(function(data) {
          return data.json();  
     })
     .then(function(users) {
          usuarios = users.data;  
     
          // mensaje_carga.style.display = 'none'; // se oculta el elemento
          document.querySelector('.loading').style.display = 'none'; // se oculta el elemento

          usuarios.forEach(function(element){
               let elemento_lista = document.createElement('li');
               elemento_lista.append(`${element.id}: ${element.first_name} ${element.email}`);
               usuarios_lista.append(elemento_lista);
          })
});


