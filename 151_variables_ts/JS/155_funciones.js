console.log('hola tipado fuerte');
var nombre = 'andres';
function get_number(my_number) {
    if (my_number === void 0) { my_number = 23; }
    return "el numero es ".concat(my_number);
}
var aux = get_number();
console.log(aux);
