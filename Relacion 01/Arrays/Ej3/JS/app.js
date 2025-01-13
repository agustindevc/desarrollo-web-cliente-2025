let N = 0;

function pedirN(){
    N = prompt("Dime un número entero positivo mayor a 2:");

    if(N <= 2){
        alert("El numero debe ser mayor a 2");
        pedirN();
    } else {
        //Creacion de Matriz de NxN

        const multiplos = []; //este array contendra las filas

        //Contador para multiplicar
        let contador = 1;

        //Bucle para crear N filas.
        for(let i = 0; i < N; i++){
            multiplos[i] = []; //Por cada iteración se creará una nueva fila.
            
            //bucle para crear N columnas y asignar valores.
            for(let j = 0; j < N; j++){
                multiplos[i][j] = N * contador;
                contador ++;
                if(multiplos[i][j] <= 9){
                    multiplos[i][j] = "0" + multiplos[i][j];
                } else {
                    //convierto los datos en string para que se muestren de forma ordenada
                    multiplos[i][j] += "";
                }

                
            }
        }
        console.log(multiplos);
    }
}