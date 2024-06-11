export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Noel';

console.log( `Este es un texto: ${ getSaludo( nombre ) }` );