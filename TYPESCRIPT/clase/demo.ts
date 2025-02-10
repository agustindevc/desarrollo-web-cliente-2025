//TIPO NUMBER
let numero:number=120;
console.log(numero); //el tipo numbner admite todos los tipos de numeros (enteros, decmales, negativos, hexadecimaes, binario, etc)

let real: number = 1.43;
let binario:number=0b101;
let octal:number=0o45;
let suma = real + binario + octal;

//TIPO STRING
//En string se peuden usar "" '' o ´´, el ultimo para incluir variables
let mensaje:string = "Hola Mundo";
console.log(mensaje);
let resultado = `El resultado es ${suma}`;
let cadena1:string = "Hola";
let cadena2:string = "mundo";
let unioncadenas:string = cadena1 + cadena2;

//TIPO BOOLEAN
let esViernes:boolean = false;
console.log(esViernes);
let comparacion = real > 2;
console.log(comparacion);

//ARRAY
let arreglo1:number[]=[1,2,3,4];
let arreglo2:Array<number>=[5,6,7,8];
console.log(arreglo1);
console.log(arreglo2);
console.log(typeof arreglo1);
console.log(typeof arreglo2);
let arreglocadena:string[]=["TS","JS,PHP"];
cadena1 = false; //aqui da error porque la cadena1 ya esta declarada de tipo string, no puedo asignarle un valor boolean.
arreglocadena.push()

//TUPLAS
//Es un array que admite diferetnes tipos de elementos dentro. Son de tamaño fijo y cada posicion del array tiene su tipo establecido.
let tupla:[string,number]=["Agustin", 29];
console.log(tupla[0]);

//tipos enumerados (ENUM). Asigna posibles valroes unicos a un elemento. Solo podra tener esos valores.
enum semaforo{"Rojo"=3, "Naranja", "Verde"};

console.log(semaforo);
let valor = semaforo.Rojo;

switch(valor){
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
let variable:any;
variable="Hola";
variable=30;


//TIPO OBJECT - Acepta cualquier valor excepto null o undefined.
let objeto:Object;

//TIPO UNKNOW - Se suele utilizar para trabajar con datos que no sabemos que seran (ejemplos: datos de apis). Y siempre que no quiera usar any


//definicion de tipos predefinidos por los usuarios utilizando objetos. Es decir, utilizo un abjeto como tipo: Ejemplo:
interface Persona{
    nombre:string;
    apellido:string;
    edad:number;
    estadoCivil:boolean
}
let personaAgustin:Persona={
    nombre:"Agustin",
    apellido:"Diaz",
    edad:29,
    estadoCivil:false
}
console.log(personaAgustin);







