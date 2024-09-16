'use strict'

// variables
var formulario = document.querySelector('#formulario-peliculas');
var peliculas_list = document.querySelector('#peliculas-list');
var formulario_borrar = document.querySelector('#formulario-peliculas-borrar');

// evento submit agregar
formulario.addEventListener('submit', function(){
     event.preventDefault();
     let titulo_pelicula = document.querySelector('#formulario-peliculas .titulo-pelicula').value;
     localStorage.setItem(titulo_pelicula, titulo_pelicula);
})


// evento submit borrar
formulario_borrar.addEventListener('submit', function(){
     event.preventDefault();
     let titulo_pelicula = document.querySelector('#formulario-peliculas-borrar .titulo-pelicula').value;
     localStorage.removeItem(titulo_pelicula);
})


// Mostrando en consola 
for(let i in localStorage){
     if(typeof localStorage[i] == 'string'){
          console.log(localStorage[i]);
     }

}


// Añadiendo Peliculas de acuerdo al metodo 2.
for(let i in localStorage){
     if(typeof localStorage[i]== 'string'){
          let li = document.createElement('li');
          li.append(localStorage[i]);
          peliculas_list.append(li);
     }
}


// Borrando peliculas

