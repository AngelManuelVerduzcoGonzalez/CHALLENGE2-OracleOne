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

const search = document.querySelectorAll("[data-search]");

search.forEach(elemento => {
    elemento.addEventListener("click", () => {
        const input = document.querySelector('[data-input]').value;
        window.location.href = `search-product.html?search=${input}`
    })
});

// Acomodar estilos de la lista
window.addEventListener("resize", listas.acomodarLista)