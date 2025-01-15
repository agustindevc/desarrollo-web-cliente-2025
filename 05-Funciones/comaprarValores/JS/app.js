function comprobar(){
    let campoContrasena = document.getElementById("contrasena").value;
    let camporepetirContrasena = document.getElementById("repetirContrasena").value;

    if (campoContrasena !== camporepetirContrasena) {
        alert("Las contraseñas no coinciden")
        document.getElementById("enviar").disabled = true;
    } else {
        document.getElementById("enviar").disabled = false;
    }
}
