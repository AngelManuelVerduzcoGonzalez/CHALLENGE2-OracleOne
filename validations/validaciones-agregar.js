export function validarProducto(input) {

    const tipoDeInput = input.dataset.producto;

        if(input.validity.valid) {
            input.parentElement.classList.remove("add-product__field--invalido");
            input.parentElement.querySelector(".add-product__error").innerHTML = "";
        } else{
            input.parentElement.classList.add("add-product__field--invalido");
            input.parentElement.querySelector(".add-product__error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
        }  
    }


const tiposDeErrores = [
    "valueMissing",
    "typeMismatch",
    "tooShort",
    "tooLong"
] 

const mensajesDeError = {
    url: {
        valueMissing: "El campo de url no puede estar vacío",
        tooShort: "La url que ingresaste es demasiado corta"
    },
    categoria: {
        valueMissing: "El campo de categoría no puede estar vacío"
    },
    nombre: {
        valueMissing: "El campo de nombre no puede estar vacío",
        tooLong: "El nombre del producto es demasiado largo"
    },
    precio: {
        valueMissing: "El campo de precio no puede estar vacío",
        typeMismatch: "El valor que ingresaste no es un número"
    },
    descripcion: {
        valueMissing: "El campo de descripción no puede estar vacío",
        tooShort: "La descripción es demasiado corta"
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