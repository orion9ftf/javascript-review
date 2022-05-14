/* función expresada: */
// const edadUsuario = parseInt(prompt("Ingrese su edad"));

// const verificarEdad = function (edad) {
//     return edad > 17 ? "Eres mayor de edad" : "Eres menor de edad"
// }
// console.log(verificarEdad(edadUsuario));


/* con if */
// const edadUsuario = parseInt(prompt("Ingrese su edad"));
// const verificarEdad = function (edad) {
//     if (edad < 18) {
//         return "Eres menor de edad";
//     }
//     return "Eres mayor de edad";
// };


/* arrow function: */
// const edadUsuario = parseInt(prompt("Ingrese su edad"));

// const verificarEdad = edad => (edad > 17 ? "Eres mayor de edad" : "Eres menor de edad");
// console.log(verificarEdad(edadUsuario));


const edadUsuario = parseInt(prompt("Ingrese su edad"));

const verificarEdad = (edad) => (edad > 17 ? "Eres mayor de edad" : "Eres menor de edad");
console.log(verificarEdad(edadUsuario));



