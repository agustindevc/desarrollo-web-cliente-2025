function pedirYCalcular(){
    let valor1 = parseFloat(prompt("Dime el primer valor: ")); //parsefloat convierte el texto introducido por el usuario en un numero decimal(si es posible).
    let valor2 = parseFloat(prompt("Dime el segundo valor: "));

    //controlo que los valores introducidos sean numeros
    if(isNaN(valor1) || isNaN(valor2)){
        alert("Por favor introduce valores numericos")
        return; //no es necesario colocar el return en este caso ya que no se necesita un resultado devuelto o detener la ejecucion de la funcion en este punto
    }

        const suma = valor1 + valor2;
        const resta = valor1 - valor2;
        const multiplicacion = valor1 * valor2;
        const division = valor1 / valor2;
        const resto = valor1 % valor2;

        const muestraResultado = document.getElementById("resultado");

        muestraResultado.innerHTML = `
            <p>Suma: ${suma}</p>
            <p>Resta: ${resta}</p>
            <p>Multiplicacion: ${multiplicacion}</p>
            <p>División: ${division}</p>
            <p>Resto: ${resto}</p>
        `;

}