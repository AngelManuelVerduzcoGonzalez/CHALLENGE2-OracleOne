const obtenerUsuarios = () => {
    return fetch("http://localhost:3000/perfil").then( (respuesta) => respuesta.json())
}

const obtenerProductos = () => {
    return fetch("http://localhost:3000/producto").then( (respuesta) => respuesta.json() )
}

const agregarProducto = (url, nombre, categoria, precio, descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, nombre, categoria, precio, descripcion, id: uuid.v4()})
    })
    .then((respuesta) => respuesta)
    .catch(err => console.log(err))
}; 

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE",
    })
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then( (respuesta) => respuesta.json())
}

const actualizarProducto = (url, nombre, categoria, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, nombre, categoria, precio, descripcion})
    })
    .then((respuesta) => respuesta)
    .catch(err => console.log(err))
}

export const clientServices = {
    obtenerUsuarios,
    obtenerProductos,
    agregarProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
}