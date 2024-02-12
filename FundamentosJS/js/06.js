// Objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Noel",
    premium: true,
}

const { nombre: nombreCliente, premium } = cliente;
const { nombre, precio, disponible } = producto;

console.log(nombreCliente, premium);
console.log(nombre, precio, disponible);