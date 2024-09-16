'use strict'

// variables
var formulario = document.querySelector('#formulario-peliculas');
var peliculas_list = document.querySelector('#peliculas-list');
var formulario_borrar = document.querySelector('#formulario-peliculas-borrar');

// evento 
formulario.addEventListener('submit', function(){
     event.preventDefault();
//     console.log('guardando pelicula');
     let titulo_pelicula = document.querySelector('#titulo-pelicula').value;
     localStorage.setItem(titulo_pelicula, titulo_pelicula);
})


formulario_borrar.addEventListener('submit', function(){
     event.preventDefault();
//     console.log('guardando pelicula');
     let titulo_pelicula = document.querySelector('#titulo-pelicula').value;
     localStorage.setItem(titulo_pelicula, titulo_pelicula);
})



// Mostrando en consola lo del local storage metodo 1
for(let i=0; i < localStorage.length; i++){
     let clave = localStorage.key(i);
     let valor = localStorage.getItem(clave);
     console.log(clave, valor);
}

// Mostrando en consola lo del local storage metodo 2 
for(let i in localStorage){
     console.log(localStorage[i]);
//     console.log(typeof(localStorage[i]))
}

// Añadiendo pelicuals de acuerdo al metodo 1
for(let i=0; i < localStorage.length; i++){
     let clave = localStorage.key(i);
     let valor = localStorage.getItem(clave);

     let li = document.createElement('li');
     li.append(`${valor}`);
     peliculas_list.append(li);
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

