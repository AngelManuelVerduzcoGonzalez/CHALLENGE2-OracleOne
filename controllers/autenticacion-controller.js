import { clientServices } from "../service/client-service.js";
import { toasts } from "../controllers/toast-controller.js";

const formulario = document.querySelector("[data-form]");
var perfilesLista = []; 

const obtenerInformacion = async () => {
    
    try {
        const perfiles = await clientServices.autenticarUsuario();
        if(perfiles) {
            perfilesLista.push(...perfiles);
        } else {
            throw new Error();
        }
    } catch(error){
        console.log(error)
        alert("Ocurrió un error");
    }

}
obtenerInformacion();


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let email = document.querySelector('[data-autenticacion="email"').value;
    let password = document.querySelector('[data-autenticacion="password"').value;
    let autenticacion = false;
    perfilesLista.forEach((perfil) => {
        if(perfil.email == email && perfil.password == password) {
            autenticacion = true
        }
    })
    if(autenticacion) {
        window.location.href="../screens/all-products.html"
    } else {
        toasts.mostrarErrorToast();
    }
    
});