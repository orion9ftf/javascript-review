/* console.log("********** Elementos del Documento *********");
console.log(window.document);
console.log(document); //estructura del documento html
console.log(document.documentElement); //tipo de documento
console.log(document.head); //estructura del head del html
console.log(document.body); //estructura del body en el html
console.log(document.doctype);//UTF-8
console.log(document.characterSet);//DOM
console.log(document.title); //title
console.log(document.links);//devuelve los links en un sitio web
console.log(document.images);//imágenes dentro de un sitio web
console.log(document.forms);//los formularios | ya sean de búsqueda | contacto | etc.
console.log(document.styleSheets);//hojas de estilo
console.log(document.scripts);//los scripts js

setTimeout(() => {
    console.log(document.getSelection().toString());//
}, 3000); //selecciono en el documento de la vista el texto, y al pasar los 3 seg lo muestra en la consola.

//Mala práctica | write
document.write("<h2>Esto ud no lo haga!!</h2>");

 */


//Traversing | recorriendo el DOM
// const $cards = document.querySelector(".cards");
// console.log($cards.children); //Accedo a sus hijes
// console.log($cards.children[2]);//hije en especifico
// console.log($cards.parentElement);//parentElement son los elementos del DOM
// console.log($cards.parentNode);




//Creando elementos y fragmentos:
/* const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Montaña"),
    $cards = document.querySelector(".cards");

//tenemos que agreagr los atributos a la nueva card
$img.setAttribute("src", "https://placeimg.com/200/200");
$img.setAttribute("alt", "Montaña");
$figure.classList.add("card");

//agregar un hije con appendChild(aqui se especifica el nodo)
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);



//Forma N° 1 de insertar datos en la lista de manera interactiva


//Crear estaciones del año de manera dinámica
const estaciones = ["verano", "otoño", "invierno", "primavera"],
    $ul = document.createElement("ul");

document.write("<h2>Estaciones del año:</h2>");//Mala práctica utilizar document.write
document.body.appendChild($ul);

//Recorrer las estaciones y crear por cada una un <li></li>
estaciones.forEach(el => { //el va a ser el elemento que recorrerá de manera dinámica
    const $li = document.createElement("li");
    $li.textContent = el;// le asignamos el elemento que en ese momento esta recorriendo el forEach
    $ul.appendChild($li); //agrega l alista al ul
});


//Forma N° 2 de insertar datos en la lista de manera interactiva

//Agregar nuevo contenido:
const continentes = ["áfrica", "américa", "asia", "europa", "oceania"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes:</h3>");
document.body.appendChild($ul2);

//en algunos casos hay que inicializar innerHTML vacia para que reconozca el nuevo contenido:
//$ul.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));


//Forma N° 3 de insertar datos en la lista de manera interactiva
//Meses del año:
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

meses.forEach(el =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li); //Se le agrega al nodo raíz un elemento
});
document.write("<h3>Meses del año:</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
 */




// ******************************************* //
//DOM: Templates HTML

//Los nodos nos ayudan a crear fragmentos de código, para no saturar al DOM de información:
//Templates = plantilla

//Crear una tarjeta por cada una de los contenidos en el arreglo
/* const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,//accedimos a su contenido
    $fragment = document.createDocumentFragment(),
    cardContent = [ //cada tarjeta simula un objeto | tipo API
        {
            title: "Aventura",
            img: "https://placeimg.com/200/200"
        },
        {
            title: "Caminatas",
            img: "https://placeimg.com/200/200"
        },
        {
            title: "Ciclismo",
            img: "https://placeimg.com/200/200"
        },
        {
            title: "Criptología",
            img: "https://placeimg.com/200/200"
        },
        {
            title: "Libros",
            img: "https://placeimg.com/200/200"
        },
        {
            title: "Lenguajes",
            img: "https://placeimg.com/200/200"
        },
    ];

    cardContent.forEach((el) => {
        $template.querySelector("img").setAttribute("src", el.img);
        $template.querySelector("img").setAttribute("alt", el.title);
        $template.querySelector("figcaption").textContent = el.title; //propiedad textContent sea igual a = el.title

//clonar el nodo del documento: | los nodos son las etiquetas
    let $clone = document.importNode($template, true);//el true hace referencia a copiar toda la estructura interna de ese nodo | si fuera false solo copiaría la etiqueta <template> de apertura y cierre </template>
    $fragment.appendChild($clone);
});
$cards.appendChild($fragment);
 */












// ******************************************** //
//DOM: Modificando Elementos (Old style)

// N° 2 para crear nodos:
//en este caso solo reemplazaremos la tarjeta n°3 | recordando que la posición 2 es la tercera | 0 1 2 3 4 5 6
/* const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");
//con esto clonamos toda la sección de las tarjetas, debiera entregar una sección completa de cards
    $cloneCards = $cards.cloneNode(true);//si le dejo sin parámetro true solo clonará la estructura de ese contenido


$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200" alt="Crad reemplazada">
    <figcaption>Card reemplazada</figcaption>
`;
$newCard.classList.add("card");
//reemplazamos la porpiedad, pero hay que pasarle dos parámetros
// $cards.replaceChild($newCard, $cards.children[2]);

//reemplazar la primera card:
// $cards.insertBefore($newCard, $cards.firstElementChild);


//Eliminar cards
// $cards.removeChild($cards.lastElementChild); //la última cards


//llamamos al clon de la sección de cards
document.body.appendChild($cloneCards); //le decimos con appendChild que lo agregue al final del cuerpo del documento.
 */









//******************************************** //
//Modificando elementos
//Tipos de insert insertAdjacent...
//.insertAdjacentElement(position, el) //es como appendChild
//.insertAdjacentHTML(position, html) //innerHTML agrega contenido HTML
//.insertAdjacentText(position, text) //textContent

//Los 3 métodos tienen estas posiciones:
//beforebegin(hermano anterior)
//afterbegin(primer hije)
//beforeend(ultimo hije)
//afterend(hermano siguiente)

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contenCard = `
    <img src="https://placeimg.com/200/200" alt="Crad reemplazada">
    <figcaption></figcaption>
`;
$newCard.classList.add("card");

//insertar como elemento HTML | el primer parámetro es la posición | el segungo parámetro es lo que insertamos.
// $cards.insertAdjacentElement("beforebegin", $newCard);

// $cards.insertAdjacentElement("afterbegin", $newCard);

// $cards.insertAdjacentElement("beforeend", $newCard);


//Insertar contenido HTML de manera dinámica: <figcaption></figcaption> va vacío ya que es la parte en la cual trabajeremos
/* $newCard.insertAdjacentHTML("beforeend", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Texto cambiado desde $newCard");
 */// $cards.insertAdjacentElement("afterend", $newCard);

//método prepend() para agregar card en este caso, la agrega como primero hijo:
// $cards.prepend($newCard);

//al final
// $cards.append($newCard);

//hermano posterior a la section card
// $cards.after($newCard);

//antes de
// $cards.before($newCard);










// **************************************** //
//DOM manejadores de Eventos | event handlers

//esta function se convertirá en el manejador de eventos:
/* function holaMundo(){
    alert("hola mundo");
    console.log(event); //manejador de eventos
}

// holaMundo(); // con paréntesis significaría que se ejecutaría al momento de la carga del navegador.

//Evento semántico:
const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = holaMundo; //el evento se llama onclick
 */


//Esto también se puede realizar con una function anónima o arrow function | esto reemplazaría a la función de holaMundo y ejecutará otro evento.
/* $eventoSemantico.onclick = function (){ //esta function jamás lleva parámetros.
    alert("Soy un manejador de eventos semánticos");
};
 */



//Crearemos un Evento con manejador múltiple:
/* function holaMundo(){
    alert("hola mundo");
    console.log(event); //manejador de eventos
}

const $eventoSemantico = document.getElementById("evento-semantico"),
      $eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo; 
$eventoSemantico.onclick = function (e){ 
    alert("Soy un manejador de eventos semánticos");
    console.log(e); 
    console.log(event);
};

//addEventListener() puede recibir muchos parámetros, pero solo veremos dos: | le pasaremos el type de evento que será "click" y | el manejador de eventos holaMundo (esta function ya está definida)
$eventoMultiple.addEventListener("click", holaMundo); //llamar a la function previamente declarada y sin paréntesis ya que el navegador interpreta los paréntesis como ejecución inmediata.

//lo mismo pero arrow function anónima:
$eventoMultiple.addEventListener("click", (e) =>{
    alert("Hola mundo Manejador de Eventos Múltiples");
    console.log(e);
    console.log(event);
    console.log(e.type);//tipo de evento | click
    console.log(e.target);//el objeto que lo origina | button
}); */







// ****************************************** //
// DOM: Eventos con Parámetros y Remover Eventos:



