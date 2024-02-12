// Tipos de datos

// Undefined
let cliente;
console.log(cliente);
console.log(typeof cliente);

// Boolean
const descuento = true;
console.log(descuento);
console.log(typeof descuento);

// Number
const numero1 = 20.20;
const numero2 = 20.20;
const numero3 = 20.20;
console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof numero3);

const alumno = "Noel";
let producto = "Monitor 20 pulgadas"

const numero = "33"; 
const numero4 = 33;

// Big int
const numeroGrande = BigInt(84783278482364238472638432242);
console.log(numeroGrande);

const numero5 = 10
const numero6 = 20

console.log( numero6 + Number(numeroGrande) + numero5);

// Coerción

const numero7 = "33"; 
const numero8 = 33;

console.log( typeof String(numero2) );
console.log( typeof Number(numero) );

// Symbol 
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol);

console.log(primerSymbol.valueOf());
console.log(segundoSymbol.valueOf());

// Null
const descuento2 = null;
console.log(typeof descuento2)