# 71 LOAD

¿Te acuerdas cuando colocaptos la etiqueta scrips en el *head*, y porque no habia cargado la pagina, no ejecutaba los scripts? Pues hay un evento que nos puede ayudar

## Evento load

se dispara cuando todos los elementos del DOM estan cargados. 

```js
window.addEventListener('load', function(){
    
})
```

Observa el script *71_load.js*

De esta forma se pueden colocar los scripts en el head donde algunos recomiendan colocarlos. 