function pedirNumeros(){
    let vector = prompt("Dime numeros enteros separados por comas");

    let numeros = vector.split(',').map(Number); //la variable numeros sera un array que contenga los numeros introducidos, se separan por la coma mediante el split.
    //map(Number) aplica la funcion a cada elemento del array, conviertiendolos en numeros.


    //Utilizo las funciones Math.max y Math.min para encontrar el mayor y el menor.
    let menor = Math.max(...numeros);
    let mayor = Math.min(...numeros);

    let suma = 0;

    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }

    let media = suma / numeros.length;

    let mostrarResultados = document.getElementById("resultados");
    mostrarResultados.innerHTML = `
    <p>La suma es: ${suma}</p>
    <p>La media es: ${media}</p>
    <p>El mayor es: ${mayor}</p>
    <p>El menor es: ${menor}</p>
    `;
}