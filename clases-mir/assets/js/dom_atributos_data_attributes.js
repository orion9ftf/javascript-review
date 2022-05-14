console.log(document.documentElement.lang);//lenguaje
console.log(document.documentElement.getAttribute("lang"));//muestra el valor del idiona en este caso

console.log(document.querySelector(".link-dom").href); //http://127.0.0.1:5500/clases-mir/dom.html
console.log(document.querySelector(".link-dom").getAttribute("href"))//me trae el valor real que se encontraba escrito en el enlace | dom.html


//Dar un nuevo valor a los atributos:
document.documentElement.lang = "es";
console.log(document.documentElement.lang);

//mostrar valor:
console.log(document.documentElement.getAttribute("lang"));//muestra el valor del idiona en este caso
//darle un nuevo valor:
console.log(document.documentElement.setAttribute("lang", "es-CL"));//undefined

//cuando se utiliza una variable para guardar un elemento del DOM se utiliza el signo de $ antes del nombre, como por ejemplo:
const $linkDOM = document.querySelector(".link-dom");

//cambiar su valor para que se abra en una nueva pestaña:
$linkDOM.setAttribute("target", "_blank");

//que abra una página externa:
$linkDOM.setAttribute("href", "https://eloquentjs-es.thedojo.mx/index.html");

//evitar futuros hackeos:
$linkDOM.setAttribute("rel", "noopener");

//Remover métodos:
console.log($linkDOM.hasAttribute("rel"));//le preguntamos si existe ese atributo, esto valida un boolean | true
$linkDOM.removeAttribute("rel");//va a remover el atributo `rel`
console.log($linkDOM.hasAttribute("rel"));//le preguntamos si existe ese atributo, esto valida un boolean | false


//Data-Attribute
console.log($linkDOM.getAttribute("data-description"));

//todos los data-attributes se guardan en una colección de js que se llama `dataset`.
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);

//Cambiar el valor del data-attribute:
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);


//Acceder con la notación del punto al elemento:
$linkDOM.dataset.description = "Lee el libro!!";
console.log($linkDOM.dataset.description);
