console.log("conectado!!");

//Los parámetros REST se describen con ... para definir que va a recibir varios parámetros.
function sumar (a, b, ...c) {
    let resultado = a + b;

    c.forEach(function (n){
        resultado += n
    });
    return resultado;
}
console.log(sumar(1,2));
console.log(sumar(1, 2, 5, 3, 6));

// Spread Operator:
//nos ayuda cuando tengamos que almacenar múltiples argumentos, por ejemplo: puedo tener un arreglo el cual está recibiendo muchos parámetros, y necesito no hacer un push para almacenarlos. La diferencia entre el parámetro REST es que el Spread operator, se puede ejecutar en cualquier sentencia de nuestro código mestras que el parámetro REST solo me permite pasar más parámetros (y recinir múltiples argumentos dentro de la function).

const arreglo_1 = [1, 2, 3, 4, 5],
      arreglo_2 = [5, 7, 8, 9, 0];

console.log(arreglo_1, arreglo_2);

//Pero quiero combinarlos:
const arreglo_3 = [...arreglo_1, ...arreglo_2];
console.log(arreglo_3);


