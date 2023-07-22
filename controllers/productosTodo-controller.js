import { clientServices } from "../service/client-service.js";

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
    acomodarLista();
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
        buscarProducto("Play Station")
    })
});

// Acomodar estilos de la lista
const acomodarLista = () => {
    const hijos = lista.children;
    const numHijos = lista.children.length;
    console.log(numHijos);

    if(numHijos % 6 == 0){
        lista.classList.add("all-products__lista--full")
    }

    for (let i = 0; i < hijos.length; i++) {
        if(i === 0){
            hijos[0].classList.add('all-products__producto--primero')
        }
        if ((i) % 6 === 0) {
          hijos[i].classList.add('all-products__producto--primero');
        }
      }
}