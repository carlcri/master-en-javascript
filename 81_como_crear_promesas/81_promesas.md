# 81 Como Crear Promesas

## Ejercicio

Dado el objeto `profesor` que se muestra a continuacion:

```js
var profesor = {
     'name': 'Victor',
     'lastname': 'Robles',
}
```

Visualizarlos una vez se haya terminado de cargar la imagen, usando un delay de 3 segundos con
`SetTimeout`.

SOL

Una forma de hacerlo seria:

```js
function getInfo(){
     let profesor_string = JSON.stringify(profesor);
     return profesor_string
}
...
...
getUsuarios()
    .then(response => response.json())
    .then(users =>{
          document.querySelector('.loading').style.display = 'none'; 
          let usuarios = users.data;
          listadoUsuarios(usuarios);

          return getUsuario(2)
    })
    .then(response =>response.json())
    .then(user => {
          document.querySelector('#usuario .loading').style.display = 'none'; 
          let usuario = user.data;
          listadoUsuario(usuario);
          console.log(usuario.avatar);

          const profesorData = getInfo(); // Get data immediately 👈
          return new Promise(resolve => { // Create and return a new Promise
              setTimeout(() => {
                  resolve(profesorData); // Resolve it after the delay
              }, 3000); // 3 seconds
          });

     })
     .then(data => console.log(`datos profesor ${data}`))
```
Despues de tres segundos aparecerna los datos de Victor Robles en la consola. Como vez, hay varias cosas que no entiendes, asi que las voy a explicar

### Cómo Funciona el "Delay" con setTimeout
En JavaScript, setTimeout es una función global que te permite ejecutar una función una vez, después de un cierto retraso en milisegundos.

Su sintaxis básica es:

```js
setTimeout(funcionAEjecutar, tiempoDeEsperaEnMilisegundos);
```

Cuando escribimos:

```js
setTimeout(() => {
    resolve(profesorData);
}, 3000); // 3000 milisegundos = 3 segundos
```

- `setTimeout` no bloquea: Lo más importante es entender que setTimeout es una función asíncrona. Cuando JavaScript llega a esta línea, no se detiene y espera 3 segundos. En su lugar, le dice al navegador: "Oye, en 3 segundos, cuando tengas un momento libre, ejecuta esta función". Inmediatamente después de llamar a setTimeout, el código de tu programa continúa ejecutándose con la siguiente línea.

- La función de callback: La función `() => { resolve(profesorData); }` es lo que se conoce como una función de callback. Es la función que `setTimeout` ejecutará después de que transcurra el tiempo especificado.

- El retraso: El `3000` indica que el `callback` se ejecutará 3000 milisegundos (3 segundos) después de que `setTimeout` sea llamado.


Entonces, cuando tu cadena de Promesas llega a este punto, JavaScript inicia la cuenta regresiva de 3 segundos para el `setTimeout` y, si no fuera por la `Promise` que lo envuelve, el siguiente `.then()` se ejecutaría inmediatamente.


#### ¿Qué es una Promise y Por Qué la Usamos Aquí?
Una Promise (Promesa) en JavaScript es un objeto que representa la eventual completación o fracaso de una operación asíncrona, y su valor resultante.

Piénsalo como una promesa en la vida real:

- Alguien te hace una promesa (ej: "Te enviaré la foto en un momento").

- En ese momento, la promesa está pendiente (pending). Aún no sabes si se cumplirá o no.

- Más tarde, la promesa se cumple (fulfilled/resolved) con un resultado (la foto llega), o se rechaza (rejected) con un error (la foto nunca llega porque hubo un problema).

- Una vez que la promesa se cumple o se rechaza, es resuelta (settled). Ya no puede volver a cambiar de estado.

#### Por Qué Usamos una Promise para el delay

Tu cadena de `.then()`s funciona porque cada `.then()` espera que la *Promesa* devuelta por el `.then()` anterior se resuelva.

##### El problema sin la Promise:

Si simplemente hubiéramos puesto `setTimeout` dentro del cuarto `.then()` y luego intentado que el siguiente `.then()` esperara:

```js
.then(user => {
    // ...
    setTimeout(() => {
        console.log(`datos profesor ${getInfo()}`);
    }, 3000);
    // return ??? // ¿Qué devolverías aquí para que el siguiente .then espere el setTimeout?
})
.then(data => { /* Este then se ejecutaría INMEDIATAMENTE, no después del setTimeout */ });
```
`setTimeout` no devuelve una `Promise`. Si no devolvemos una `Promise` explícitamente desde este `.then()`, la cadena de promesas consideraría este `.then() `como "terminado" inmediatamente después de llamar a `setTimeout`, y el siguiente `.then()` se ejecutaría sin esperar el retraso.
