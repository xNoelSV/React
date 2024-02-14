// Eventos del DOM - Submit

const formulario = document.querySelector("#formulario");
formulario.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = document.querySelector(".nombre").value;
    const password = document.querySelector(".password").value;
    console.log(nombre + " "  + password);

    if (nombre === '' || password === '') {
        console.log("Algun campo esta vacio");
    } else {    
        console.log("Todo correcto");
    }

    console.log("Evento submit del formulario");
});