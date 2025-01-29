// a) Pedir 7 números al usuario y almacenarlos en un array
let numeros = [];
for (let i = 0; i < 7; i++) {
    let num = parseInt(prompt(`Introduce el número ${i + 1}:`));
    numeros.push(num); //guardo los numeros en un array
}

//a) Mostrar pro consola el array y la suma de sus elementos
console.log("Array original:", numeros);

let suma1 = 0;
for (let i = 0; i < numeros.length; i++) {
  suma1 += numeros[i];
}

console.log("Suma de los elementos:", suma1);

// b) Pedir dos nuevos números.
let nuevoInicio = parseInt(prompt("Introduce la primera posición:"));
let nuevoFin = parseInt(prompt("Introduce la última posición:"));
//inserto los numeros(uno al principiop y otro al final)
numeros[0] = nuevoInicio;
numeros[numeros.length - 1] = nuevoFin;

// Mostrar el array actualizado
console.log("Array actualizado:", numeros);

// c) Calcular y mostrar la media con 2 decimales
let suma2 = 0;
for (let i = 0; i < numeros.length; i++) {
  suma2 += numeros[i];
}

let media = suma1 / numeros.length;
media = media.toFixed(2); //tofixed(2) convierte elr esultado a dos decimales.
console.log("Media redondeada a 2 decimales:", media);

// d) Mostrar los números menores y mayores que la media
let menores = numeros.filter(num => num < media).join(", ");
let mayores = numeros.filter(num => num > media).join(", ");
console.log("Números menores que la media:", menores);
console.log("Números mayores que la media:", mayores);

// e) Pedir un número adicional y verificar si está en el array
let numeroBuscado = parseInt(prompt("Introduce un número para buscar en el array:"));
let posiciones = [];
numeros.forEach((num, index) => {
    if (num === numeroBuscado) {
        posiciones.push(index);
    }
});

if (posiciones.length > 0) {
    console.log(`El número ${numeroBuscado} aparece en las posiciones: ${posiciones.join(", ")}`);
} else {
    console.log(`El número ${numeroBuscado} no se encuentra en el array.`);
}
