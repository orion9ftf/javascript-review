// usar const cuando trabajemos con objetos:

//un objeto va a ser una colección de llave valor

// puedo declarar un objeto con el constructor

const objeto = {}
// console.log(objeto);

const objeto_2 = new Object();
// console.log(objeto_2);

// llave valor:
// const criatura = {
//     nombre: "Alice",
//     apellido: "Cupper",
//     edad: 22,
//     hobbies: ["limar", "cantar", "comer"],
//     soltera: false,
//     contacto: {
//         email: "contacto@contacto.cl",
//         linkedIn: "@contacto",
//         telefono: "+569 56789098"
//     },
//     saludo: function (){
//         console.log("estoy saludando desde la function dentro de mi objeto")
//     }
// };
// console.log(criatura); //devuelve el objeto completo.

//Acceder a la llave que necesito mostrar:
// console.log(criatura.nombre);

// console.log(criatura.hobbies);
//solo necesito un hobbie en particular:
// console.log(criatura.hobbies[1]); //cantar

//acceder a otro objeto, y me devuelve ese objeto con sus tres propiedades.
// console.log(criatura.contacto.email);

//para la función `saludo` es un método y puedo acceder directamente con `criatura` ...internamente ya tiene un console.log asi que lo llamamos por el nombre del objeto:
// criatura.saludo();



//Vamos a crear otra función dentro del objeto y además vamos a interpolar `nombre` y `apellido`. Vamos a utilizar la palabra reservada `this` ya que hace referencia al mismo objeto:
const criatura = {
    nombre: "Alice",
    apellido: "Cupper",
    edad: 22,
    hobbies: ["limar", "cantar", "comer"],
    soltera: false,
    contacto: {
        email: "contacto@contacto.cl",
        linkedIn: "@contacto",
        telefono: "+569 56789098"
    },
    saludo: function (){
        console.log("estoy saludando desde la function dentro de mi objeto")
    },
    decirMiNombre: function() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} añosy me puedes llamar al ${this.contacto.telefono} de lunes a viernes.`);
    }
};
//Ejecuto el método: `decirMiNombre`
criatura.decirMiNombre(); //Hola me llamo Alice Cupper y tengo 22 años.


//imprimir todas las llaves `keys` de nuestro objeto `Object` `criatura`:
console.log(Object.keys(criatura));

//Imprimir los valores `values`:
console.log(Object.values(criatura));

//Evaluar si la llave existe, utilizando la propiedad `hasOwnProperty`, si existe nos dará `true`, caso opuesto nos devolverá `false`:
console.log(criatura.hasOwnProperty("nombre")); //true
console.log(criatura.hasOwnProperty("caminatas")); //false