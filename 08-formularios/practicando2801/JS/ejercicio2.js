let apellidoCasilla = document.getElementById("apellidos");

/*Habilitar o deshabilitar el botón "enviar" dependiendo de si el nombre y el apellido son iguales.*/

apellidoCasilla.addEventListener("focusout", function(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellidos").value;
    let boton = document.getElementById("enviar");
    if (nombre === apellido) {
        boton.disabled = false;
    } else {
        boton.disabled = true;
    }
});