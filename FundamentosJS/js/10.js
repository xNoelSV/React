// Destructuring de arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

//const [html, nodejs] = tecnologias; // Se asigna el valor de la posición 0 a html y 1 a nodejs
//console.log(nodejs);

const [var1, var2, var3, var4, var5] = tecnologias; // Se asigna el valor de cada posición a cada variable
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);

const [, , , , var6] = tecnologias; // Se asigna el valor de cada posición a cada variable
console.log(var6);

const cliente = {
    nombre: "Noel",
    tipo: "Premium"
}

const { tipo } = cliente; // Se asigna el valor de la propiedad tipo a la variable tipo
console.log(tipo);