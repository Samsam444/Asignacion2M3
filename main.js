const texto = "La teoría del color organiza los tonos mediante el círculo cromático, clasificándolos en colores primarios, secundarios y terciarios. Cada tono se define por su tono, saturación y brillo, combinándose en esquemas de armonía como los colores análogos o complementarios. Su aplicación técnica utiliza el modelo RGB para pantallas mediante luz y el modelo CMYK con pigmentos para impresión, integrando además la psicología del color para evocar emociones específicas.";
const palabrasClave = ["teoría del color", "computadora", "círculo cromático", "colores primarios, secundarios y terciarios", "tono", "helado", "saturación", "brillo", "armonía", "complementarios", "literatura", "análogos", "modelo RGB", "luz", "modelo CMYK", "vaso de agua", "pigmentos", "psicología del color", "ceniza"];

function findWords(textoCompleto, palabras){
    let arreglo = [];
    for(let i = 0; i < palabras.length; i++){
        const palabra = palabras[i];
        if(textoCompleto.toLowerCase().includes(palabra.toLowerCase())){
            arreglo.push(palabra);
        }
    }
    return arreglo;
}
console.log(findWords(texto, palabrasClave));