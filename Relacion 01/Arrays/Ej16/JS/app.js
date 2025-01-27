//preguntar numero de comensales
function preguntarComensales(msj){
    let cantidadComensales = 0;

    //si son mas de 4, menos que 0 o no es un numero, informar y volver a preguntar
    while(cantidadComensales > 4 || cantidadComensales <= 0 || isNaN(cantidadComensales)){
        cantidadComensales = prompt(msj);
        if(cantidadComensales > 4 || cantidadComensales <= 0){
            alert("Lo siento, no admitimos grupos mayores de " + cantidadComensales + ", haga grupos de 4 personas como máximo e intente de nuevo");
        } else if(isNaN(cantidadComensales)){
            alert("Debes introducir un numero");
        }
        
    }
    return Number(cantidadComensales);
}


//Generar mesas
function preguntarMesas(msj){
    let cantidadMesas = prompt(msj);
    let mesas = [];
    for(let i = 0; i < cantidadMesas; i++){
        mesas.push(Math.floor(Math.random()*5));
    }
    console.log(mesas);
    return mesas;
}

function asignarMesa(mesas, comensales){
    if(comensales > 0){
        let mesaAsignada = false;
        for(let i = 0; i < mesas.length; i++){
            if(mesas[i] + comensales <= 4){
                alert("Por favor sientese en la mesa "+ (i+1) + ".")
                mesas[i] += comensales;
                mesaAsignada = true;
                break;
            }
        }
        if(!mesaAsignada) {
            alert("Lo siento, no hay mesa disponible para esa cantidad de comensales");
        }
    }
}


let mesas = preguntarMesas("¿Cuantas mesas tiene el restaurante?");
let terminar = false;

while(!terminar){
    let comensales = preguntarComensales("¿Cuántos comensales son?");
    if(comensales < 0){
        terminar = true;
        alert("Proceso terminado");
    } else{
        asignarMesa(mesas, comensales);
    }
}
