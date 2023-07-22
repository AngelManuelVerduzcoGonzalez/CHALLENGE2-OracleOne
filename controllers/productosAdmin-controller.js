import { clientServices } from "../service/client-service.js";

const mostrarProducto = (url, nombre, precio, id) => {

    const caja = document.createElement("li");
    caja.classList.add("all-products__producto");

    const contenido = `
        <span class="all-products__delete" id="${id}"></span>
        <a class="all-products__edit" href="update-product.html?id=${id}"></a>
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
        if ((i + 1) % 6 === 0 || i === 0) {
          hijos[i].classList.add('all-products__producto--primero');
        }
      }
}