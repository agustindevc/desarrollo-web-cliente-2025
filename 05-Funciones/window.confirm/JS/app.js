function confirmarBorrado(form){
    borrar = window.confirm("Se van a borrar todos los datos del formulario");
    if(borrar){
        form.reset();
    } else {
        return false;
    }
}
