function pedirAño(){
    let anno = prompt("Dime el año: ");
    alert(`El año ${anno} pertenece al siglo ${Math.ceil(anno / 100)}`);
}

//math.ceil es una funcion que redondes el caulqueir numero decimal y devuelve su entero mas cernano hacia arriba.