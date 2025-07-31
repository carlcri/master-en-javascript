# Typescript y POO

Vamos por ahora a obviar todo el contenido relacionado con Jquery, cuando haya mas tiempo, lo continuaremos desarrollando.

1. Objetos JSON
2. Entorno de desarrollo
3. Primeros pasos TS
4. Variables y tipado
5. POO
6. Clases, metodos y propiedades
7. Constructores, interfaces y Herencia
8. Decoradores

# POO: paradigma de programacion

Forma de programar para estructurar mejor el codigo, usando clases. 

Typescript: 

- tipado fuerte
- desarrollado por Microsoft
- lenguaje interpretado
- extension `.ts`
- 85% JS normal

# Objetos JSON

Crear un objeto JSON:


```js
var bicicleta = {
    'color': 'red',
    'modelo': 'bmx',
}
```
al cual tambien le puedo agregar un metodo, de una forma o de otra:

```js
    cambiar_color: function(nuevo_color){
        bicicleta.color = nuevo_color;
    },

    cambiar_modelo: function(nuevo_modelo){
        this.modelo = nuevo_modelo
    }
```

Esta es una manera basica. Pero muy funcional

# Que es Typescript

TypeScript is JavaScript with syntax for types.

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

Se usa en Angular, React

# Instalar Node JS 

You will need a copy of `Node.js` as an environment to run the package. Then you use a dependency manager like `npm`.

`NPM` significa Node Package Manager (Gestor de Paquetes de Node). Es la herramienta estándar y por defecto que viene con Node.js y se usa para gestionar las dependencias (también conocidas como paquetes o librerías) de tus proyectos JavaScript.

## `NPM` es para JavaScript lo que `Pip` es para Python.

1. Ambos se usan para instalar, desinstalar y gestionar librerías o módulos de terceros en tus proyectos.

2. Ambos tienen un repositorio central donde se almacenan estos paquetes:

- NPM tiene el npm registry.

- Pip tiene PyPI (Python Package Index).

3. Ambos utilizan un archivo de configuración en la raíz de tu proyecto para listar las dependencias:

- NPM usa package.json.

- Pip usa requirements.txt (aunque hay otras opciones más modernas como pyproject.toml con Poetry o PDM).

## NPM vs NVM

Node Version Manager para un desarrollo mas serio:

`nvm -v` tengo la version 0.40.3

Instalemos una version de Node JS, pero al parecer tengo una ya instalada:

`which node`:

`/home/carlos/.nvm/versions/node/v18.13.0/bin/node`

Observa bien, y veras que dicha version de node, ya esta siendo gestionada por nvm.

### Instalando Node JS

`nvm install --lts`

y verificando:

`nvm --version`

Verificamos las versiones disponibles con:

`nvm ls`

![image](https://imgur.com/VGD0wz2.png)

### Instalando typescript

Now that you've confirmed Node.js version v22.17.1 is active, installing TypeScript is straightforward. You'll use NPM (Node Package Manager), which comes bundled with your Node.js installation.

`npm install --save-dev typescript`

`--save-dev`: This flag instructs NPM to add typescript to the devDependencies section of your project's package.json

Todo esto porque no quiero instalar typescript globalmente, sino relativo a este proyecto. 


### Hola mundo con TS

ir a `/home/carlos/Documents/master-en-javascript/142_typescript_poo`

y `npx tsc JS/hola_mundo.ts`

Generara un .js, que ese si lo incluyo en mi index.html. Cada vez que halla un cambio vuelvo a ejecutar el comando anterior.