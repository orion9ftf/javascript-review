console.log("conectado!!");

//El prototipo perro va a heredar todas las características de Animal

//Herencia Prototípica | creamos la función constructora

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

//herencia prototípica
function Perro(nombre, raza, size){
    // super: llama el elemento de la clase constructora, la clase padre.
    this.super = Animal;
    this.super(nombre, raza);
    this.size = size;
}

//Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobrescribiendo el método sonido:
Perro.prototype.sonido = function (){
    console.log("wuau wuau");
}

//Crear un método exclusivo de la clase Perro:
Perro.prototype.ladrar = function () {
    console.log("estoy ladrando");
}

const peter = new Perro("Peter", "Labrador", "mediano"),
       carlota = new Animal("Carlota", "Angora");

console.log(carlota);
console.log(peter);

carlota.saludar();
carlota.sonido();

peter.saludar(); //hola me llamo Peter
peter.sonido(); //wuau wuau
peter.ladrar(); //estoy ladrando


