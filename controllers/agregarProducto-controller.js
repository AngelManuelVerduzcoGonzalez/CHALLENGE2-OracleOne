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

})
