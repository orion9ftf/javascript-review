console.log("conectado!!!");

/* Un método estático se puede ejecutar sin necesidad de instanciar la clase */
//Ejemplo:
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

//class Perro que hereda de Animal:
class Perro extends Animal {
    constructor(nombre, raza, size){
      super(nombre, raza);
      this.size = size //fuera de la invocación de super ya que solo le pertenece a la clase Perro
      this.carita = null
    }
    sonido(){
      console.log("bueno soy un perro y ladro");
    }
    ladrar(){
      console.log("wuau wuau");
    }
    //Un método estático se puede ejecutar sin necesidad de instanciar la clase:
    static dondeVoy(){
        console.log("voy donde vaya mi human@");
    }
    //getter | setters
    get getCarita(){ //va a retornar lo que traiga carita, solo obtiene un valor.
        return  this.carita;
    }
    //modificar el valor de la propiedad:
    set setCarita(carita){ //recibe un parámetro que cambiará nuestro valor.
        this.carita = carita;
    }
  }
  
//invoco al nombre de la clase y llamo al método estático:
Perro.dondeVoy();


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
//método obtenedor get:
console.log("**** método get ****");
console.log(archi.getCarita);
//modificar el método con set:
console.log("**** método set ****");
archi.setCarita = "carita de tiernucho";
console.log(archi.getCarita);


