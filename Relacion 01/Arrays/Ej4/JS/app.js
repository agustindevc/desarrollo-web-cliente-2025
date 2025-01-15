function introducirElemento(){
    
    //Llamada a los elementos del HTML.
    const vector = document.getElementById("vector").value; //se declara let porque su valor cambiara al añadir el elemento.
    const elemento = document.getElementById("elemento").value;
    const posicion = document.getElementById("posicion").value;

    //Comprobamos que los campos no esten vacios
    if(vector == "" || elemento == "" || posicion == ""){
        alert("Debes completar todos los campos.");
    } else {
        //Divido la cadena vector en un array de subcadenas utilizando la coma , como delimitador.
        let nuevoVector = vector.split(",").map(Number);
        nuevoVector.splice(posicion, 0, Number(elemento));

        //muestro resultado por consola.
        console.log(nuevoVector);


        //muestro resultado en el documento HTML.
        let muestra = document.getElementById("mostrarResultados");

        muestra.innerHTML = `
        <p>Vector original: ${vector}.</p>
        <p>Elemento a introducir: ${elemento}</p>
        <p>Posicion del elemento: ${posicion}</p>
        <p>Vector con nuevo elemento: ${nuevoVector}</p>
        `;


    }
}

/*splice(posicion, 0, Number(elemento)): El método splice modifica el contenido de un array eliminando,
reemplazando o agregando elementos. Los parámetros que se pasan a splice son:

-posicion: La posición en el array donde se va a insertar el nuevo elemento.
Este valor se obtiene del campo de entrada HTML con el id posicion.
-0: El número de elementos que se deben eliminar a partir de la posición especificada.
En este caso, es 0, lo que significa que no se eliminará ningún elemento.
-Number(elemento): El nuevo elemento que se va a insertar en el array. elemento es
una cadena de texto obtenida del campo de entrada HTML con el id elemento.
La función Number convierte esta cadena en un número antes de insertarla en el array.
*/