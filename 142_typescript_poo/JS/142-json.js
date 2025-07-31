'use strict';

console.log('hola hermano');

var bicicleta = {
    'color': 'red',
    'modelo': 'bmx',

    cambiar_color: function(nuevo_color){
        bicicleta.color = nuevo_color;
    },

    cambiar_modelo: function(nuevo_modelo){
        this.modelo = nuevo_modelo
    }
}

console.log(bicicleta.color, bicicleta.modelo);
bicicleta.cambiar_color('green');
bicicleta.cambiar_modelo('ruta');
console.log(bicicleta.color, bicicleta.modelo);

