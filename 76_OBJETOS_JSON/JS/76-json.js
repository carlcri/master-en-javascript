'use strict'

window.addEventListener('load',function(){
    var pet = {
        "name": "Bella",
        "type": "Dog",
        "age": 3,
        "breed": "Labrador Retriever"
    }

    var pets = [
        {
            "name": "Milo",
            "type": "Cat",
            "age": 2,
            "breed": "Siamese"
        },
        {
            "name": "Coco",
            "type": "Bird",
            "age": 1,
            "breed": "Parrot"
        },

        pet
    ];
    
    var mascotas = this.document.querySelector('#mascotas');
    pets.forEach(function(pet){
        let parrafo = document.createElement('p');
        parrafo.append(`${pet.name} is a ${pet.type} `);
        mascotas.append(parrafo);
    }) 

    this.localStorage.setItem("titulo", "victor robles  ")
})
