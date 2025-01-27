function quitarRepetidos(){

    //obtengo los array
    let input1 = document.getElementById("array1").value;
    let input2 = document.getElementById("array2").value;

    const array1 = input1.split(",").map(item => item.trim());
    const array2 = input2.split(",").map(item => item.trim());

    //Concatenar los 2 array sin elementos repetidos. Primero el array1 y luego el array2.
    let arrayFinal = array1.concat(array2);

    //quito los elementos repetidos de cada array.
    arrayFinal = Array.from(new Set(arrayFinal));


    let mostarEnPagina = document.getElementById("mostrarResultados");

    mostarEnPagina.innerHTML = `
        <p>Arrays con numeros solo aparecen una sola vez: ${arrayFinal}
        `;
}