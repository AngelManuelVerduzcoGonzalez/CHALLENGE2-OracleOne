import { clientServices } from "../service/client-service.js"
import { listas } from "./listas-controller.js";
import { toasts } from "./toast-controller.js";

const lista = document.querySelector("[data-lista]");
var coincidencias = [];

const buscarProducto = async () => {
    const url = new URL(window.location);
    const busqueda = url.searchParams.get("search");
    const titulo = document.querySelector("[data-titulo]");
    const nombres = [];

    try {

        titulo.innerHTML = `Resultados para: "${busqueda}"`;

        const productos = await clientServices.obtenerProductos();
        for(let i = 0; i < productos.length; i++){
            nombres.push(productos[i].nombre);
        }
        for(let i = 0; i < nombres.length; i++){
            if(nombres[i].toLowerCase().includes(busqueda.toLowerCase())){
                coincidencias.push(nombres[i]);
            }
        }
        if(coincidencias.length == 0){
            throw new Error();
        }

        productos.forEach(producto => {
            for(let i = 0; i < coincidencias.length; i++){
                if(producto.nombre == coincidencias[i]){
                    const nuevoProducto = mostrarProducto(producto.url, producto.nombre, producto.precio);
                    lista.appendChild(nuevoProducto);
                }
            }
        })        
    } catch(error){
        toasts.mostrarErrorToast("No se encontro ninguna coincidencia con tu busqueda");
    }
    
}

buscarProducto();


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



// Codigo para la barra de busqueda//

const search = document.querySelector("[data-search]");

search.addEventListener("click", () => {
        const input = document.querySelector('[data-input]').value;
        window.location.href = `search-product.html?search=${input}`
    });


function barraBusqueda() {
    if(window.innerWidth < 768) {
        const icon = document.querySelector(".header__busqueda--oculto");
        const input = document.querySelector(".header__input");
        icon.style.display = "inline"
        search.style.display = "none"
        input.style.display = "none"

        icon.addEventListener("click", () => {
            icon.style.display = "none"
            search.style.display = "inline"
            input.style.display = "inline"
            input.focus();
        });
        
        input.addEventListener("blur", () => {
            setTimeout(() => {
                icon.style.display = "inline"
                search.style.display = "none"
                input.style.display = "none"
            }, 100) 
        })
    } else {
        const icon = document.querySelector(".header__busqueda--oculto");
        const input = document.querySelector(".header__input");
        icon.style.display = "none"
        search.style.display = "inline"
        input.style.display = "inline"
    }
}

window.addEventListener("resize", barraBusqueda);
 

// Acomodar estilos de la lista
window.addEventListener("resize", listas.acomodarLista);




