'use strict'

// Anonymous function assigned to a variable
var myFunction = function() {
    console.log("This is an example of an anonymous function.");
};
  
// Invoking the anonymous function
myFunction();




// function saludar(nombre, callback) {
//     console.log("Hola, " + nombre);
//     callback(nombre);
// }

// function despedirse(nombre) {
//     console.log(`Adios ${nombre}`);
// }

// saludar("Juan", despedirse);


// function procesarDatos(datos, callback) {
//     let resultado = datos * 2;
//     callback(resultado);
// }

// function mostrarResultado(resultado) {
//     console.log(`El resultado ess: ${resultado} `);
// }

// procesarDatos(5, mostrarResultado);




// let frutas = ["manzana", "banana", "uva"];

// frutas.forEach(function(x){
//     console.log(`me gusta comer ${x}`);
// });


// function mostrar_fruta(fruta){
//     console.log(`Me gusta comer ${fruta}`);    
// }


// frutas.forEach(mostrar_fruta);

// let numbers = [1, 2, 3, 4];

// numbers.forEach(function(element){
//     console.log(element**2);
// })

//y = mx + b

// let numbers= [-3, -2, -1, 0, 1, 2, 3]

// let y = numbers.map(function(x){
//     return x*(-5)+10
// })

// console.log(y)





function f_x(number, callback){
    let result = 5*number;
    return callback(result);
}

function g_x(entrada){
    return entrada-5;
}


// let salida = f_x(-5, g_x)
// console.log(salida)

let values = [1, 3, 5, 7, 9]

let salida = values.map(function(value){
    return f_x(value, g_x)
})




















// let numbers = [1, 2, 3, 4];
// salida = numbers.map(function(number){
//     return f_x(number, g_x)
// })




