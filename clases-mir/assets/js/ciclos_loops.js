// console.log("Conectado!!");

// let contador = 0;

// ciclo while
// while (contador < 10) {
//     console.log(contador);
//     contador++;
// }

// ciclo do while
// do {
//     console.log("do while => " + contador);
//     contador++;
// }while (contador < 10);

/* #################################### */
//Ciclo for, estructura:
// for (let i = 0; i < 10; i++) {
//     console.log(`Este es un ciclo for => ${i}`);
// }

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(`Recorrer el arreglo con for => ${i}`);
// }

/* ##################################### */
// ciclo for in: me permite iterar las propiedades de un objeto.

// crear un objeto:
const curso = {
    nombreDeLaClase: "LDP",
    instructor: "Ewi",
    asistentes: 20
}

for (const propiedad in curso) {
    console.log(`key: ${propiedad} value:  ${curso[propiedad]}`);
}

// for of me permite iterar cualquier objeto | arreglo | que sea iterable en js:

const frutas = ["manzana", "pera", "uva", "naranja"];

for (const elemento of frutas) {
    console.log(elemento);
}

// También podemos iterar una cadena de caracteres:
let cadena = "Hola Mundo";

for (const caracter of cadena) {
   console.log(caracter) ;
}

