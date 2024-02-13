// Funciones - Arrow Functions

// const sumar = (numero = 0, numero2 = 0) => { // Arrow function
//     return numero + numero2;
// }

// Solo se puede hacer si la función tiene una sola línea de código
//const sumar = (numero = 0, numero2 = 0) => numero + numero2 

// Si solo tiene un parámetro se pueden omitir los paréntesis
const sumar = numero => numero + 20;

const resultado = sumar(10, 20);
console.log(resultado);