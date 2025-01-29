//Creo un bucle de 100 iteraciones para mostrar 100 numeros
for (let i = 1; i <= 100; i++) {
    let numero = i;

    if (i % 3 === 0 && i % 5 === 0) { //si son multiplos de 3 y de 5
        numero += " Multimúltiplo";
    } else if (i % 3 === 0) {
        numero += " Múltiplo de 3"; //si son multiplos de 3
    } else if (i % 5 === 0) {
        numero += " Múltiplo de 5"; //si son multiplos de 5.
    }


    //Muestro el resultado por consola
    console.log(numero);
}
