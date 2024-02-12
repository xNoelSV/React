// Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

    // Añadir elementos al array
    //tecnologias.push('GraphQL'); // Añade al final del array
    //tecnologias.unshift('Angular'); // Añade al principio del array
    //const nuevoArreglo = [...tecnologias, 'Angular']; // Añade al final del array
    //const nuevoArreglo = ['Angular', ...tecnologias]; // Añade al principio del array

    // Eliminar elementos del array
    //tecnologias.pop(); // Elimina el último elemento del array
    //tecnologias.shift(); // Elimina el primer elemento del array
    //tecnologias.splice(2, 3); // Elimina elementos del array
    const nuevoArray = tecnologias.filter(function (tech) {
        return tech !== 'HTML';
    });

// Remplazar del array
    // tecnologias[0] = 'GraphQL';
    const nuevoArray2 = tecnologias.map(function (tech) {
        if (tech === 'HTML') return 'GraphQL';
        else return tech;
    });


console.table(nuevoArray2);