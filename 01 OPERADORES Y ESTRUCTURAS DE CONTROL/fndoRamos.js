// ---ENUNCIADO
/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------

// ---SOLUCIONES
/*
- Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
(Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 */

//DECLARACIÓN DE VARIABLES PARA USAR EN EJEMPLOS
let x = 1
let y = 2

//OPERADORES DE ASIGNACIÓN:

// 1-Asignación: x = y es lo mismo que: x = y

    //ejemplo
    x = y // resultado: 2
    console.log('asignación:', x)

// 2-Asignación de adición: x += y es lo mismo que: x = x + y

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x += y // resultado: 3
    console.log('adición:', x)

// 3-Asignación de resta: x -= y es lo mismo que: x = x - y

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x -= y // resultado: -1
    console.log('resta:', x)

// 4-Asignación de multiplicación: x *= y es lo mismo que: x = x * y

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x *= y // resultado: 2
    console.log('multiplicación:', x)

// 5-Asignación de división: x /= y es lo mismo que: x = x / y

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x /= y // resultado: 0.5
    console.log('división:', x)

// 6-Asignación de residuo o modulo: x %= y es lo mismo que: x = x % y

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x %= y // resultado: 1
    console.log('residuo o modulo:', x)

// 7-Asignación de exponenciación: x **= y es lo mismo que: x = x ** y

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x **= y // resultado: 1
    console.log('exponenciación:', x)

// 8-Asignación de desplazamiento a la izquierda: x <<= y es lo mismo que: x = x << y

    //reset valores
    x = 5 // en binario: 101
    y = 2

    //ejemplo
    x <<= y // resultado: 101 -> 10100 -> 20
    console.log('desplazamiento a la izquierda:', x)

// 9-Asignación de desplazamiento a la derecha: x >>= y es lo mismo que: x = x >> y

    //reset valores
    x = -16 // en binario -10000
    y = 2

    //ejemplo
    x >>= y // resultado: -10000 -> -00100 -> -4
    console.log('desplazamiento a la derecha:', x)

// 10-Asignación de desplazamiento a la derecha sin signo: x >>>= y es lo mismo que: x = x >>> y

    //reset valores
    x = -16 // en binario 11111111111111111111111111110000
    y = 2

    //ejemplo
    x >>>= y // resultado: 11111111111111111111111111110000 -> 00111111111111111111111111111100 -> 1073741820
    console.log('desplazamiento a la derecha sin signo:', x)

// 11-Asignación AND bit a bit: x &= y es lo mismo que: x = x & y
// --compara bit a bit los números y devuelve 1 si y solo si ambos dígitos son 1

    //reset valores
    x = 5 // en binario: 101
    y = 3 // en binario: 011

    //ejemplo
    x &= y // resultado: 101 & 011 -> 001 -> 1
    console.log('AND bit a bit:', x)

// 12-Asignación XOR bit a bit: x ^= y es lo mismo que: x = x ^ y
// --compara bit a bit los números y devuelve 1 en los casos en que los dígitos sean diferentes

    //reset valores
    x = 5 // en binario: 101
    y = 3 // en binario: 011

    //ejemplo
    x ^= y // resultado: 101 ^ 011 -> 110 -> 6
    console.log('XOR bit a bit:', x)

// 13-Asignación OR bit a bit: x |= y es lo mismo que: x = x | y
// --compara bit a bit los números y devuelve 1 en caso de que uno de los dígitos sea 1

    //reset valores
    x = 5 // en binario: 101
    y = 3 // en binario: 011

    //ejemplo
    x |= y // resultado: 101 | 011 -> 111 -> 7
    console.log('OR bit a bit:', x)

// 14-Asignación AND lógico: x &&= y es lo mismo que: x && (x = y)
// --si la x de la izquierda es falsy(null, undefined, 0, false, '') no se le
// --asignará a x el valor de y, si es truthy se le asignará a x el valor de y.
// --este patrón se utiliza para asignarle un valor a x solo si x es truthy

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x &&= y // resultado: 2
    console.log('AND lógico:', x)

// 15-Asignación OR lógico: x ||= y es lo mismo que: x || (x = y)ç
// --si la x de la izquierda es truthy no se leerá la parte de la derecha y no
// --se le asignará el valor de y, si la x de la izquierda es falsy se leerá
// --la parte de la derecha y se le asignará a x el valor de y.
// --este patrón se utiliza para asignarle un valor a x solo si x es falsy

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x ||= y // resultado: 1
    console.log('OR lógico:', x)

// 16-Asignación de anulación lógica: x ??= y es lo mismo que: x ?? (x = y)
// --si la x de la izquierda es null o undefined se evaluará la parte de la derecha
// --y se le asignará a x el valor de y. en cualquier otro caso no se leerá la parte
// --de la derecha

    //reset valores
    x = null
    y = 2

    //ejemplo
    x ??= y // resultado: 2
    console.log('anulación lógica:', x)


//OPERADORES DE COMPARACIÓN

// 1-Igual: (==)
// --devuelve true si los operandos son iguales(independientemente del tipo de los operandos)

    //ejemplos
    console.log(3 == 3 )// true
    console.log('3' == 3) // true
    console.log(3 == 4) // false

// 2-No es igual: (!=)
// --devuelve true si los operandos no son iguales

    //ejemplos
    console.log(3 != 4) // true
    console.log(4 != '3') // true
    console.log(3 != '3') // false

// 3-Estrictamente igual: (===)
// --devuelve true si el valor y el tipo de los operandos son iguales

    //ejemplos
    console.log(3 === 3) // true
    console.log('Hola' === 'Hola') // true
    console.log(3 === '3') // false

// 4-Estrictamente no es igual: (!==)
// --devuelve true si los operandos son del mismo tipo pero no mismo valor,
// --o son de diferente tipo

    //ejemplos
    console.log(3 !== '3') // true
    console.log('Hola' !== 'hola') // true
    console.log(3 !== 3) // false

// 5-Mayor que: (>)
// --devuelve true si el operando izquierdo es mayor que el derecho

    //ejemplos
    console.log(5 > 3) // true
    console.log(12 > 5) // true
    console.log(3 > 5) // false

// 6-Mayor o igual que: (>=)
// --devuelve true si el operando izquierdo es mayor o igual que el derecho

    //ejemplos
    console.log(5 >= 3) // true
    console.log(3 >= 3) // true
    console.log(2 >= 3) // false

// 7-Menor que: (<)
// --devuelve true si el operando izquierdo es menor que el derecho

    //ejemplos
    console.log(3 < 5) // true
    console.log(2 < 3) // true
    console.log(50 < 10) // false

// 8-Menor o igual que: (<=)
// --devuelve true si el operando izquierdo es menor o igual que el derecho

    //ejemplos
    console.log(4 <= 4) // true
    console.log(1 <= 10) // true
    console.log(10 <= 8) // false


//OPERADORES ARITMÉTICOS

// 1-Suma: (+)

    //reset valores
    x = 1
    y = 2

    //ejemplo
    console.log('suma:', x + y) // resultado: 3

// 2-Resta: (-)

    //reset valores
    x = 1
    y = 2

    //ejemplo
    console.log('resta:', x - y) // resultado: -1

// 3-Multiplicación: (*)

    //reset valores
    x = 1
    y = 2

    //ejemplo
    console.log('multiplicación:', x * y) // resultado: 2

// 4-División: (/)

    //reset valores
    x = 1
    y = 2

    //ejemplo
    console.log('división:', x / y) // resultado: 0.5

// 5-Residuo o Modulo: (%)
// --devuelve el resto entero de dividir dos operandos

    //reset valores
    x = 1
    y = 2

    //ejemplo
    console.log('residuo:', x % y) // resultado: 1

// 6-Incremento: (++)
// --agrega uno a su operando
// --prefijo (++x) devuelve el valor de su operando después de agregar uno
// --sufijo (x++) devuelve el valor de su operando antes de agregar uno

    //reset valores
    x = 1
    y = 2

    //ejemplo
    console.log('incremento:', x++) // resultado: 1
    console.log(x) // resultado: 2
    console.log('incremento:', ++y) // resultado: 3

// 7-Decremento: (--)
// --resta uno a su operando
// --prefijo (--x) devuelve el valor de su operando después de restar uno
// --sufijo (x--) devuelve el valor de su operando antes de restar uno

    //reset valores
    x = 1
    y = 2

    //ejemplo
    console.log('decremento:', x--) // resultado: 1
    console.log(x) // resultado: 0
    console.log('decremento:', --y) // resultado: 1

// 8-Negación Unaria: (-)
// --devuelve la negación de su operando

    //reset valores
    x = 1
    y = 2

    //ejemplo
    console.log('negación unaria:', -x) //resultado -1

// 9-Positivo Unario: (+)
// --intenta convertir el operando a tipo número

    //reset valores
    x = '1'
    y = 2

    //ejemplo
    console.log('positivo unario:', +x) // resultado 1
    console.log('positivo unario:', +true) // resultado 1

// 10-Exponenciación: (**)

    //reset valores
    x = 2
    y = 3

    //ejemplo
    console.log('exponenciación:', x ** y) // resultado 8


//OPERADORES BINARIOS

// 1-AND a nivel de bits: x & b
// --compara bit a bit los números y devuelve 1 si y solo si ambos dígitos son 1

    //reset valores
    x = 5 // en binario: 101
    y = 3 // en binario: 011

    //ejemplo
    x = x & y // resultado: 101 & 011 -> 001 -> 1
    console.log('AND a nivel de bits:', x)

// 2-OR a nivel de bits: x | y
// --compara bit a bit los números y devuelve 1 en caso de que uno de los dígitos sea 1

    //reset valores
    x = 5 // en binario: 101
    y = 3 // en binario: 011

    //ejemplo
    x = x | y // resultado: 101 | 011 -> 111 -> 7
    console.log('OR a nivel de bits:', x)

// 3-XOR a nivel de bits: x ^ y
// --compara bit a bit los números y devuelve 1 en los casos en que los dígitos sean diferentes

    //reset valores
    x = 5 // en binario: 101
    y = 3 // en binario: 011

    //ejemplo
    x = x ^ y // resultado: 101 ^ 011 -> 110 -> 6
    console.log('XOR a nivel de bits:', x)

// 4-Desplazamiento a la izquierda: x = x << y

    //reset valores
    x = 5 // en binario: 101
    y = 2

    //ejemplo
    x = x << y // resultado: 101 -> 10100 -> 20
    console.log('desplazamiento a la izquierda:', x)

// 5-Desplazamiento a la derecha: x = x >> y

    //reset valores
    x = -16 // en binario -10000
    y = 2

    //ejemplo
    x = x >> y // resultado: -10000 -> -00100 -> -4
    console.log('desplazamiento a la derecha:', x)

// 6-Desplazamiento a la derecha sin signo: x = x >>> y

    //reset valores
    x = -16 // en binario 11111111111111111111111111110000
    y = 2

    //ejemplo
    x = x >>> y // resultado: 11111111111111111111111111110000 -> 00111111111111111111111111111100 -> 1073741820
    console.log('desplazamiento a la derecha sin signo:', x)

//OPERADORES LÓGICOS

// 1-AND lógico: x && y
// --devuelve x si x se puede convertir a false, de 
// --lo contrario devuelve y
// --con valores booleanos devuelve true si ambos son true,
// --de lo contrario devuelve false
// --ejemplo de valores que pueden convertirse a false: null, undefined, NaN, 0, ""

    //ejemplos
    console.log(true && true) // true
    console.log(true && false) // false
    console.log(false && true) // false
    console.log(false && 3 == 4) // false
    console.log("Cat" && "Dog") // Dog
    console.log(false && "Cat") // false
    console.log("Cat" && false) // false

// 2-OR lógico: x || y
// --devuelve x si x se puede convertir a true, de
// --lo contrario devuelve y
// --con valores booleanos devuelve true si uno de los
// --operandos es true, de lo contrario devuelve false

    //ejemplos
    console.log(true || true) // true
    console.log(false || true) // true
    console.log(true || false) // true
    console.log(false || 3 == 4) // false
    console.log("Cat" || "Dog") // Cat
    console.log(false || "Cat") // Cat
    console.log("Cat" || false) // Cat

// 3-NOT lógico: !x
// --devuelve false si su operando se puede convertir a true,
// --de lo contrario devuelve true

    //ejemplos
    console.log(!true) // false
    console.log(!false) // true
    console.log(!"Cat") // false


//OPERADOR DE CADENA

// 1-Concatenación: (+)
// --concatena dos valores string, devolviendo otro string
// --que es la unión de dos operandos string.
// --el operador de asignación abreviada (+=) también se puede utilizar

    //reset valores
    x = 'Hola '
    y = 'Mundo!'

    //ejemplo
    x = x + y // resultado: 'Hola Mundo!'
    console.log('concatenación:', x)

//OPERADOR CONDICIONAL(TERNARIO)

// 1-Condicional(ternario): condición ? x : y
// --si condición es true devuelve x, de lo contrario
// --devuelve y

    //reset valores
    x = 1
    y = 2

    //ejemplo
    z = 5 > 10 ? x : y // resultado: 2
    console.log('ternario:', z)

//OPERADORES UNARIOS

// 1-Delete
// --elimina instancias de un objeto

    //reset valores
    x = {a: 1, b: 2}

    //ejemplo
    console.log('delete:', delete x.a) // resultado: true
    console.log(x) // x = {b: 2}

// 2-typeof
// --devuelve el tipo del operando

    //reset valores
    x = 1
    y = 'Javascript'

    //ejemplos
    console.log(typeof x) // resultado: number
    console.log(typeof y) // resultado: string

//OPERADORES RELACIONALES

// 1-IN
// --devuelve true si la propiedad indicada está en el objeto especificado

    //reset valores
    x = {a: 1, b: 2}
    y = 2

    //ejemplo
    console.log('in:', 2 in x) // resultado: false (debes indicar la key, no el valor de esa key)
    console.log('in:', 'b' in x) // resultado: true

// 2-instanceof
// --devuelve true si el operando es del tipo de dato especificado

    //reset valores
    x = 1
    y = new String('Hola')

    //ejemplos
    console.log('instanceof:', x instanceof Number) // resultado: false
    console.log('instanceof:', y instanceof String) // resultado: true