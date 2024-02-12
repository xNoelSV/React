// Funciones - Function declaration

/*sumar(); // Se puede llamar antes de declarar la función
function sumar() {
    console.log(2 + 2);
}
//sumar(); */

// function sumar(numero = 0, numero2 = 0 /* Valor por defecto */) {
//     console.log(numero2);
//     console.log(numero + numero2);
// }
// sumar(10, 20);
// sumar(2, 3);
// sumar(100);
// sumar();

// Funciones - Function con retorno
function sumar(numero = 0, numero2 = 0 /* Valor por defecto */) {
    return [ numero + numero2, 'Hola Mundo' ];
}
//const [resultado, holaMundo] = sumar(10, 20); // Array Destructuring

function sumar(numero = 0, numero2 = 0 /* Valor por defecto */) {
    return {
        resultado: numero + numero2,
        mensaje: 'Hola Mundo'
    };
}
const { resultado, mensaje } = sumar(10, 20); // Object Destructuring

console.log(resultado);
console.log(mensaje);