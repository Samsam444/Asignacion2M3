const texto = "La teoría del color organiza los tonos mediante el círculo cromático, clasificándolos en primarios, secundarios y terciarios. Cada tono se define por su tono, saturación y brillo, combinándose en esquemas de armonía como los colores análogos o complementarios. Su aplicación técnica utiliza el modelo RGB para pantallas mediante luz y el modelo CMYK con pigmentos para impresión, integrando además la psicología del color para evocar emociones específicas.";
const palabrasClave = ["teoría del color", "círculo cromático", "colores primarios, secundarios y terciarios", "tono", "saturación", "brillo", "armonía", "complementarios", "análogos", "modelo RGB", "luz", "modelo CMYK", "pigmentos", "psicología del color"];

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