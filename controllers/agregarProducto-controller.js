import { clientServices } from "../service/client-service.js";
import { toasts } from "../controllers/toast-controller.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const url = document.querySelector('[data-producto="url"]').value;
    const nombre = document.querySelector('[data-producto="nombre"]').value;
    const categoria = document.querySelector('[data-producto="categoria"]').value;
    const precio = document.querySelector('[data-producto="precio"]').value;
    const descripcion = document.querySelector('[data-producto="descripcion"]').value;

    try {
        const respuesta = await clientServices.agregarProducto(url, nombre, categoria, precio, descripcion);
        if(respuesta.ok) {
            toasts.mostrarOkToast("El producto fue añadido correctamente");
        } else {
            throw new Error();
        }
    } catch(error) {
        toasts.mostrarErrorToast("Ocurrió un error al intentar añadir el producto. Por favor intentalo de nuevo más tarde. ");
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
const button = document.querySelector(".header__boton--administrador")
icon.addEventListener("click", () => {
    icon.style.display = "none"
    search.style.display = "inline"
    input.style.display = "inline"
    button.style.display = "none"
    input.focus();
});

input.addEventListener("blur", () => {
    icon.style.display = "inline"
    search.style.display = "none"
    input.style.display = "none"
    button.style.display = "inline"
})
