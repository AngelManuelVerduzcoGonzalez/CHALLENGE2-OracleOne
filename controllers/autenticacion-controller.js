import { clientServices } from "../service/client-service.js";
import { toasts } from "../controllers/toast-controller.js";

const formulario = document.querySelector("[data-form]");
var perfilesLista = []; 

const obtenerInformacion = async () => {
    
    try {
        const perfiles = await clientServices.obtenerUsuarios();
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
        window.location.href="../screens/all-products-admin.html"
    } else {
        toasts.mostrarErrorToast("El usuario y/o contraseña son incorrectos, por favor intentelo de nuevo");
    }
    
});

// Codigo para la barra de busqueda//

const search = document.querySelector("[data-search]");

search.addEventListener("click", () => {
        const input = document.querySelector('[data-input]').value;
        window.location.href = `search-product.html?search=${input}`
    });

const icon = document.querySelector(".header__busqueda--oculto")
const input = document.querySelector(".header__input")
icon.addEventListener("click", () => {
    icon.style.display = "none"
    search.style.display = "inline"
    input.style.display = "inline"
    input.focus();
});

input.addEventListener("blur", () => {
    icon.style.display = "inline"
    search.style.display = "none"
    input.style.display = "none"
})