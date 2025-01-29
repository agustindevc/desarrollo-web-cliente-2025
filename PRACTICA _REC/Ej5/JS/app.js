function estadisticas() {
    //obtengo todos los elementos por su etiqueta y los almaceno en arrays.
    //Obtengo el tamaño de cada array de elementos y asi obtendre cuantos elementos hay de cada tipo en la pagina
    let totalImagenes = document.getElementsByTagName("img").length;
    let totalEnlaces = document.getElementsByTagName("a").length;
    let totalParrafos = document.getElementsByTagName("p").length;

    //muestro los resultados
    let muestra = document.getElementById("resultado")
    
    muestra.innerHTML = `
        <p><strong>Imágenes:</strong> ${totalImagenes}</p>
        <p><strong>Enlaces:</strong> ${totalEnlaces}</p>
        <p><strong>Párrafos:</strong> ${totalParrafos}</p>
    `;
}
