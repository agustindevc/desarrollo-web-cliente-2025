//DEFINICION DE FUNCIONES

let func = new Function("a", "b", "return a*b"); //DEFINICION DE LA FUNCION
let resultado = func(10,10); //LE PASO LOS PARAMETROS A LA FUNCION
console.log(resultado); //MUESTRO EL RESULTADO

//FUNCIONES AUTOINVOCADAS

(function(){
    let msg = "hola";
    console.log(msg);
})();

//FUNCIONES ANONIMAS(no tiene un nombre con el que llamarla, no permite elr eaprovechamiento de codigo)

let a = 10;
let b = 10;

resultado = function(a,b){return a*b};
console.log(resultado(a,b));

//NOTACION FLECHA --arrow Functions

const fun = (a,b) => a * b; //le indico luego de la flecha la funcion que debe realizar con los parametros
console.log(fun(10,10));

//FUNCION SET INTERVAL(Sirve para repetir una accion repetitiva para cierto intervalo de tiempo)
setInterval(() => {console.log("Hola");},2000); //Mostrara por consola Hola repetidamente durante 2 segundos.

//CLEARINTERVAL (DETIENE LA REPETICION)


//indexOf

//window.confirm(pide una confirmacion antess de realizar una acción.)

borrar = window.confirm("Se van a borrar todos los datos del formulario");


function confirmarBorrado(form){
    borrar = window.confirm("Se van a borrar todos los datos del formulario");
    if(borrar){
        form.reset();
    } else {
        return false;
    }
}

/*
//INFORMACION DE INTERNET.
document.getElementById(id): Selecciona un elemento del DOM por su ID. Es muy útil para acceder y manipular elementos específicos en una página.

javascript
const element = document.getElementById("miElemento");
element.style.color = "red";
setInterval(func, delay): Ejecuta una función repetidamente en intervalos de tiempo definidos. Es perfecto para crear animaciones o actualizar datos en una página.

javascript
function mostrarHora() {
    const date = new Date();
    document.getElementById("reloj").innerHTML = date.toLocaleTimeString();
}

setInterval(mostrarHora, 1000); // Actualiza cada segundo
setTimeout(func, delay): Ejecuta una función una sola vez después de un período de tiempo determinado.

javascript
function mostrarMensaje() {
    alert("¡Hola, mundo!");
}

setTimeout(mostrarMensaje, 2000); // Se ejecuta después de 2 segundos
addEventListener(event, function): Añade un controlador de eventos a un elemento. Es muy útil para responder a interacciones del usuario como clics, movimientos del ratón, etc.

javascript
document.getElementById("miBoton").addEventListener("click", function() {
    alert("Botón clicado");
});
querySelector(selector): Selecciona el primer elemento que coincida con el selector CSS especificado.

javascript
const elemento = document.querySelector(".miClase");
elemento.style.display = "none";
localStorage y sessionStorage: Permiten almacenar datos en el navegador del usuario para mantener el estado entre sesiones o durante una sesión.

javascript
// Guardar datos
localStorage.setItem("nombre", "Juan");
sessionStorage.setItem("apellido", "Pérez");

// Recuperar datos
const nombre = localStorage.getItem("nombre");
const apellido = sessionStorage.getItem("apellido");

*/