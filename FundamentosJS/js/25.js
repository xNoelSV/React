// Eventos del DOM - Inputs

const inputNombre = document.querySelector(".nombre");
inputNombre.type = 'password';
inputNombre.placeholder = 'Un placeholder desde JS';
inputNombre.addEventListener('input' /* keydown, keyup */, function(e) {
    // console.log("Escribiendo en el input:");
    // console.log(inputNombre.value);
    console.log(e.target.value);
});

const inputPassword = document.querySelector(".password");
inputPassword.addEventListener('input', funcionPassword);

function funcionPassword(e) {
    inputPassword.type = 'text';
    setTimeout(() => {
        inputPassword.type = 'password';
    }, 200);
}