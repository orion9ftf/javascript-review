console.log("conectado!!");


// new me permite crear un objeto nuevo de un cierto tipo de dato, tres formas de crearlo:
let nombre = "Ana";
let apellido = 'Candia';
let saludo = new String("Hola mundo");


console.log(nombre);
console.log(apellido);
console.log(saludo);
console.log("*** Longitud de la cadena de texto ***");
console.log(nombre.length); 
console.log(apellido.length);
console.log(saludo.length);

// en minúsculas
console.log("***** minúsculas *****");
console.log(nombre.toLowerCase());
console.log(apellido.toLowerCase());
console.log(saludo.toLowerCase());
// en mayúsculas 
console.log("***** mayúsculas *****");
console.log(nombre.toUpperCase());
console.log(apellido.toUpperCase());
console.log(saludo.toUpperCase());

// evaluar si existe la palabra:
console.log("***** Evaluar si existe alguna palabra en particular *****");

let lorem = "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat voluptate corporis quis iure. Beatae earum delectus rerum doloribus quibusdam suscipit quasi voluptas labore, maxime possimus maiores ex placeat similique.     "

console.log(lorem.includes("amet")); // true


// quitar el espacio del principio y final del párrafo:
console.log(lorem);
console.log("***** quitar el espacio del principio y del final del párrafo *****");
console.log(lorem.trim());

// separar las palabras con comillas:
console.log("***** Separas las palabras en comillas *****");
console.log(lorem.split(" ")); // con espacio entre comillas
console.log("***** Separas las letras en comillas *****");
console.log(lorem.split("")); // sin espacio en las comillas

