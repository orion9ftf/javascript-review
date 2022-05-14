console.log("conectado!!");

//función declarada:
// function saludar (){
//     console.log("sou una función declarada!");
// }

// saludar();

//función expresada
// const saludar_2 = function (){
//     console.log("soy una función expresada!");
// }
// saludar_2();

// //arrow function | función expresada
// const saludar_3 = () => {
//     console.log("soy una función expresada hecha con arrow function!");
// }
// saludar_3();

// //arrow function inline
// const saludar_4 = () => console.log("soy una función expresada hecha con arrow function inline!");

// saludar_4();

//arrow function con parámetro
// const saludar_5 = (nombre) => {
//     console.log(`soy ${nombre}`);
// }
// saludar_5("Juanito");

//cuando solo recibe un parámetro los paréntesis son opcionales:
// const saludar_6 = nombre => {
//     console.log(`soy ${nombre}`);
// }
// saludar_6("Juanita");


// //sumatoria con dos parámetros
// const sumar = function (a, b) {
//     return a + b;
// }
// console.log(sumar(2, 5));


//sumatoria con arrow functions
// const sumar_2 = (a, b) => a + b;
// console.log(sumar_2(3, 7));

//función de varias líneas:
// const funcionVariasLineas = () => {
//     console.log("linea uno");
//     console.log("linea dos");
//     console.log("linea tres");
// }
// funcionVariasLineas();


// //recorrer con forEach
// const numeros = [1, 2, 3, 4, 5];

// numeros.forEach(function (el, index) {
//     console.log(`el elemento ${el} está en la posición ${index}`);
// });

//recorrer un arreglo con forEach y arrow functions
// numeros.forEach((el, index) => { console.log(`el elemento ${el} está en la posición ${index}`);
// });


// forEach en una linea de código
// numeros.forEach((el, index) => console.log(`${el} está en la posición ${index}`));


//function flecha cuando toma el entorno global del DOM.
const perro = {
    nombre: "Boris",
    ladrar: ()=> {
        console.log(this)
    }
}
perro.ladrar();


// sin ()=>
const perro_2 = {
    nombre: "Boris",
    ladrar_2: function () {
        console.log(this) //this es el objeto en este aspecto
    }
}
perro_2.ladrar_2();

