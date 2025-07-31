console.log('hola tipado fuerte');

let nombre: string = 'andres';


function get_number(my_number:number = 23):string{
    return `el numero es ${my_number}`;
}

let aux:string = get_number();
console.log(aux);