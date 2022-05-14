console.log("conectad@!!!");

//Función anónima Autoejecutable:
(function (){
    console.log("función autoejecutable N° 1");
})();


//Ejemplo 2
(function (){
    console.log("función autoejecutable N° 2");
})();



//Ejemplo 3
(function (d, w, c){
    console.log("función autoejecutable");
    console.log(d);
    console.log(w);
    c.log("este es un console.log");
})(document, window, console);



//Formas de escribir las funciones anónims autoejecutables:
(function (){
    console.log("Esta es la versión clásica");
})();

//La Crockford (JavaScript The Good Parts):
((function (){
    console.log("Versión Crockford");
})());

//Unaria:
+function (){
    console.log("Versión Unaria")
}();

//Facebook:
!function (){
    console.log("Versión Facebook")
}();

