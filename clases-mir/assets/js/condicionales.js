console.log("Conectado!!!");
// Estructuras condicionales

// if | else
// let edad = 17;

// solución 1 | menor de edad
// if (edad > 17) {
    // console.log("Eres mayor de edad");
// } else {
    // console.log("Eres menor de edad");
// }


// solución 2 | menor de edad
// if (edad >= 18) {
    // console.log("Eres mayor de edad");
// } else {
    // console.log("Eres menor de edad");
// }


// solución 3 | menor de edad
// if (edad < 18) {
//     // console.log("Eres menor de edad");
// } else {
//     // console.log("Eres mayor de edad");
// }


// solución 4 | menor de edad
// if (edad <= 17) {
//     // console.log("Eres menor de edad");
// } else {
//     // console.log("Eres mayor de edad");
// }


/* if anidados */
// if-else | if-else
/* Según hora del día:
Déjame dormir 0pm - 5hrs
Buenos días 6hrs - 11hrs
Buenas tardes 12pm - 18hrs
Buenas noches 19hrs - 23hrs
*/
let hora = 20;

// solución 1
if (hora >= 0 && hora <= 5){
    console.log("Déjame dormir");
} else if (hora >= 6 && hora <= 11){
    console.log("Buenos días");
} else if (hora >= 12 && hora <= 18){
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

//Solución 2
if (hora < 6){
    console.log("Déjame dormir");
} else if (hora > 5 && hora < 12){
    console.log("Buenos días");
} else if (hora > 11 && hora < 19){
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

//Simplificación de un if else | operador ternario
/* Sintáxis: (condicion) ? verdadero : falso */


// Eres mayor o menor de edad:
let edad = 17;
let eresMayor = (edad >= 18) 
? "Eres mayor de edad" 
: "Eres menor de edad";
console.log(eresMayor);

//Otra estructura de control sería switch-case

/*
lunes - 1
martes - 2
miercoles - 3
jueves - 4
viernes - 5
sabado - 6
domingo - 7
*/

let dia = 12;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("miércoles");
        break;
    case 4:
        console.log("jueves");
        break;
    case 5:
        console.log("viernes");
        break;
    case 6:
        console.log("sábado");
        break;

    case 7:
        console.log("domingo");
        break;
    default:
        console.log("Ese día no existe")
        break;
}
