function mostrarAmigos(){

    //obtengo la lista
    let nombres = document.getElementById("lista").value.split(",");

    //creo el array donde almacenare aquellos que son amigos (menos de 4 letras)
    let amigos = [];

    //Recorro el la lista de nombres y compruebo el tamanop de cada uno
    //si tiene 4 letras lo añado al array "amigos"
    for(let i = 0; i < nombres.length; i++){
        if(nombres[i].length == 4){
            amigos.push(nombres[i]);
        }
    }

    //muestro el array amigos por consola y en la pagina
    console.log(amigos);

    let muestraAmigos = document.getElementById("mostrar");

    muestraAmigos.innerHTML = `
        <p>Tus amigos son: ${amigos}.
        `;
}