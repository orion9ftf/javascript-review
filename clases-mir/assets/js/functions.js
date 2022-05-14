//Funcion declarada:
function estoEsUnaFuncion(){
    console.log("uno");
    console.log("dos");
    console.log("tres");
}
//invocación de la función: ***// se puede ejecutar en cualquier momento, y se ejecuta cuantas veces se llame
// estoEsUnaFuncion(); 

function unaFuncionQueDevuelveValor(){
    console.log("uno");
    //return 20; si hago esto antes de las demás console.log el resto no se va a ejecutar ya que el return es lo último que se ejecuta y sale del proceso.
    console.log("dos");
    console.log("tres");
    return "la función ha retornado una cadena de texto";
}
// let valorFuncion = unaFuncionQueDevuelveValor();
// console.log(valorFuncion);


//Que una función reciba valores:
function saludo(nombre, edad){
    // console.log(`Hola, mi soy ${nombre} y tengo ${edad} años.`);
}

// saludo("Anita", 22);
// saludo();

//********************************************** */
//funciones declaradas v/s funciones expresadas:

// funcionDeclarada();

function funcionDeclarada(){
    console.log("funcion declarada");
}

// funcionDeclarada();


/* ********************************************* */
// se usa const y no let para las funciones expresadas(son las que se guardan en variables).

//función anónima:
const funcionExpresada = function(){
    console.log("Esto es una función expresada")
}
funcionExpresada();

