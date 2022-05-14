//Siempre va primero los archivos que importamos:
import password, {PI, usuario} from "./constantes.js";
import {aritmetica} from "./aritmetica.js"; //alias: 
import Saludo from "./constantes.js";

//Lamamos a las variables desde el archivo constantes.js
console.log(PI);
console.log(usuario);

//operaciones desde el archivo aritmetica.js:
console.log(aritmetica.sumar(2, 5));
console.log(aritmetica.restar(6, 3));

//export default:
// saludo();


//export default de una variable:
console.log(password);


//export default de una class:
let saludar = new Saludo();
saludar;

console.log("conectad@!!!");
