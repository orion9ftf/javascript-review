console.log("conectad@!!");

let cadena = "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the lorem industry's standard dummy text ever since the lorem 1500s."

let expresionesRegulares = new RegExp("lorem","");// letra "g" de global | letra "i" de todas las conincidencias que encuentre ya sean mayúsculas o minúsculas
console.log(expresionesRegulares.test(cadena));
/* otra manera de buscar las expresiones regulares */
console.log("********** otra manera de buscar las expresiones regulares **********");
let expresionesReg2 = /lorem/;
console.log(expresionesReg2.exec(cadena));
