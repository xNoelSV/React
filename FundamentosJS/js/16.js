const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const numeros = [10, 20, 30];

let nuevoArray;

nuevoArray = tecnologias.filter( tech => tech !== 'React');

// Comprobar si un elemento existe en el array
// const resultado = tecnologias.includes('React');

// Some - Devuelve si al menos uno cumple con la condición
// const resultado = numeros.some ( numero => numero > 50 );

// Find - Devuelve el primer elemento que cumple con la condición
// const resultado = numeros.find( numero => numero > 15 );

// Every - Devuelve true o false si todos cumplen con la condición
// const resultado = numeros.every( numero => numero > 9 );

// Reduce - Realiza una suma (operacion) sobre todos los elementos del array
// const resultado = numeros.reduce( (total, numero) => total + numero, 0);

// Filter - Filtra los elementos que cumplan con la condición
// const resultado = tecnologias.filter( tech => tech === "Node.js");
// const resultado = numeros.filter( numero => numero > 15);

// forEach - Acceder a cada elemento del array
tecnologias.forEach( (tech, index) => console.log(index) );

// Map - Crear un nuevo array con los resultados de una función
const arrayMap = tecnologias.map( tech => tech );

console.log(arrayMap);
