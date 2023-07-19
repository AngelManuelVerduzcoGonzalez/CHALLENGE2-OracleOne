import { clientServices } from "../service/client-service.js";

const mostrarProducto = (url, nombre, precio, id) => {

    const caja = document.createElement("li");
    caja.classList.add("all-products__producto");

    const contenido = `
        <span class="all-products__delete" id="${id}"></span>
        <span class="all-products__edit"></span>
        <img src="${url}" alt="Producto de Star Wars" class="all-products__imagen">
        <h4 class="all-products__nombre">${nombre}</h4>
        <p class="all-products__precio">$${precio}</p>
        <p class="all-products__id">#${id}</p>
    `;
    
    caja.innerHTML = contenido;

    const icon = caja.querySelector(".all-products__delete");
    icon.addEventListener("click", () => {
        const id = icon.id;
        clientServices.eliminarProducto(id)
        .then( respuesta => console.log(respuesta))
        .catch(err => alert("Ocurrió un error"))
    })

    return caja;
}

const lista = document.querySelector("[data-lista]");

clientServices.obtenerProductos()
.then((data) => {
    data.forEach( (producto) => {
        const nuevoProducto = mostrarProducto(producto.url, producto.nombre, producto.precio, producto.id);
        lista.appendChild(nuevoProducto);
    } )
})
.catch((err) => {
    console.log(err)
}) 