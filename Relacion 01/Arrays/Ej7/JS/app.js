var miArray = new Array();
miArray[0]=200;
miArray[1]=40;
miArray[2]=400;
miArray[3]=40;
miArray[4]=40;

let mostrar = document.getElementById("mostrarArray");

mostrar.innerHTML = `
    ${miArray}
`;

function quitarRepetidos(){
    miArray = Array.from(new Set(miArray)); //la funcion set crea un conjunto de elementos unicos a partir del array original.

    //Cambio el div mostrar para que muestre el array corregido.
    mostrar.innerHTML = `
        ${miArray}
    `;
}