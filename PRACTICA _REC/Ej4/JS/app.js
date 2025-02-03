function agregarElemento() {
    //pido nuevo item al usuario
    let nuevoItem = prompt("Introduce un nuevo elemento:");
    if (!nuevoItem) return;

    //pido posicion
    let posicion = prompt("Introduce la posición:\n+ : para al final\n* : para al inicio\n1,2,3 : para idnicar su posicion y reemplazar");

    //obtencion de los elementos <li> de la lista
    let lista = document.getElementById("lista");
    let elementos = lista.getElementsByTagName("li");

    //Añado el elemento segun la posicion indicada.
    if (posicion === "+") {
        let nuevoElemento = document.createElement("li"); //creacion del neuvo elemento
        nuevoElemento.textContent = nuevoItem; //le añado el contenido al nuevo elemento
        lista.appendChild(nuevoElemento); // Añadir al final (+)

    } else if (posicion === "*") {
        let nuevoElemento = document.createElement("li");//creacion del neuvo elemento
        nuevoElemento.textContent = nuevoItem;//le añado el contenido al nuevo elemento
        lista.insertBefore(nuevoElemento, lista.firstChild); // Añadir al inicio (*) before.
    } 
    else {
        let indice = parseInt(posicion) - 1; // Convertir a índice del array
        elementos[indice].textContent = nuevoItem; // Reemplazar en la posición dada
    }
}
