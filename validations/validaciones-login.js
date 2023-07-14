export function validarLogin (input) {

    const tipoDeInput = input.dataset.autenticacion;

    if(input.validity.valid) {
        input.parentElement.classList.remove("login__field--invalid");
        input.parentElement.querySelector(".login__error").innerHTML = "";
    } else {
        input.parentElement.classList.add("login__field--invalid");
        input.parentElement.querySelector(".login__error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tiposDeErrores = [
    "valueMissing",
    "typeMismatch"
]

const mensajesDeError = {
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo que ingresaste no es válido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacío"
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = ""
    tiposDeErrores.forEach( error => {
        if(input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });

    return mensaje;
}