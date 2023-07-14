import { validarContacto } from "../validations/validaciones-contacto.js";
import { validarLogin } from "../validations/validaciones-login.js";

const inputsContacto = document.querySelectorAll("[data-contacto]");
const inputsAutenticacion = document.querySelectorAll("[data-autenticacion]")

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


