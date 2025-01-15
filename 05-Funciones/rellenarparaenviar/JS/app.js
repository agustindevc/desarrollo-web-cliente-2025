function comprobarEnviar(){
    let campoNombre = document.getElementById("nombre").value;
    let campoProfesion = document.getElementById("profesion").value;

    if (campoNombre != '' && campoProfesion != '') {
        document.getElementById("enviar").disabled = false;
    }
}
