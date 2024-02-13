
const autenticado = true;

autenticado ? 
    console.log('Si puedes ver Netflix') : // true
    console.log('No puedes ver Netflix') // false

// Doble ternario
const saldo = 600;
const pagar = 500;
const targeta = true;

saldo > pagar ? 
    console.log('Puedes pagar con saldo') : // true
    targeta ?
        console.log('Si puedes pagar') : // true
        console.log('Fondos insuficientes') // false