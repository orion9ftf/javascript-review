//console.log('conectado con html!');

// concatenar:

let nameUser = "Anita";
let year = 20
let concatenar = nameUser + year
let concatenar_2 = nameUser + " " + year // algunos lenguajes de progra,ación no permiten sumar string con numbers
let interpolacion = `Mi nombre es ${nameUser} y tengo ${year} años `// template string
let interpolacion_2 = `Mi nombre es ${nameUser} 
y tengo ${year} años `// detecta los espacios

//console.log(concatenar);
//console.log(interpolacion);
//console.log(interpolacion_2);

/* ***** Prompt()***** */

// nos sirve para ingresar datos pero los ingresa como string siempre:
//let edadUser = parseInt(prompt("ingrese su edad")); //parseInt convierte a número los strings
//console.log(edadUser); // el dato ingresado se muestra en la consola.

//console.log(typeof edadUser); // typeof nos devuelve el tipo de dato



/* ***** operadores aritmeticos ***** */

let suma = 10 + 20;
// console.log(suma);

let resta = 20 - 10;
// console.log(resta);

let multiplicacion = 2 * 4;
// console.log(multiplicacion);

let division = 8 / 4;
// console.log(division);

let resto = 2 % 20;
// console.log(resto);


// ejercicio guiado

//let primerNumero = parseInt(prompt("ingresa un número"));
//let segundoNumero = parseInt(prompt("ingresa otro número"));

/*console.log(`
Suma: ${primerNumero + segundoNumero}
Resta: ${primerNumero - segundoNumero}
Multiplicación: ${primerNumero * segundoNumero}
División: ${primerNumero / segundoNumero}
Módulo: ${primerNumero % segundoNumero}
`);
*/



/* ***** Ejercicios ***** */

// Ejercicio 3.- 
//let totalDias = parseInt(prompt("Ingrese la cantidad de días"));
// let years = Math.floor(totalDias / 365);
// let semanas = Math.floor((totalDias % 365) / 7);
// let dias = Math.floor((totalDias % 365) % 7);

/*console.log(`
${years} años,
${semanas} semanas,
${dias} días
`);
*/



// números aleatorios
//let random = Math.floor(Math.random() * (max - min)) + min;
let random = Math.floor(Math.random() * (20 - 5)) + 5;
//console.log(random);



// de número a string:
let numero_2 = 20;
// console.log(numero_2.toString());
// console.log(numero_2);


// Operadores relacionales:

// let resultado_1 = 20 > 10;
// console.log(resultado_1); // true

// let resultado_2 = 20 < 10;
// console.log(resultado_2); // false

// let resultado_3 = 20 === 10;
// console.log(resultado_3); //false

// let resultado_4 = 20 == '20'; // igual a
// console.log(resultado_4); // true

// let resultado_5 = 20 === '20'; // es idéntico a
// console.log(resultado_5); // false

// let resultado_6 = 20 !== '20';
// console.log(resultado_6); // true

// let resultado_7 = 20 != '20';
// console.log(resultado_7); // false

// console.log("************ operadores lógicos *************");

// /* *****Operadores lógicos***** */
// let resp_1 = true && true;
// console.log(resp_1); // true

// let resp_2 = 20 > 10 && 10 < 20;
// console.log(resp_2); // true

// let resp_3 = true && true && false;
// console.log(resp_3); // false

// let resp_4 = true || false;
// console.log(resp_4); // true

// let resp_5 = !true;
// console.log(resp_5); // false

// let resp_6 = !false;
// console.log(resp_6); // true



/* ****** if | else ***** */


if (true) {
    // console.log("es verdadero");
}

// **************************

if (false) {
    // console.log("es verdadero");
} else {
    // console.log("se ejecuta solo por la condición else");
}

// ***************************

// let respuestaUser = prompt("¿Quieres aprender js?");

// if (respuestaUser.toLocaleLowerCase() === "si") {
//     console.log("wiiii!");
// } else {
//     console.log("que mal bro!");
// }


// ***************************

/* ***** switch ***** ##########################################*/ 
// let escojaUnaOpcion = prompt(`
// Elija una opción:
// 1: Libros
// 2: Peliculas
// 3: Juegos
// Ingrese el número de la opción:
// `)

// switch(escojaUnaOpcion){
//     case '1':
//         console.log('El señor de los anillos');
//     break; // si el usuario escoge la opción 1 sale del programa
//     case '2':
//         console.log('Rápidos y Furiosos');
//     break;
//     case '3':
//         console.log('Need for speed');
//     break;

//     default:
//         console.log('Opción no válida humano')
//     break;
// }



/* ***** while ***** */
// let numero = 0

// while(numero < 10) {
//     console.log(numero)
//     numero++; //necesita un incrementador, es lo mismo que decir: numero = numero + 1
// }

// console.log(numero);


/* * Functions * */
// function saludar(){
//     console.log("Soy una function");
// }

// saludar();


// function saludar(nombre){ //recibe parámetros
//     console.log("Soy una function " + nombre);
// }

// saludar("Ewi");


/* *con parametro y argumeno de variable y prompt */
// function saludar(nombre){ //recibe parámetros
//     console.log("Soy una function " + nombre);
// }

// let nombreUsuario = prompt("¿Cuál es tu nombre?")
// saludar(nombreUsuario);



/* *mas de un argumento y parámetro */
// function saludar(nombre, apellido){ //recibe parámetros
//     console.log(`Soy una function  ${nombre} ${apellido}`);
// }

// let nombreUsuario = prompt("¿Cuál es tu nombre?");
// let apellidoUsuario = prompt("¿Cuál es tu apellido?");
// saludar(nombreUsuario, apellidoUsuario);



/* *funciones con retorno */
// function sumar(n1, n2) {
//     return parseInt(n1) + parseInt(n2);
// }

// let numeroUno = prompt("ingresa un número");
// let numeroDos = prompt("ingresa un segundo número");

// console.log(sumar(numeroUno, numeroDos));


/* ****** cachipún ******  */
let tiroUsuario = 0
let tiroMaquina = 0


function cachipun(){
    
}






















/*  array  */

// let frutas = ["manzana", "pera", "naranja", "uva"];
// console.log(frutas);

// console.log(frutas[0]); // llamar por indice
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);
// console.log(frutas.length); //cantidad de elementos que existen dentro del array
// esto no es útil al momento de recorrer todo el array y devolver todos lo valores que existen dentro.

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

/* ################################### */

// for (let fruta of frutas) {
//     // console.log(fruta);
// }


/* #################################### */

// let mensaje = "no se queden dormidos";

// for (let letra of mensaje) {
//     console.log(letra);
// }



/* ##################################### */
// no iterable :(

// let numero = 10;

// for (num of numero) {
//     console.log(num);
// }


/* ##################################### */
// var | let | const

// var estado = true;
// var estado = false;

// console.log(estado);

// ********** let ************
// let estado = true;
// let estado = false;
// console.log(estado);


// ********** let iteración **********
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// ********* const *********
// const estado = true;
// estado = false;
// console.log(estado);


// for (const i = 0; i < 10; i++) {
//     console.log(i);
// }


/** ********* const */
// const estado = true;
// console.log("******************");
// if(estado){
//     const estado = false;
//     console.log(estado); // false
// }
// console.log(estado); // true


/** funciones declarativas */

// function numeroAzar(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// // invocar:
// console.log(numeroAzar(1, 11));



/** funciones expresada */
// const numeroAzar = function (min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// console.log(numeroAzar(1, 10));



/* ########## arrow function ########### */
// const miNumeroFlecha = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(miNumeroFlecha(1, 10));


// resumido:
// const miNumeroFlecha = (min, max) => Math.floor(Math.random() * (max - min)) + min;
// console.log(miNumeroFlecha(1, 11));






