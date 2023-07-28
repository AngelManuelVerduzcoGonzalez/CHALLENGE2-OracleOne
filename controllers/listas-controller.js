const acomodarLista = () => {
    const lista = document.querySelector("[data-lista]");
    const ancho = window.innerWidth;
    const hijos = lista.children;
    const numHijos = lista.children.length;

    if(ancho >= 1024){
        
        if(numHijos % 6 == 0){
            lista.classList.add("all-products__lista--full")
            lista.classList.remove("all-products__lista")
        } else {
            lista.classList.remove("all-products__lista--full")
            lista.classList.add("all-products__lista")
        }
    
        for (let i = 0; i < hijos.length; i++) {
            if(i === 0){
                hijos[0].classList.add('all-products__producto--primero')
            }
            if (i % 6 === 0) {
              hijos[i].classList.add('all-products__producto--primero');
            }
        }
    } else if(ancho >= 768) {

        if(numHijos % 4 == 0){
            lista.classList.add("all-products__lista--full")
        } else {
            lista.classList.remove("all-products__lista--full")
        }

        for(let i = 0; i < hijos.length; i++){
            if(i === 0){
                hijos[0].classList.add('all-products__producto--primero')
            }
            if (i % 4 === 0) {
              hijos[i].classList.add('all-products__producto--primero');
            } else {
                hijos[i].classList.remove("all-products__producto--primero")
            }
        }
    } else {

        if(numHijos % 2 == 0){
            lista.classList.add("all-products__lista--full")
        } else {
            lista.classList.remove("all-products__lista--full")
        }

        for(let i = 0; i < hijos.length; i++){
            if(i === 0){
                hijos[0].classList.add('all-products__producto--primero')
            }
            if (i % 2 === 0) {
              hijos[i].classList.add('all-products__producto--primero');
            } else {
                hijos[i].classList.remove("all-products__producto--primero")
            }
        }

    }
}

const acomodarListaHome = (lista) => {

    const ancho = window.innerWidth;
    const hijos = lista.children;

    if(ancho >= 1024) {
        for(let i = 0; i < hijos.length; i++){

            hijos[i].classList.add("articulos__producto")
            hijos[i].classList.remove("artiuclos__producto--primero")

        }
    } else if(ancho >= 768) {

        for(let i = 0; i < hijos.length; i++){

            hijos[i].classList.remove("articulos__producto--primero")

            if(i >= 4){
                hijos[i].classList.add("articulos__producto--hide")
                hijos[i].classList.remove("articulos__producto")
            } else {
                hijos[i].classList.add("articulos__producto")
                hijos[i].classList.remove("articulos__producto--hide")
            }
        }
    } else {

        for(let i = 0; i < hijos.length; i++){

            if(i % 2 === 0){
                hijos[i].classList.add('articulos__producto--primero')
            }

            if(i >= 4){
                hijos[i].classList.add("articulos__producto--hide")
                hijos[i].classList.remove("articulos__producto")
            } else {
                hijos[i].classList.add("articulos__producto")
            }
        }
    }
}

export const listas = {
    acomodarLista,
    acomodarListaHome,
} 