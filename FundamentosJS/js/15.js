
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// const nuevoArray2 = tecnologias.map( tech => {
//     if (tech === 'HTML') return 'GraphQL';
//     else return tech;
// });

const nuevoArray = tecnologias.filter( tech => {
    return tech !== 'React';
});

console.log(nuevoArray);
// console.log(nuevoArray2);
