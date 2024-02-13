// Scope

// Scope es el alcance que tienen las variables en JS
const precio = 300;

function unaFuncion() {
    const precio = 600;
    console.log(precio);
}

if (true) {
    console.log(precio);
}

unaFuncion();