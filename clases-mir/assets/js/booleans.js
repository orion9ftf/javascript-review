let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero);
console.log(falso);
console.log("**** tipo de dato ****");
console.log(typeof verdadero); //boolean
console.log(typeof falso); //boolean

// valores que tienden a verdadero | true
console.log(Boolean(1));
console.log(Boolean(-2));
console.log(Boolean(" "));
console.log(Boolean([ ]));
console.log(Boolean({ }));
console.log(Boolean(1.4));

// valores que tienden a falso | false
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(false)); //false
console.log(Boolean("")); //false
