// Template Strings

const producto = "Tablet de 12 pulgadas";
const precio = 400;
const marca = "Orange";

function textoDeFuncion() {
    return "Texto de funcion";
}

console.log(producto + " $" + precio + " Dolares, Marca: " + marca); // Tablet de 12 pulgadas400Orange
console.log(producto, " $" + precio, " Dolares, Marca: ", marca); // Tablet de 12 pulgadas $400 Dolares, Marca: Orange
console.log(`${producto} $${precio} Dolares, Marca: ${marca}, ${textoDeFuncion()}`); // Tablet de 12 pulgadas $400 Dolares, Marca: Orange