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
        num--;
    } while(cambiarPuesto)
        return numeros;
}

const listaNumeros = [30, 25, 13, 16, 2, 1.45, 33, 24, 18, 5, 9, 21, 45];
console.log(sortNumbers(listaNumeros))