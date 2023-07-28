import { clientServices } from "../service/client-service.js";
import { toasts } from "./toast-controller.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == "") {
        toasts.mostrarErrorToast("Ha ocurrido un error, intentelo de nuevo más tarde");
    }

    const img = document.querySelector('[data-producto="url"]');
    const nombre = document.querySelector('[data-producto="nombre"]');
    const categoria = document.querySelector('[data-producto="categoria"]');
    const precio = document.querySelector('[data-producto="precio"]');
    const descripcion = document.querySelector('[data-producto="descripcion"]');

    try {
        const producto = await clientServices.detalleProducto(id)
        if(producto.url && producto.nombre && producto.categoria && producto.precio && producto.descripcion){
            img.value = producto.url
            nombre.value = producto.nombre
            categoria.value = producto.categoria
            precio.value = producto.precio
            descripcion.value = producto.descripcion
        } else {
            throw new Error()
        }
    } catch(error) {
        toasts.mostrarErrorToast("Ocurrió un error al obtener la información, por favor intentelo de nuevo o más tarde")
    }
} 

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const img = document.querySelector('[data-producto="url"]').value;
    const nombre = document.querySelector('[data-producto="nombre"]').value;
    const categoria = document.querySelector('[data-producto="categoria"]').value;
    const precio = document.querySelector('[data-producto="precio"]').value;
    const descripcion = document.querySelector('[data-producto="descripcion"]').value;

    clientServices.actualizarProducto(img, nombre, categoria, precio, descripcion, id)
    .then((respuesta) => {
        if(respuesta.ok){
            toasts.mostrarOkToast("Se actualizó el producto correctamente");
        } else {
            throw new Error();
        }
    })
    .catch(() => {
        toasts.mostrarErrorToast("Hubo un problema al intentar actualizar el producto. Por favor intentalo de nuevo más tarde")
    } )
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