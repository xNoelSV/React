// Unir 2 objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Noel",
    premium: true,
}

// producto.cliente = cliente;
// const nuevoObjeto = Object.assign(producto, cliente);
const nuevoObjeto2 = {
    producto: {...producto}, 
    cliente: {...cliente}
};

console.log(nuevoObjeto2);