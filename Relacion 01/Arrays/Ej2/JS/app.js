    let X = 0;
    let Y = 0;
    let respuesta = []

    function countBy(X ,Y){

        X = prompt("Dime el numero (entero positivo) X");
        Y = prompt("Dime EL NUMERO (entero positivo) Y");

        //variables que almacena los multimplos
        let multiplos = [];

        if(X < 0 || Y < 0){
            return respuesta;
        } else {
            //obtener los X primeros multiplos de Y
            for(let i = 1; i <= Y; i++){
                multiplos.push(X*i);
            }
            respuesta = multiplos;

            console.log(respuesta); //para mostar el resultado por consola.

            let mostrarRespuestas = document.getElementById("muestraRespuestas");

            mostrarRespuestas.innerHTML = `
                <p>X= ${X}</p>
                <p>Y= ${Y}</p>
                <p>Los ${Y} primero multiplos de ${X} son: ${respuesta} </p>`
        }

        return respuesta;
    }


