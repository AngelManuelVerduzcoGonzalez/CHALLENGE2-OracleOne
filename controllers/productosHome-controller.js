import { clientServices } from "../service/client-service.js";
import { listas } from "./listas-controller.js";

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
        if(lista.children.length < 6){
            const nuevoProducto = mostrarProducto(producto.url, producto.nombre, producto.precio);
            lista.appendChild(nuevoProducto)
            listas.acomodarListaHome(lista);
        }
    })
})
.catch(err => {
    console.log(err)
});


// Codigo para la barra de busqueda//

const search = document.querySelector("[data-search]");

search.addEventListener("click", () => {
        const input = document.querySelector('[data-input]').value;
        window.location.href = `search-product.html?search=${input}`
    });


function barraBusqueda() {
    if(window.innerWidth < 768){
        const icon = document.querySelector(".header__busqueda--oculto")
        const input = document.querySelector(".header__input")
        const button = document.querySelector(".header__boton")
        icon.style.display = "inline"
        search.style.display ="none"
        input.style.display = "none"
        button.style.display = "inline"

        icon.addEventListener("click", () => {
            icon.style.display = "none"
            search.style.display = "inline"
            input.style.display = "inline"
            button.style.display = "none"
            input.focus();
        });
        
        input.addEventListener("blur", () => {
            setTimeout(() => {
                icon.style.display = "inline"
                search.style.display = "none"
                input.style.display = "none"
                button.style.display = "inline"
            }, 100)
        })
    } else {
        const icon = document.querySelector(".header__busqueda--oculto")
        const input = document.querySelector(".header__input")
        const button = document.querySelector(".header__boton")
        icon.style.display = "none"
        input.style.display = "inline"
        button.style.display = "inline"
        search.style.display = "inline"
    }
}

window.addEventListener("resize", barraBusqueda);



//Codigo para acomodar listas 
window.addEventListener("resize", ajustarCategorias);

function ajustarCategorias() {
    categorias.forEach((categoria) => {
        listas.acomodarListaHome(categoria);
    });
}

