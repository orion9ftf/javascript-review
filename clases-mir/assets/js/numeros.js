// diferentes maneras de declarar las variables con valores numéricos.

let a = 2;
let b = new Number(1);
let c = 2.38;
let d = "4.6";

console.log(a);
console.log("************");
console.log(b);
console.log("************");
console.log(c.toFixed(1));
console.log("************");
console.log(c.toFixed(4));
console.log(parseInt(c)); // me devuelve solo la parte entera.

//concatena un número con un string
console.log(typeof c);
console.log(typeof d);
console.log("**** suma ****");
console.log(a + b);
console.log("**** concatena los valores no los suma ****");
console.log(c + d); // 2.384.6
console.log(c + parseInt(d)); // 6.38
console.log(c + parseFloat(d)); // 6.9799999999999995




