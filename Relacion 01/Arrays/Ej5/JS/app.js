function realizarEnunciado(){
    
    //Llamada a los elementos del HTML.
    const frase = document.getElementById("frase").value; 
    
    //Comprobamos que los campos no esten vacios
    if(frase == "" ){
        alert("Debes introducir una frase");
    } else {
        //Divido la cadena vector en un array de subcadenas utilizando la coma , como delimitador.
        let vectorPalabras = frase.split(" "); //separo el array por palabras utilizando los espacios.

        let numPalabras = vectorPalabras.length;
        let primeraPalabra = vectorPalabras[0];
        let ultimaPalabras = vectorPalabras[vectorPalabras.length-1];
        let ordenInverso = [...vectorPalabras].reverse(); //de esta forma creo copias del array a la que se le aplicaran los cambios, de lo contrario, al modificar el array olriginal, las modificaciones no se aplicarian de forma correcta en el resto del codigo.
        let AZ = [...vectorPalabras].sort();
        let ZA = [...vectorPalabras].sort().reverse();

        //muestro resultado por consola.
        console.log(numPalabras);
        console.log(primeraPalabra);
        console.log(ultimaPalabras);
        console.log(ordenInverso);
        console.log(AZ);
        console.log(ZA);


        //muestro resultado en el documento HTML.
        let muestra = document.getElementById("mostrarResultados");

        muestra.innerHTML = `
        <p>Numero de palabras: ${numPalabras}.</p>
        <p>Primera palabra: ${primeraPalabra}.</p>
        <p>Última palabra: ${ultimaPalabras}.</p>
        <p>Orden inverso: ${ordenInverso}.</p>
        <p>Orden A-Z: ${AZ}.</p>
        <p>Orden Z-A: ${ZA}.</p>
        `;


    }
}

/*
splice(posicion, 0, Number(elemento)): El método splice modifica el contenido de un array eliminando,
reemplazando o agregando elementos. Los parámetros que se pasan a splice son:

-posicion: La posición en el array donde se va a insertar el nuevo elemento.
Este valor se obtiene del campo de entrada HTML con el id posicion.
-0: El número de elementos que se deben eliminar a partir de la posición especificada.
En este caso, es 0, lo que significa que no se eliminará ningún elemento.
-Number(elemento): El nuevo elemento que se va a insertar en el array. elemento es
una cadena de texto obtenida del campo de entrada HTML con el id elemento.
La función Number convierte esta cadena en un número antes de insertarla en el array.
*/