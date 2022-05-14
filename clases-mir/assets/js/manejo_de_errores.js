console.log("conectado!!");

try {
    console.log("En el try se agrega el código a evaluar");
} catch (error) {
    console.log("catch, captura cualquier error surgido o que se envíe en el try");
} finally {
    console.log("el bloque finally se ejecuta siempre al final de un bloque try-catch");
}


// Error | Estructura de control de manejo de Errores:
try {
    let numero = 'algo';

    if (isNaN(numero)) {
        throw new Error("El caracter introducido no es un número");
    }
    console.log(numero);
} catch (error) {
    console.log(`Se produjo un error: ${error}`);
}
