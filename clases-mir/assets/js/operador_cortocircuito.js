console.log("conectad@!!");

function saludar(nombre){
    nombre = nombre || "Sin nombre"; //este es un operador corto..
    console.log(`Hola ${nombre}`);
}
saludar("Anita"); //con argumento | Hola Anita
saludar(); //sin argumento | Hola undefined


/* cortocircuito con or || */

//valores que tienden a verdadero:
console.log("**** valores que tienden a verdadero ****");
console.log("hola" || "aplica el valor de la derecha");
console.log(2 || "aplica el valor de la derecha");
console.log(true || "aplica el valor de la derecha");
console.log([] || "aplica el valor de la derecha");
console.log({} || "aplica el valor de la derecha");

//valores que tienden a falso:
console.log("**** valores que tienden a falso ****");
console.log(false || "aplica el valor de la derecha");
console.log(null || "aplica el valor de la derecha");
console.log(undefined || "aplica el valor de la derecha");
console.log(0 || "aplica el valor de la derecha");
console.log("" || "aplica el valor de la derecha");


/* cortocircuito con and && */
console.log("**** cortocircuito con and && ****");
console.log(false && "aplica el valor de la derecha");
console.log(null && "aplica el valor de la derecha");
console.log(undefined && "aplica el valor de la derecha");
console.log(0 && "aplica el valor de la derecha");
console.log("" && "aplica el valor de la derecha");
