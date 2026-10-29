const texto = "El carro es verde y bonito. A mi madre le gusta mucho su color";
const palabrasClave = ["carro", "verde", "bonito", "madre", "color"];

function findWords(texto){
    let arreglo = [];
    for(let i = 0; i < texto.length; i++){
        const dato = typeof texto[i];
        if(dato === "string"){
            arreglo.push(texto[i]);
        }
    }
    return arreglo;
}
console.log (texto);
console.log(findWords(palabrasClave));