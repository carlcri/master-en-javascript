
//Variables y tipos de datos en TS

console.log('hola mundo ts ts');

let texto: string = 'abaco';
texto = 'pollo';

let edad: number = 123;
let es_joven: boolean = true;

let cualquier_valor: any = 'pollo';
cualquier_valor = 1234;

let frutas: Array<string> = ['pera', 'manzana']

let calificaciones: Array<number> = [1,2,3,4];
calificaciones[0] = 11;
console.log(calificaciones);


//multiples tipos de datos

let variable: string | number = 12;
variable = 'pollo';

// tipos de datos personalizados

type alfanumerico = string | number;

let contabilidad: alfanumerico = 'peras';
contabilidad = 123;


