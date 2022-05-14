console.log("conectado!!");

let nombre = "Ana",
    edad = 22;

const persona = {
    nombre: nombre,
    edad: edad,
    caminar: function (){
        console.log("caminando!!")
    }
}

console.log(persona);
persona.caminar();

//Simplificado
const people = {
    nombre,
    edad,
    raza: "humana", //podemos agregar atributos
    caminar(){ //métodos simplificado | estructura => nombre del método(){valor}
        console.log("caminando caminando!!")
    }
}
console.log(people);
people.caminar();
