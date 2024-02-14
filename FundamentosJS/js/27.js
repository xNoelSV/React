

const formulario = document.querySelector("#formulario");
formulario.addEventListener('submit', e => {
    e.preventDefault();
    
    const existe = document.querySelector('.alerta');
    if (existe) {
        existe.remove();
    }

    const nombre = document.querySelector(".nombre").value;
    const password = document.querySelector(".password").value;
    //console.log(nombre + " password: "  + password);

    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta');
    
    if (nombre === '' || password === '') {
        alerta.textContent = "Algún campo está vacio";
        alerta.classList.add('error');
    } else {    
        alerta.textContent = "Todo correcto";
        alerta.classList.add('exito');
    }
    console.log(alerta);

    formulario.appendChild(alerta);
});