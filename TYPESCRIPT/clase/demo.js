//TIPO NUMBER
var numero = 120;
console.log(numero); //el tipo numbner admite todos los tipos de numeros (enteros, decmales, negativos, hexadecimaes, binario, etc)
var real = 1.43;
var binario = 5;
var octal = 37;
var suma = real + binario + octal;
//TIPO STRING
//En string se peuden usar "" '' o ´´, el ultimo para incluir variables
var mensaje = "Hola Mundo";
console.log(mensaje);
var resultado = "El resultado es ".concat(suma);
var cadena1 = "Hola";
var cadena2 = "mundo";
var unioncadenas = cadena1 + cadena2;
//TIPO BOOLEAN
var esViernes = false;
console.log(esViernes);
var comparacion = real > 2;
console.log(comparacion);
//ARRAY
var arreglo1 = [1, 2, 3, 4];
var arreglo2 = [5, 6, 7, 8];
console.log(arreglo1);
console.log(arreglo2);
console.log(typeof arreglo1);
console.log(typeof arreglo2);
var arreglocadena = ["TS", "JS,PHP"];
cadena1 = false; //aqui da error porque la cadena1 ya esta declarada de tipo string, no puedo asignarle un valor boolean.
arreglocadena.push();
//TUPLAS
//Es un array que admite diferetnes tipos de elementos dentro. Son de tamaño fijo y cada posicion del array tiene su tipo establecido.
var tupla = ["Agustin", 29];
console.log(tupla[0]);
//tipos enumerados (ENUM). Asigna posibles valroes unicos a un elemento. Solo podra tener esos valores.
var semaforo;
(function (semaforo) {
    semaforo[semaforo["Rojo"] = 3] = "Rojo";
    semaforo[semaforo["Naranja"] = 4] = "Naranja";
    semaforo[semaforo["Verde"] = 5] = "Verde";
})(semaforo || (semaforo = {}));
;
console.log(semaforo);
var valor = semaforo.Rojo;
switch (valor) {
    case 3:
        console.log("No pasar.");
        break;
    case 4:
        console.log("Precaucion");
        break;
    case 5:
        console.log("Puedes pasar.");
        break;
}
//TIPO ANY- No restringe una variable a que sea de ningun tipo de valor en especial.
var variable;
variable = "Hola";
variable = 30;
//TIPO OBJECT - Acepta cualquier valor excepto null o undefined.
var objeto;
var personaAgustin = {
    nombre: "Agustin",
    apellido: "Diaz",
    edad: 29,
    estadoCivil: false
};
console.log(personaAgustin);
