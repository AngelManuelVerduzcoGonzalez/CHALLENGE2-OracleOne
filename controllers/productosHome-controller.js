import { clientServices } from "../service/client-service.js";

const mostrarProducto = (url, nombre, precio) => {

    const caja = document.createElement("li");
    caja.classList.add("articulos__producto");

    const contenido = `
        <img src="${url}" alt="Producto" class="articulos__imagen">
        <h4 class="articulos__nombre">${nombre}</h4>
        <p class="articulos__precio">$${precio}</p>
        <p class="articulos__enlace"><a href="" class="articulos__link">Ver producto</a></p>
    `;
    
    caja.innerHTML = contenido;
    
    return caja;
}

const categorias = (document.querySelectorAll("[data-lista]"));
 

clientServices.obtenerProductos()
.then((data) => {
    data.forEach( (producto) => {
        var categoriaEncontrada = ""
        for(let i = 0; i < categorias.length; i++) {
            const categoria = producto.categoria.toLowerCase()
            if(categorias[i].dataset.lista == categoria){
                categoriaEncontrada = categorias[i].dataset.lista
                break;
            }
        }
        const lista = document.querySelector(`[data-lista="${categoriaEncontrada}"]`)
        const nuevoProducto = mostrarProducto(producto.url, producto.nombre, producto.precio);
        lista.appendChild(nuevoProducto)
        acomodarLista(lista);
    })
})
.catch(err => {
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
const acomodarLista = (lista) => {
    const hijos = lista.children;
    const numHijos = lista.children.length;
    console.log(numHijos);

    if(numHijos % 6 == 0){
        lista.classList.add("articulos__lista--full")
    }
    
    for(let i = 0; i < hijos.length; i++){
        if(i > 6){
            hijos[i].classList.add("articulos__producto--hide")
        }
    }

}
