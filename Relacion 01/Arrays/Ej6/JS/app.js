function obtenerNumeros(){
    let N = document.getElementById("N").value;
    let arrayNumeros = [];
    
    for(let i = 1; i <= N; i++){
        arrayNumeros[i-1] = i;
    }
    
    let ordenInverso = [...arrayNumeros].reverse();


    console.log(ordenInverso);

    let muestraResultados = document.getElementById("mostrarResultados");

    muestraResultados.innerHTML = `
    <p>Numeros enteros ente 1 y ${N} en orden inverso: ${ordenInverso}
    `;

}