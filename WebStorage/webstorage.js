document.getElementById("crear").addEventListener("click", crear);
document.getElementById("modificar").addEventListener("click", modificar);
document.getElementById("consultar").addEventListener("click", consultar);
document.getElementById("eliminar").addEventListener("click", eliminar);

/*
//Session Storage (COMO CREAR UNA VARIABLE DE SESION)
function crear(){
    sessionStorage.setItem("usuario1","Mario");
    sessionStorage.setItem("usuario2","Agustin");
}

function modificar (){
    sessionStorage.setItem("usuario1", "Mario 123");
    sessionStorage.setItem("usuario2", "Agustin 123");
}

function consultar(){
    let valor1 = sessionStorage.getItem("usuario1");
    let valor2 = sessionStorage.getItem("usuario2");
    document.getElementById("resultado").innerHTML=`-La variable usuario1 tiene almacenado el valor ${valor1} y la variable usuario2 tiene almacenado el valor ${valor2}`;
}

function eliminar(){
    sessionStorage.removeItem("usuario1");
    sessionStorage.removeItem("usuario2");
}
*/

/*
//LOCAL Storage (ALMACENAMIENTO LOCAL)
function crear(){
    localStorage.setItem("usuario1","Mario");
    localStorage.setItem("usuario2","Agustin");
}

function modificar (){
    localStorage.setItem("usuario1", "Mario 123");
    localStorage.setItem("usuario2", "Agustin 123");
}

function consultar(){
    let valor1 = localStorage.getItem("usuario1");
    let valor2 = localStorage.getItem("usuario2");
    document.getElementById("resultado").innerHTML=`-La variable usuario1 tiene almacenado el valor ${valor1} y la variable usuario2 tiene almacenado el valor ${valor2}`;
}

function eliminar(){
    localStorage.removeItem("usuario1");
    localStorage.removeItem("usuario2");
}
*/

//COOKIES
let
function crear(){
    document.cookie="usuario2=Mario; expires=Thu; 6 Feb 2025 12:00:00 UTC; path=/";
}

function consultar(){
    alert(`La variable usuario2 tiene almacenamiento ${document.cookie}`)
}

function modificar(){
    document.cookie="usuario2=Marta; expires=Thu; 6 Feb 2025 12:00:00 UTC; path=/";
}

function eliminar(){
    document.cookie="usuario2=Mario; expires=Thu; 2 Feb 2025 12:00:00 UTC; path=/";
}
