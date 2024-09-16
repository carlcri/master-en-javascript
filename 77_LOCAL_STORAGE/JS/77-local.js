'use strict'

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
   var libros = this.document.querySelector('#libros');
   libros.innerHTML = titulo;

   this.document.querySelector('#autores').innerHTML = this.localStorage.getItem('autor');

   // Guardando objeto Correctamente
   var usuario = {
        first_name: 'Victor',
        last_name: 'Robles',
        email: 'vrobles@web.com'
   }

   this.localStorage.setItem("usuario", JSON.stringify(usuario));
   console.log(this.localStorage.getItem("usuario"));

   // Recuperar Objeto 
   var objeto = JSON.parse(this.localStorage.getItem('usuario'));
   console.log(objeto.first_name, objeto.last_name, objeto.email);

   // Visualizando el objeto en html
   this.document.querySelector('#datos').append(`hello ${objeto.first_name} ${objeto.last_name} your email is ${objeto.email}`);
})