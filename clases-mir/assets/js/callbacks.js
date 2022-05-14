//callback asincrono 
function cuadradoCallback(value, callback){
    setTimeout(()=>{
        callback(value, value * value);
    }, 2 | Math.random() * 100);
}
//invocamos a la function a ejecutar 
/* cuadradoCallback(2, (value, result) => {
    console.log("inicio del callback");
    console.log(`callback: ${value}, ${result}`);
});
 */

//callback dentro de callback
cuadradoCallback(2, (value, result) => {
    console.log("inicio del callback");
    console.log(`callback: ${value}, ${result}`);
    cuadradoCallback(3, (value, result) => {
        console.log("inicio del callback 2");
        console.log(`callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
            console.log("inicio del callback 3");
            console.log(`callback: ${value}, ${result}`);
        });
        
    });
    
});

