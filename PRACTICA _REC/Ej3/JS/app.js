
        function calcular(operacion) {

            //Obtener valores para operar (desde los inputs)
            let num1 = document.getElementById("num1").value;
            let num2 = document.getElementById("num2").value;
            let resultado;

            //controlar operacion segun el caso y obtener resultado
            switch (operacion) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
                case '*':
                    resultado = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        alert("No se puede dividir por cero.");
                        return;
                    }
                    resultado = num1 / num2;
                    break;
            }

            //Muestro el resultado en el input
            document.getElementById("resultado").value = resultado;

            //agrego el resultado a la tabla utilizando una funcion
            agregarHistorial(`${num1} ${operacion} ${num2} = ${resultado}`);
        }

        //funcion para limpiar los inputs. coloca sus valores en "".
        function limpiar() {
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("resultado").value = "";
        }


        //Funcion para agregar operacion a la tabla de historial.
        function agregarHistorial(operacion) {
            //obtengo el elemento tabla y creo las filas y columnas necesarias
            let historial = document.getElementById("historial");
            let fila = document.createElement("tr");
            let celdaOperacion = document.createElement("td");
            let celdaResultado = document.createElement("td");

            //añado operacion y resultado a la celda correspondiente
            celdaOperacion.textContent = operacion;
            celdaResultado.textContent = document.getElementById("resultado").value;

            //añado los elementos al documento html
            fila.appendChild(celdaOperacion);
            fila.appendChild(celdaResultado);
            historial.appendChild(fila);
        }

        //funcion para vaciar la tabla historial. coloca su contenido en "".
        function limpiarHistorial() {
            document.getElementById("historial").innerHTML = "";
        }
