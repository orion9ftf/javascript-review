console.log("conectad@!!");

//Ejemplo de objeto 1.-:
const auto = { //se declaran con const ya que no cambiará su contenido.
    color: "rojo caramelo",
    puertas: 5,
    marca: "Chevrolet",
    modelo: "Corvette",
    driff: function() { //método
        return(`Vehículo color ${this.color}, modelo ${this.modelo}, marca ${this.marca} sirve para hacer driff`);
    }
}
// console.log(auto.driff());
/*   /Acceder al valor de auto: */
// console.log(auto.modelo);



//Ejemplo 2.- de objetos:
const carritoPapas = {
    ventasPromedio: 333,
    color: "azul marino",
    atiende: "Raúl Rojas Papas",
    menu: "todo a la carta",
    diaViernesDePanes: function(){
        return(`Soy el tío ${this.atiende} vendo ${this.menu},
         y papas fritas, mi carrito es de color ${this.color}`)
    }
}
// console.log(carritoPapas.diaViernesDePanes());

/*   Acceder a los valores del objeto:  */
// console.log(carritoPapas.color);

/* ##################################################### */

/* ***************  método hasOwnProperty  *************** comprueba si existe la propiedad de un objeto | true | false */ 
// console.log(auto.hasOwnProperty("color")); //true
// console.log(auto.hasOwnProperty("ruedas"));//false

/* ##################################################### */

/* ************** objetos anidados ************** */
const bicicleta = {
    marca: "kona",
    horquilla: "rockshox",
    avanzada: {
        frenos: "shimano zee hidraulico",
        bielas: "hope",
        neumaticos: "maxxis minion",
        cuadro: {
            doble_suspension: true,
            manubrio: "NSBikes"
        }
    }
}
//Acceder a la marca de la bicicleta:
// console.log(`Bicicleta marca: ${bicicleta.marca}`);
//Acceder a neumáticos:
// console.log(`neumáticos marca: ${bicicleta.avanzada.neumaticos}`);
//Acceder al manubrio:
// console.log(`Manubrio marca: ${bicicleta.avanzada.cuadro.manubrio}`);




/* ##################################################### */

/* ************** this reemplaza al nombre del objeto ************** */
const bici = {
    cuadro_doble: true,
    marca: "Specialized",
    volar(salto){
        return `la demo 8 ${this.marca} puede volar en ${salto}`;
    }
}
// console.log(bici.volar("Redbull Rampage"));




/* ##################################################### */

/* ************** Getters | Setters ************** */
class Vehiculo {
    constructor(color, marca) {
        this.color = color
        this.marca = marca
    }

    //getter
    get getMarca(){
        return this.marca
    }

    //setter
    set setMarca(marca){
        this.marca = marca
    }
}
const chevi = new Vehiculo("negro cereza", "chevi")
//setter
chevi.marca = "audi"
//getter
// console.log(`cambiamos la marca a ${chevi.getMarca}`);
// console.log(`chevi de color ${chevi.color}`);




/* ##################################################### */

/* ************** Herencia ************** */
class Ciclismo {
  constructor(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
  }
  saltar() {
    // return(`La bicicleta ${this.marca} puede saltar, con su modelo ${this.modelo}`)
  }
}
class Bicileta extends Ciclismo {
}
//instanciamos la clase hija
const bicicl = new Bicileta("Trek", "slash")
// console.log(bicicl);
// console.log(bicicl.saltar());




/* ##################################################### */

/* ************** super ************** */

