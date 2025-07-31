# Variables y tipos de datos en TS

![image](https://imgur.com/GVdAb7n.png)

generara un error:

![image](https://imgur.com/6bdwBTt.png)

tenemos number, string, boolean

## ANY

el tipo de dato ANY, permite cualquier valor. Para no usar el tipado fuerte

## arreglo 

Un arreglo de solo tipo string, o number.

# Compilacion

Cada vez que hago un cambio, pues debo compilarlo con `npx tsc JS/hola_mundo.ts`  para que tome los cambios. Un proces engorroso.

Usamos el comando con la bandera `watch`:

`npx tsc --watch JS/hola_mundo.ts`

Incluso la podriamos hacer mas general para mirar todos los archivos cuya extension sea `.ts`:

`npx tsc --watch JS/*.ts`


# Multiples tipos de datos

Con el operador pipe.

```js
let variable: string | number = 12;
variable = 'pollo';
```

# Tipos de datos personalizados

con la palabra reservada `type`:

```js
type alfanumerico = string | number;

let contabilidad: alfanumerico = 'peras';
contabilidad = 123;
```

# LET vs VAR en TS

let: a nivel de bloque
var: a nivel global


# Funciones y tipado fuerte.

se crea un nuevo script de *.ts*

```js
function get_number(my_number:number = 12){
    console.log(my_number);
}
```

- el tipo de dato que se recibe como parametro se puede y se debe especificar

```js
function get_number(my_number:number = 23):string{ 👈
    return `el numero es ${my_number}`;
}

let aux:string = get_number();
console.log(aux);
```
 - el tipo de dato que se retorna tambien se puede especificar, en este caso string