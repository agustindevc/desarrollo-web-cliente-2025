document.getElementById("crear").addEventListener("click", crear);
document.getElementById("incrementar").addEventListener("click", incrementar);
document.getElementById("decrementar").addEventListener("click", decrementar);
document.getElementById("consultar").addEventListener("click", consultar);


function crear(){
    sessionStorage.setItem("contador","0")
}
function incrementar(){
    let valor = Number(SessionStorage.getItem("contador"));
    sessionStorage.setItem("contador", valor+1);
}

function decrementar(){
    let valor = Number(SessionStorage.getItem("contador"));
    sessionStorage.setItem("contador", valor-1);
}

function consultar(){
    document.getElementById("resultado").innerHTML=sessionStorage.getItem("contador");
}