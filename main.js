function find(array){
    let arreglo = [];
    for(let i = 0; i < array.length; i++){
        const dato = typeof array[i];
        if(dato === "string"){
            arreglo.push(array[i]);
        }
    }
    return arreglo;
}
const lista = [20, 30, true, "hola", [ 6, 8], false, "edad", "dragon"];
console.log(find(lista))