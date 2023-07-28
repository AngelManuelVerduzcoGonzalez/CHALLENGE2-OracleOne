import { clientServices } from "../service/client-service.js";
import { listas } from "./listas-controller.js";

const mostrarProducto = (url, nombre, precio) => {

    const caja = document.createElement("li");
    caja.classList.add("all-products__producto");

    const contenido = `
        <img src="${url}" alt="Producto" class="all-products__imagen">
        <h4 class="all-products__nombre">${nombre}</h4>
        <p class="all-products__precio">$${precio}</p>
        <p class="all-products__enlace"><a href="" class="all-products__link">Ver producto</a></p>
    `;
    
    caja.innerHTML = contenido;
    
    return caja;
}

const lista = document.querySelector("[data-lista]");

clientServices.obtenerProductos()
.then((data) => {
    data.forEach( (producto) => {
        const nuevoProducto = mostrarProducto(producto.url, producto.nombre, producto.precio);
        lista.appendChild(nuevoProducto);
    })
    listas.acomodarLista();
})
.catch((err) => {
    console.log(err)
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

// Acomodar estilos de la lista
window.addEventListener("resize", listas.acomodarLista)