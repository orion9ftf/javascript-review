console.log("Conectado!!");


// hasta este punto, se evalua la condición, ya que la iteración de código llega a la posición 5 se cumple que es idéntico a la posición 5 y el ciclo se detiene(por ende no imprimirá el número `6`):
const numeros = [1,2,3,4,5,6,7,8,9,0];

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        break;
    }
    console.log(numeros[i]);
}

//¿Pero qué pasa si utilizamos `continue`?
for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        continue;
    }
    console.log(numeros[i]);
}
