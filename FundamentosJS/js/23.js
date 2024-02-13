// Manupulara elementos HTML

const heading = document.querySelector('.heading');
heading.textContent = 'Nuevo Heading';
// console.log(heading.textContent);

const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Noel';
console.log(inputNombre);

const enlaces = document.querySelectorAll('.navegacion a');
enlaces.forEach(enlace => {
    enlace.textContent = 'Nuevo enlace';
});
console.log(enlaces);
