console.log("conectado!!");

const numeros = [1, 2, 3];

// Sin destructuring
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];
console.log(uno);
console.log(dos);
console.log(tres);

//with destructuring:
const [one, two, three] = numeros;
console.log(one, two, three);

//Si necesito guardar cada una de las propiedades de un objeto, y que estas se manejen de manera dinámica dentro de un archivo html

// tenemos un objeto persona
const persona = {
    nombre: "Ana",
    apellido: "Candia",
    edad: 22
}

let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad);

