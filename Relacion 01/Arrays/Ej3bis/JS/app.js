function concatYMostrar(){

    //llamada a los valores de los input.
    const vector1 = document.getElementById("vector1").value;
    const vector2 = document.getElementById("vector2").value;

    //Creacion de arrays dividiendo las cadenas de numeros utilizando las comas.
    const array1 = vector1.split(",").map(Number);
    const array2 = vector2.split(",").map(Number);

    let arrayMuestra = [];

    //obtengo la longitus maxima entre los dos arrays con la funcion Math.max()
    const maxLength = Math.max(array1.length, array2.length);

    //Concatenar Arrays intercaladamente
    //Creo un bucle for que tiera el numero de veces del array mas largo
    for(let i = 0; i < maxLength; i++){

        //Controlo que el indice sea menor que la logitud del array en cada caso. Si es menor quiere decir
        //que el indice exite y se añade al array de muestra, primero uno y despues el otro.
        //si no es menor no lo añade al array y pasa al siguiente.
        //asi me aseguro que añada todos los elementos, incluyendo los del array mas largo.
        if(i < array1.length) arrayMuestra.push(array1[i]);
        if(i < array2.length) arrayMuestra.push(array2[i]);
    }

    console.log(arrayMuestra);
}
