console.log("conectad@!!");

let alerta = alert("soy una alerta"),
     confirmacion = confirm("soy una confirmación"),
     aviso = prompt("soy un prompt, ingresa un valor");


console.log(alerta); // si acepto | undefined
console.log(confirmacion); // si confirmo | true
console.log(aviso); //si ingreso un valor y doy aceptar | muestra el valor | pero si ingreso un valor y cancelo me muestra null | pero si no ingreso un valor me muestra vacio.

