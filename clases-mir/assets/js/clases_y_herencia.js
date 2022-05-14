console.log("conectado***!!!");
class Animal {
    constructor(nombre, raza){
      this.nombre = nombre;
      this.raza = raza;
  }
  //Métodos:
  sonido(){
    console.log("creo que estoy vivo");
  }

  saludar(){
    console.log(`mi nombre es ${this.nombre}`);
  }
}

/* const mau = new Animal("miau", "angora"),
archi = new Animal("archi", "labrador");


console.log(mau);
mau.saludar();
mau.sonido();
console.log("*********************")
console.log(archi);
archi.saludar();
archi.sonido();
 */





//Vamos a crear la clase Perro y necesitamos que herede de la clase Animal
// super llama al constructor de la clase padre (Animal)

class Perro extends Animal {
  constructor(nombre, raza, size){
    super(nombre, raza);
    this.size = size //fuera de la invocación de super ya que solo le pertenece a la clase Perro
  }
  sonido(){
    console.log("bueno soy un perro y ladro");
  }
  ladrar(){
    console.log("wuau wuau");
  }
}

const mau = new Animal("miau", "angora"),
      archi = new Perro("archi", "labrador", "mediano");

console.log(mau);
mau.saludar();
mau.sonido();
console.log("*********************");
console.log(archi);
archi.saludar();
archi.sonido();
archi.ladrar();

