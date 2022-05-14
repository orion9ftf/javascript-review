// formato json
const json = {
    cadena: "cadena",
    un_numero: 22,
    boolean: true,
    arreglo: [
        "saltar",
        "caminar",
        "comer"
    ],
    objeto: {
        redes: "github.com",
        redes2: "discord"
    },
    nulo: null
}

console.log("********** JSON.parse **********");
console.log(json);
console.log(JSON);
console.log(JSON.parse);
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1, 2, 3, 4]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("22"));
console.log(JSON.parse('{"cadena": "cadena","un_numero": 22,"boolean": "true","arreglo": ["saltar","caminar","comer"],"objeto": {"redes": "github.com","redes2": "discord"},"nulo": "null"}'));


console.log("********** JSON.stringify **********");
//convierte a cadena de texto:
console.log(JSON);
console.log(JSON.stringify);
console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3, 4]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(22));
console.log(JSON.stringify(json)); //lo devuelve listo para el archivo json




