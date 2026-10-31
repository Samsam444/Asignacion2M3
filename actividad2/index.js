function sortNumbers(numeros){
    let num = numeros.length;
    let cambiarPuesto;
    do{
        cambiarPuesto = false;
        for(let i = 0; i < num - 1; i++){
            if(numeros[i] > numeros[i + 1]){
                let cambio = numeros[i];
                numeros[i] = numeros[i + 1];
                numeros [i + 1] = cambio;
                cambiarPuesto = true
            }    
        }
    } while(cambiarPuesto);
        return numeros;
}

const listaNumeros = [30, 25, 0.9, 13, 16, 2, 1.45, 33, 29.22, 24, 18, 5, 9, 21, 45, 12, 38, 4.4];
console.log(sortNumbers(listaNumeros));