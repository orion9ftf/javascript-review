console.log("conectado!!");

/* const animal = {
    nombre: "michi",
    sonido(){
        console.log("miau");
    }
}
console.log(animal);
 */
// Función constructora: a partir de esta función se generará nuevos objetos o instancias.

//Una clase en JavaScript se escribe con formato UpperCamelCase


//función constructora
/* function Animal (nombre, raza) {
    //Atributo de la función constructora
    this.nombre = nombre;
    this.raza = raza;

    //Métodos:
    this.sonido = function (){
        console.log("miau miau");
    }
} */
//Necesitamos crear una nueva variable basada en la función constructora `Animal`, vamos a crear dos instancias del prototipo `Animal`.
/* const carlota = new Animal("Carlota", "Angora"),
      peter = new Animal("Peter", "Labrador");
console.log(carlota);
console.log(peter); */






//Duplicado del método sonido, por cada iinstancia de Animal, este se repite, para mejor rendimiento de mi aplicación podría hacer lo siguiente (función constructora donde se le asigna los métodos a Prototipo no la función):
function Animal (nombre, raza) {
    //Atributo de la función constructora
    this.nombre = nombre;
    this.raza = raza;
}

//Métodos agregados al prototipo de la función constructora:

Animal.prototype.sonido = function (){
    console.log("hola hago sonidos de animal");
}

Animal.prototype.saludar = function (){
    console.log(`hola me llamo ${this.nombre}`);
}


const peter = new Animal("Peter", "Labrador"),
       carlota = new Animal("Carlota", "Angora");

console.log(carlota);
console.log(peter);

carlota.saludar();
carlota.sonido();

peter.saludar();
peter.sonido();


