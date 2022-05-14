const array = [];
// const array_2 = [2, true, "cadena", ["a", "b", "c"]];

const array_2 = [2, true, "cadena", ["a", "b", "c", [1, 2, 3]]];

// console.log(array);
// console.log(array_2);
// console.log(array_2.length);

// imprimir el arreglo dentro de un arreglo pero solo la letra c
// console.log(array_2[3][2]);


//acceder al arreglo dentro de un arreglo de arreglo:
// console.log(array_2[3][3]); // imprime el arreglo

// console.log(array_2[3][3][2]); //imprime solo el número 3

//método .fill: sirve para rellenar un arreglo con datos
const arreglo_3 = Array(20).fill(true);
// console.log(arreglo_3);

//constructor new Array
const arreglo_4 = new Array();
// console.log(arreglo_4);

//constructor | crear un array
const arreglo_5 = new Array(1, 2, 3, true, false);
// console.log(arreglo_5);



const colores = ["rojo", "azul", "verde"];

colores.push("blanco"); //.push agrega un elemento al final del arreglo
console.log(colores);

colores.pop(); // quita un elemento al final del arreglo

/* hacer una lista con <ul> con cada color que haya en un arreglo */
colores.forEach(function(elemento, index){
    console.log(`<li id="${index}">${elemento}</li>`);
});
