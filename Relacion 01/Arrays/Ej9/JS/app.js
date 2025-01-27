function convertir(){
    let arrayCadena = document.getElementById("cadena").value.split(''); //creo un array con cada elemeto en una ubicacion
    
    //recorro el array e intercambio los elementos T por elementos U
    for (let i = 0; i < arrayCadena.length; i++) {
        if(arrayCadena[i] === "T"){
            arrayCadena[i] = "U";
        }
    }
   
    //Concatenacion en la variable "resultado" de todos los elementos del array
    let resultado = arrayCadena.join("");

    //muestro resultado por consola
    console.log(resultado);

    //Muestro el resultado en la página.
    let muestraResultado = document.getElementById("mostrar");
    muestraResultado.innerHTML = `
        <p>${resultado}
    `;

    return resultado;

}

//Si quisiera utilizar la funcion y obtener lo que devuelve (resultado)
//podria ahcerlo de la siguiente manera:

let resultado = convertir();

//Como lo ha hecho Fran:

/*

//define la funcion y le pasa el parametro "cadena", el cual aun no existe
function convertidor(cadena){
    let arrayCadena = cadena.split('');
    for (let i = 0; i < arrayCadena.length; i++) {
        if(arrayCadena[i] === "T"){
            arrayCadena[i] = "U";
        }
    }
    return arrayCadena.join("");
}

//crea la cadena
let cadena = prompt("Introduce tu formula: ");

llama a la funcion indicandole el parametro cadena que ya existe. La funcion le devuelve el resultado que se meustra por consola (console.log)
console.log(convertidor(cadena));

*/


