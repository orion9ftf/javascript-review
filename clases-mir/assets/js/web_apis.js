console.log(window); 
console.log(document); //mapea la estructura del documento html

//habla el pc:
let hablar = "Hola soy alexa pirateada";

const hablarAlexa = (hablar) => speechSynthesis.speak(new SpeechSynthesisUtterance(hablar));

hablarAlexa(hablar);