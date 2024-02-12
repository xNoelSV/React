// Funciones - Function expression

/*sumar(10, 20); // Se puede llamar antes de declarar la función
function sumar(numero = 0, numero2 = 0) { // Function declaration
    console.log(numero + numero2);
}*/

// sumar(); // NO se puede llamar antes de declarar la función
const sumar = function (numero = 0, numero2 = 0 /* Valor por defecto */) { // Function expression
    return numero + numero2;
}
const resultado = sumar(10);

console.log(resultado);