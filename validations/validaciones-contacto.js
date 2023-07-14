export function validarContacto(input) {

    const tipoDeInput = input.dataset.contacto;

        if(input.validity.valid) {
            input.parentElement.classList.remove("contacto__seccion--invalido");
            input.parentElement.querySelector(".contacto__error").innerHTML = "";
        } else{
            input.parentElement.classList.add("contacto__seccion--invalido");
            input.parentElement.querySelector(".contacto__error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
        }  
    }


const tiposDeErrores = [
    "typeMismatch",
    "valueMissing"
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo de nombre no puede estar vacío"
    },
    asunto: {
        valueMissing: "El campo de mensaje no puede estar vacío"
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = ""
    tiposDeErrores.forEach( error => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })

    return mensaje;
}