const obtenerUsuarios = () => {
    return fetch("https://alurageek-c1613-default-rtdb.firebaseio.com/perfil").then( (respuesta) => respuesta.json())
}

const obtenerProductos = () => {
    return fetch("https://alurageek-c1613-default-rtdb.firebaseio.com/producto").then( (respuesta) => respuesta.json() )
}

const agregarProducto = (url, nombre, categoria, precio, descripcion) => {
    return fetch("https://alurageek-c1613-default-rtdb.firebaseio.com/producto", {
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
    return fetch(`https://alurageek-c1613-default-rtdb.firebaseio.com/producto/${id}`, {
        method: "DELETE",
    })
}

const detalleProducto = (id) => {
    return fetch(`https://alurageek-c1613-default-rtdb.firebaseio.com/producto/${id}`).then( (respuesta) => respuesta.json())
}

const actualizarProducto = (url, nombre, categoria, precio, descripcion, id) => {
    return fetch(`https://alurageek-c1613-default-rtdb.firebaseio.com/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, nombre, categoria, precio, descripcion})
    })
    .then((respuesta) => respuesta)
    .catch(err => console.log(err))
}

const detalleCoincidencia = (nombre) => {
    return fetch(`https://alurageek-c1613-default-rtdb.firebaseio.com/producto/${nombre}`).then( (respuesta) => respuesta.json())
}

export const clientServices = {
    obtenerUsuarios,
    obtenerProductos,
    agregarProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
    detalleCoincidencia,
}