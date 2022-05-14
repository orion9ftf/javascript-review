console.log("conectad@!!");

setTimeout(() =>{
    //console.log("se ejecuta setTimeout, una sola vez");
}, 3000);

setInterval(() => {
    //console.log("se ejecuta de manera indefinida, cada cierto tiempo");
}, 2000);

// Mostrar la hora actual:
setInterval(() => {
    //console.log(new Date().toLocaleTimeString());
}, 1000);


//cancelar un setTimeout:
//1° tengo que guardarlo en una variable
console.log("antes de la cancelación del setTimeout");
let temporizador = setTimeout(() =>{
    console.log(new Date().toLocaleTimeString());
}, 1000);
clearTimeout(temporizador);
console.log("después de la cancelación del setTimeout");
