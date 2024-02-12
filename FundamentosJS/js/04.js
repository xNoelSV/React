// Objetos

// Un objeto agrupa todo en una sola variable
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto);
console.table(producto);

console.log ( producto.nombre );
console.log ( producto.precio );
console.log ( producto.disponible );

// Desestructuración
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

// Object Literal Enhacement
const autenticado = true;
const usuario = "Noel";

const nuevoObjeto = {
    autenticado, // autenticado: autenticado
    usuario // usuario: usuario
}

console.table(nuevoObjeto);
