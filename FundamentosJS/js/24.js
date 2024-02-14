// Eventos del DOM - Clicks

// Interactua con el DOM cuando el usuario realiza un click en el heading
const heading = document.querySelector('.heading');
heading.addEventListener('click', () => {
    console.log('Click en el heading');
});

const enlaces = document.querySelectorAll('.navegacion a');
enlaces.forEach(enlace => {
    enlace.addEventListener('click', evento => {
        evento.preventDefault();
        console.log('Click en el enlace');
    });
});