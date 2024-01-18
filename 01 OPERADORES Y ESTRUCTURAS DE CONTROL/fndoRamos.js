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

// 1-asignación: x = y es lo mismo que: x = y

    //ejemplo
    x = y // resultado: 2
    console.log('asignación:', x)

// 2-asignación de adición: x += y es lo mismo que: x = x + y

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x += y // resultado: 3
    console.log('adición:', x)

// 3-asignación de resta: x -= y es lo mismo que: x = x - y

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x -= y // resultado: -1
    console.log('resta:', x)

// 4-asignación de multiplicación: x *= y es lo mismo que: x = x * y

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x *= y // resultado: 2
    console.log('multiplicación:', x)

// 5-asignación de división: x /= y es lo mismo que: x = x / y

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x /= y // resultado: 0.5
    console.log('división:', x)

// 6-asignación de residuo: x %= y es lo mismo que: x = x % y

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x %= y // resultado: 1
    console.log('residuo:', x)

// 7-asignación de exponenciación: x **= y es lo mismo que: x = x ** y

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x **= y // resultado: 1
    console.log('exponenciación:', x)

// 8-asignación de desplazamiento a la izquierda: x <<= y es lo mismo que: x = x << y

    //reset valores
    x = 5 // en binario: 101
    y = 2

    //ejemplo
    x <<= y // resultado: 101 -> 10100 -> 20
    console.log('desplazamiento a la izquierda:', x)

// 9-asignación de desplazamiento a la derecha: x >>= y es lo mismo que: x = x >> y

    //reset valores
    x = -16 // en binario -10000
    y = 2

    //ejemplo
    x >>= y // resultado: -10000 -> -00100 -> -4
    console.log('desplazamiento a la derecha:', x)

// 10-asignación de desplazamiento a la derecha sin signo: x >>>= y es lo mismo que: x = x >>> y

    //reset valores
    x = -16 // en binario 11111111111111111111111111110000
    y = 2

    //ejemplo
    x >>>= y // resultado: 11111111111111111111111111110000 -> 00111111111111111111111111111100 -> 1073741820
    console.log('desplazamiento a la derecha sin signo:', x)

// 11-asignación AND bit a bit: x &= y es lo mismo que: x = x & y
// --compara bit a bit los números y devuelve 1 si y solo si ambos dígitos son 1

    //reset valores
    x = 5 // en binario: 101
    y = 3 // en binario: 011

    //ejemplo
    x &= y // resultado: 101 & 011 -> 001 -> 1
    console.log('AND bit a bit:', x)

// 12-asignación XOR bit a bit: x ^= y es lo mismo que: x = x ^ y
// --compara bit a bit los números y devuelve 1 en los casos en que los dígitos sean diferentes

    //reset valores
    x = 5 // en binario: 101
    y = 3 // en binario: 011

    //ejemplo
    x ^= y // resultado: 101 ^ 011 -> 110 -> 6
    console.log('XOR bit a bit:', x)

// 13-asignación OR bit a bit: x |= y es lo mismo que: x = x | y
// --compara bit a bit los números y devuelve 1 en caso de que uno de los dígitos sea 1

    //reset valores
    x = 5 // en binario: 101
    y = 3 // en binario: 011

    //ejemplo
    x |= y // resultado: 101 | 011 -> 111 -> 7
    console.log('OR bit a bit:', x)

// 14-asignación AND lógico: x &&= y es lo mismo que: x && (x = y)
// --si la x de la izquierda es falsy(null, undefined, 0, false, '') no se le
// --asignará a x el valor de y, si es truthy se le asignará a x el valor de y.
// --este patrón se utiliza para asignarle un valor a x solo si x es truthy

    //reset valores
    x = 1
    y = 2

    //ejemplo
    x &&= y // resultado: 2
    console.log('AND lógico:', x)

// 15-asignación OR lógico: x ||= y es lo mismo que: x || (x = y)ç
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

// 16-asignación de anulación lógica: x ??= y es lo mismo que: x ?? (x = y)
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

// 1-igual: ==
// --devuelve true si los operandos son iguales(independientemente del tipo de los operandos)

    //ejemplos
    console.log(3 == 3 )// true
    console.log('3' == 3) // true
    console.log(3 == 4) // false

// 2-no es igual: !=
// --devuelve true si los operandos no son iguales

    //ejemplos
    console.log(3 != 4) // true
    console.log(4 != '3') // true
    console.log(3 != '3') // false

// 3-estrictamente igual: ===
// --devuelve true si el valor y el tipo de los operandos son iguales

    //ejemplos
    console.log(3 === 3) // true
    console.log('Hola' === 'Hola') // true
    console.log(3 === '3') // false

// 4-estrictamente no es igual: !==
// --devuelve true si los operandos son del mismo tipo pero no mismo valor,
// --o son de diferente tipo

    //ejemplos
    console.log(3 !== '3') // true
    console.log('Hola' !== 'hola') // true
    console.log(3 !== 3) // false

// 5-mayor que: >
// --devuelve true si el operando izquierdo es mayor que el derecho

    //ejemplos
    console.log(5 > 3) // true
    console.log(12 > 5) // true
    console.log(3 > 5) // false

// 6-mayor o igual que: >=
// --devuelve true si el operando izquierdo es mayor o igual que el derecho

    //ejemplos
    console.log(5 >= 3) // true
    console.log(3 >= 3) // true
    console.log(2 >= 3) // false

// 7-menor que: <
// --devuelve true si el operando izquierdo es menor que el derecho

    //ejemplos
    console.log(3 < 5) // true
    console.log(2 < 3) // true
    console.log(50 < 10) // false

// 8-menor o igual que: <=
// --devuelve true si el operando izquierdo es menor o igual que el derecho

    //ejemplos
    console.log(4 <= 4) // true
    console.log(1 <= 10) // true
    console.log(10 <= 8) // false


//OPERADORES ARITMÉTICOS

// 1-suma: +

    //reset valores
    x = 1
    y = 2

    //ejemplo
    console.log('suma:', x + y) // resultado: 3

// 2-resta: -

    //reset valores
    x = 1
    y = 2

    //ejemplo
    console.log('resta:', x - y) // resultado: -1

// 3-multiplicación: *

    //reset valores
    x = 1
    y = 2

    //ejemplo
    console.log('multiplicación:', x * y) // resultado: 2

// 4-división: /

    //reset valores
    x = 1
    y = 2

    //ejemplo
    console.log('división:', x / y) // resultado: 0.5

// 5-residuo: %
// --devuelve el resto entero de dividir dos operandos

    //reset valores
    x = 1
    y = 2

    //ejemplo
    console.log('residuo:', x % y) // resultado: 1

// 6-incremento: ++
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

// 7-decremento: --
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