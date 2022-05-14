//ya no se ocupan estos métodos:
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

//los tres primeros selectores fueron reemplazados por:
console.log(document.querySelector("#menu"));//pero es mucho más lento que getElementById | devuelve un Nodelist no un arreglo
console.log(document.querySelector("a"));//me devuelve el primero que encuentra | devuelve un Nodelist no un arreglo
console.log(document.querySelectorAll("a"));//trae todos las anclas que encuentra | devuelve un Nodelist no un arreglo
console.log(document.querySelectorAll("a").length);
//recorrerlo
document.querySelectorAll("a").forEach((el)=> console.log(el));
console.log(document.querySelector(".card"));//me trae la primera card que encuentra
console.log(document.querySelectorAll(".card"));//me trae todas las cards
console.log(document.querySelectorAll(".card")[2]);//la tarjeta que está en la posición 2
console.log(document.querySelectorAll("#menu li"));//imprimir solo las listas que se encuentren junto al id menu
console.log(document.querySelector("#menu li"));//la primera lista que se encuentra dentro del nav con clase menu
