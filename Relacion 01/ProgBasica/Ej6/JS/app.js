/*Crea un script que pida al usuario un numero entero positivo N mayor a 0.
        Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a pedir.
        A continuación, debe realizar lo siguiente:
        a) Calcular los divisores del número N y mostrarlos.
        b) Calcular la suma de los cuadrados de los divisores obtenidos en el paso anterior y
        mostrarla.
        c) Indicar si esa suma es un cuadrado o no (con una frase por pantalla) */

        function pedirYCalcular(){
           
            let valor;

            do{
                valor = parseFloat(prompt("Ingresa un numero entero positivo: ")); //El enunciaod pide numeros enteros, pero coloco parseFloat para que poder controlarlo si ingresa un numero decimal. Sino el programa detectara todos los numeros como enteros
            
             }while(isNaN(valor) || valor < 0 || !Number.isInteger(valor)); //Esto ultimo verifica que el numero sea un entero.


            /*Obtener divisores del numero*/
            let divisores = []; //aqui almacenaere los divisores de el numero introducido
            let sumaCuadrados = 0;
            for(let i = 0; i <= valor; i++){
                if(valor % i == 0){
                    divisores.push(i);

                    //Calcular la suma de los cuadrados de los divisores
                    sumaCuadrados += i*i;
                }
            }
            
            let cuadrado;

            let raizCuadrada = Math.sqrt(sumaCuadrados); //Math.sqrt calcula la raiz cuadrada del numero que se le pase por parámetros

            if(Number.isInteger(raizCuadrada)){ 
                cuadrado = "La suma es cuadrado";
            } else {
                cuadrado = "La suma no es cuadrado";
            }
                
            

            let Resultados = document.getElementById("mostrarResultados");
            Resultados.innerHTML = `
                <p>Los divisores de ${valor} son ${divisores}.</p>
                <p>La suma de los cuadrados de los divisores de ${valor} es ${sumaCuadrados}.</p>
                <p>${cuadrado}.</p>
            `;

            
        }