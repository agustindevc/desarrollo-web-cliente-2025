for (let i = 1; i <= 100; i++) {
    let mensaje = i;

    if (i % 3 === 0 && i % 5 === 0) { //si son multiplos de 3 y de 5
        mensaje += " Multimúltiplo";
    } else if (i % 3 === 0) {
        mensaje += " Múltiplo de 3"; //si son multiplos de 3
    } else if (i % 5 === 0) {
        mensaje += " Múltiplo de 5"; //si son multiplos de 5.
    }


    //Muestro el resultado por consola
    console.log(mensaje);
}
