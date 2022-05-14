// /* cuenta regresiva */
// const cuentaAtras = (numero = 5) => {
//     // salida
//     if (numero === 0) {
//         return;
//     }
//     console.log(numero);
//     return cuentaAtras(numero - 1);
// };
// cuentaAtras(); // si no le pasamos un argumento, podemos pasarle en el parámetro por defecto un número







/* Ejercicio 1.-  utilice la recursividad para contar las letras de una palabra */
// const contarLetras = (str = "algo") => {
//     console.log(str.slice(1)); // en cada vuelta muestra que la palabra se acorta letra por letra.
//     return str.length ? 1 + contarLetras(str.slice(1)) : 0; 
// };
// console.log(contarLetras("javascript"));

/** otra forma de hacerlo */
// const contarString = (palabra) => palabra.length; 
// console.log(contarString("javascript"));


/** otra forma de hacerlo */
// const usuarioPalabra = prompt("ingrese una palabra");

// const contarString = (palabra) => palabra.length;

// console.log(contarString(usuarioPalabra));






/* ######### Ejercicio 2 recursividad: */
// // Escribe un programa que invierta una cadena de texto usando rescursión, ej: hola => aloh

// const invertirString = (string = "javascript") => {
//     console.log(string.slice(-1))
//     return string.length ? string.slice(-1) + invertirString(string.slice(0, (string.length -1))) : ""
// }
// console.log(invertirString("hola"));


// otra manera de hacerlo
// const invertirString = string => string.split('').reverse().join('');
// console.log(invertirString("javascript"));














