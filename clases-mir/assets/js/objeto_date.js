console.log("conectad@!!");

console.log(Date());

let fecha = new Date();
console.log("**** fecha actual ****")
console.log(fecha);

//día del mes
console.log("**** día del mes ****")
console.log(fecha.getDate());


//día de la semana en número: Para JS los días de la semana comienzan en domingo 
/*
D - L - M - M - J - V - S
0   1   2   3   4   5   6
*/
console.log("**** día de la semana ****")
console.log(fecha.getDay());


//devolver el mes
/* 
ene febr mar abr may jun jul ago sep oct nov dic
 0     1   2   3   4   5   6   7   8   9   10 11
*/
console.log(fecha.getMonth());

//obtener el año:
console.log(fecha.getFullYear());


//devolver en hrs:
console.log(fecha.getHours());
//devolver en minutos:
console.log(fecha.getMinutes());

//devolver en segundos:
console.log(fecha.getMilliseconds());

//fecha
console.log(fecha.toDateString());

//fecha y hora:
console.log(fecha.toLocaleString());

//solo la fecha:
console.log(fecha.toLocaleDateString());


