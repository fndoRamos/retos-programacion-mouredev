// ---ENUNCIADO
/*
 * ¿Preparad@ para aprender o repasar el lenguaje de programación que tú quieras?
 * - Recuerda que todas las instrucciones de participación están en el
 *   repositorio de GitHub.
 *
 * Lo primero... ¿Ya has elegido un lenguaje?
 * - No todos son iguales, pero sus fundamentos suelen ser comunes.
 * - Este primer reto te servirá para familiarizarte con la forma de participar
 *   enviando tus propias soluciones.
 *
 * EJERCICIO:
 * - Crea un comentario en el código y coloca la URL del sitio web oficial del
 *   lenguaje de programación que has seleccionado.
 * - Representa las diferentes sintaxis que existen de crear comentarios
 *   en el lenguaje (en una línea, varias...).
 * - Crea una variable (y una constante si el lenguaje lo soporta).
 * - Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...).
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 *
 * ¿Fácil? No te preocupes, recuerda que esta es una ruta de estudio y
 * debemos comenzar por el principio.
 */

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------

//---SOLUCIONES
/* 
- Crea un comentario en el código y coloca la URL del sitio web oficial del 
lenguaje de programación que has seleccionado.
*/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript

/* 
- Representa las diferentes sintaxis que existen de crear comentarios.
*/

//comnetarios en linea

/*
comentarios
multilinea
*/

/* 
- Crea una variable (y una constante si el lenguaje lo soporta).
*/

var miVariableVar = `Usamos var (antes de ES6) para declarar variables mutables.
                    Tiene scope goblal o de función/local, si declaramos la variable
                    fuera de una función tendremos acceso a ella de forma global, si
                    declaramos la variable dentro de una función solo tendremos acceso
                    a ella dentro de la función.
                    Puede ser declarada pero no asignarle valor, su valor por defecto es
                    undefined`

let miVariableLet = `Usamos let (ES6) para declarar variables mutables.
                    Tiene scope de bloque, solo tendremos acceso a la 
                    variable dentro de ese bloque de código.
                    Pueden ser declaradas pero no asignarle valor, no tiene valor por defecto`

const miVariableConst = `Usamos const (ES6) para declarar variables inmutables.
                        Tiene scope de bloque, solo tendremos acceso a la 
                        variable dentro de ese bloque de código.
                        Al ser declaradas es necesario asignarle un valor y éste no se puede
                        cambiar`

/*
- Crea variables representando todos los tipos de datos primitivos
del lenguaje (cadenas de texto, enteros, booleanos...).
*/

let miString = 'Hola mundo!' //String: una secuencia de caracteres usado para representar un texto.

let miNumber = 33 //Number: un número.

let miBigInt = 123456789012345678901234567890n //BigInt: para almacenar numeros enteros grandes, se crea agregando n al final del número.

let miBoolean = true //Boolean: un dato lógico que solo puede tener valor true o false.

let miUndefined = undefined //Undefined: se asigna cuando no tenemos un valor para esa variable.

let miNull = null //Null: se asigna cuando no queremos darle un valor a la variable.

let miSymbol = Symbol('my symbol') //Symbol: se utiliza para crear identificadores únicos para objetos.

/*
- Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 */

console.log('¡Hola, Javascript!')