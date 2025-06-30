# Integrar JQuery

Instalando y descargando Jquery en nuestra:

Ir a *https://jquery.com/* o *https://releases.jquery.com/jquery/* y descargarlo. podemos descargar cualquiera, para proposito del curso la 3.3.1

![image](https://imgur.com/W5iRvuB.png)

Podemos copiar el enlace e integrarlo dentro de una etiqueta `script` dentro del html.

Para Probar que esta funcionando, este simple codigo en un nuevo scritp de de JS:

```js
$(document).ready(function(){
    console.log('Jquery ha cargado')
})
```

La otra forma es guardar el script directamente en nuestro proyecto, para no llamar a un CDN externo, lo descargamos.

# Versiones

jQuery ha evolucionado a lo largo de sus versiones para adaptarse a las necesidades del desarrollo web moderno y a los avances en los estándares de JavaScript y los navegadores. Aquí te presento las principales diferencias y por qué la versión 1.x pudo considerarse "pesada" en su momento:

## jQuery 1.x: El Pionero con Amplia Compatibilidad
jQuery 1.x fue la versión que popularizó enormemente la biblioteca. Su principal característica y lo que la hacía "pesada" (entre comillas) era su amplia compatibilidad con navegadores antiguos, incluyendo versiones muy viejas de Internet Explorer (IE6, IE7, IE8).

### ¿Por qué era "pesada"?
Para lograr esta compatibilidad universal, jQuery 1.x incluía una gran cantidad de código "boilerplate" (código repetitivo y de soporte) para normalizar el comportamiento del DOM y las APIs de JavaScript entre los diferentes navegadores. Cada navegador tenía sus propias peculiaridades y bugs, y jQuery se encargaba de abstraer todas esas inconsistencias. Esto significaba:

- Más código: El archivo de la biblioteca era más grande porque tenía que incluir soluciones para cada navegador.

- Más sobrecarga: El motor de JavaScript del navegador tenía que procesar más código, incluso si no se utilizaban todas las funciones, o si el navegador moderno no necesitaba la compatibilidad para IE6.

- Pollyfills y shims: Incluía una gran cantidad de "pollyfills" (código que implementa una funcionalidad si no está disponible en el navegador) y "shims" (código que ajusta el comportamiento de una API existente) para garantizar que el código funcionara igual en todos los entornos.

En su época, esto era una ventaja enorme porque simplificaba el desarrollo web al máximo, permitiendo a los desarrolladores escribir "menos código y hacer más" sin preocuparse por las diferencias entre navegadores. Sin embargo, a medida que los navegadores modernos mejoraron y adoptaron estándares, gran parte de ese código de compatibilidad se volvió innecesario.

## jQuery 2.x: Adiós al Pasado (IE viejos)
jQuery 2.x marcó un punto de inflexión. La principal diferencia y razón de su existencia fue la eliminación del soporte para navegadores antiguos, especialmente Internet Explorer 6, 7 y 8.

Características principales:

- Más ligero y rápido: Al deshacerse del código de compatibilidad para los navegadores obsoletos, el tamaño del archivo de jQuery se redujo significativamente. Esto resultaba en una carga y ejecución más rápidas, mejorando el rendimiento en los navegadores modernos.

- Enfoque en navegadores modernos: Se centró en explotar las características y APIs más recientes de los navegadores, lo que permitía una implementación más limpia y eficiente de las funcionalidades de jQuery.

- API consistente: Aunque no se añadieron muchas características nuevas de forma masiva en comparación con la rama 1.x, la API se mantuvo en gran medida consistente, facilitando la migración para muchos proyectos que ya no necesitaban soportar IE antiguos.

La idea era ofrecer una versión optimizada para el presente (en ese momento), mientras que la rama 1.x se mantenía para quienes aún necesitaban la compatibilidad legada.

## jQuery 3.x: Modernización y Limpieza
jQuery 3.x es la versión más reciente y activa de la biblioteca, y continúa la filosofía de modernización de la versión 2.x, pero con un enfoque más profundo en la limpieza del código, la adopción de nuevas características de JavaScript (ES6+), y la mejora de la robustez y la seguridad.

Características principales:

- "Strict mode" por defecto: Ejecuta el código en "modo estricto" de JavaScript por defecto, lo que ayuda a escribir un código más limpio y a detectar errores más fácilmente.

- Manejo de promesas: Los métodos asíncronos (como AJAX) se actualizaron para ser compatibles con el estándar Promises/A+, utilizando `.then()` y `.catch()` para un mejor manejo de errores y encadenamiento de operaciones.

- Deprecaciones y eliminaciones: Se eliminaron y se marcaron como obsoletas algunas APIs que ya eran redundantes o estaban mejor implementadas de forma nativa en los navegadores (por ejemplo, jQuery.parseJSON() en favor de JSON.parse()). Esto contribuye a un código más pequeño y mantenible.

- Mejoras de rendimiento: Continuas optimizaciones internas para mejorar el rendimiento, especialmente en la manipulación del DOM y los cálculos de dimensiones.

- Manejo de errores más robusto: Mejoras en la forma en que se manejan las excepciones en los callbacks y en las operaciones asíncronas.

- Flexibilidad para migrar: Se introdujo un paquete jQuery-Compat para aquellos que necesitaban una ruta de migración más suave desde la rama 1.x, manteniendo algunas de las funcionalidades obsoletas.

En resumen, mientras que jQuery 1.x priorizaba la compatibilidad con navegadores antiguos, volviéndose "pesado" por el código extra que eso implicaba, jQuery 2.x se deshizo de ese lastre para ser más ligero y rápido en navegadores modernos. jQuery 3.x lleva esta evolución un paso más allá, adoptando las características más recientes de JavaScript y realizando una limpieza más profunda del código para ser aún más eficiente y alineado con los estándares actuales.
