function agregarElemento() {
    let nuevoItem = prompt("Introduce un nuevo elemento:");
    if (!nuevoItem) return;

    let posicion = prompt("Introduce la posición:\n+ : Añadir al final\n* : Añadir al inicio\n1,2,3 : Reemplazar en la posición");

    let lista = document.getElementById("lista");
    let elementos = lista.getElementsByTagName("li");

    if (posicion === "+") {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nuevoItem;
        lista.appendChild(nuevoElemento); // Añadir al final
    } else if (posicion === "*") {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nuevoItem;
        lista.insertBefore(nuevoElemento, lista.firstChild); // Añadir al inicio
    } 
    else {
        let indice = parseInt(posicion) - 1; // Convertir a índice de array
        if (indice >= 0 && indice < elementos.length) {
            elementos[indice].textContent = nuevoItem; // Reemplazar en la posición dada
        } else {
            alert("Posición inválida. Intenta nuevamente.");
        }
    }
}
