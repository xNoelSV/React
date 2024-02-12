// Objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// Object methods
// Object.freeze(producto); // No se puede modificar el objeto
Object.seal(producto); // Permite actualizar los atributos pero no añadir atributos

// Reescribir el valor de un objeto
producto.nombre = "Monitor Curvo";

// Si no existe, lo va a añadir
producto.imagen = "imagen.jpg";

// Eliminar propiedades
delete producto.disponible;

console.table(producto);