/*Crea una función que reciba un array de valores enteros (positivos y
    negativos), y devuelva otro array con la suma parcial de cada elemento del array que se
    pasa como parámetro.
    Nota: La suma parcial de un elemento del array será la suma de ese elemento y todos los anteriores a él.
    Ej: Para el array [1,2,3,4,5,6], el array resultante será [1,3,6,10,15,21] */

    function calcular(arrayValores){
    
        let suma = 0;
        let arraySuma = [];

        for(let i = 0; i < arrayValores.length; i++){
            suma += arrayValores[i];
            arraySuma.push(suma);
        }

        let muestraResultados = document.getElementById("resultados");

        muestraResultados.innerHTML = `
        <p>Array original: ${arrayValores}</p>
        <p>Array de sumas parciales: ${arraySuma}</p>
        `;
        
        console.log(arraySuma); //coloco esto para poder visualizarlo por consola.
        return arraySuma;        
    }