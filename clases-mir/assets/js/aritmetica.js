// export function sumar(a, b) {
//     return a + b;
// }

// export function restar(a, b){
//     return a - b;
// }

//Ya no tiene sentido exportar las functions ya que las estamos englobando en una sola función:
function sumar(a, b) {
    return a + b;
}

function restar(a, b){
    return a - b;
}


//Podríamos agrupar las funciones y devolverlas en un objeto:
export const aritmetica = {
    sumar, //cuando la propiedad y el objeto se llaman iguales solo llamamos uno.
    restar
};

