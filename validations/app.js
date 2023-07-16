import { validarContacto } from "../validations/validaciones-contacto.js";
import { validarLogin } from "../validations/validaciones-login.js";
import { validarProducto } from "../validations/validaciones-agregar.js";

const inputsContacto = document.querySelectorAll("[data-contacto]");
const inputsAutenticacion = document.querySelectorAll("[data-autenticacion]");
const inputsProducto = document.querySelectorAll("[data-producto]");

inputsContacto.forEach( input => {
    input.addEventListener("blur", (input) => {
        validarContacto(input.target);
    })
});

inputsAutenticacion.forEach ( input => {
    input.addEventListener("blur", (input) => {
        validarLogin(input.target);
    })
});

inputsProducto.forEach ( input => {
    input.addEventListener("blur", (input) => {
        validarProducto(input.target);
    })
});


