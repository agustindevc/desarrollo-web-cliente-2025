const opSi = document.getElementById("si");
const opNo = document.getElementById("no");

opSi.addEventListener("change", mostrarInput);
opNo.addEventListener("change", mostrarInput);

function mostrarInput(){
    let crearInput = document.getElementById("inputDiv");

    if(opSi.checked) {
        crearInput.innerHTML = `
        <input type="text" id="input">
        `;
    }
    if(opNo.checked){
        crearInput.innerHTML = ``;
    }
}