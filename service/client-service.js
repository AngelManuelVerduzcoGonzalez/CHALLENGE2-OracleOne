const autenticarUsuario = () => {
    return fetch("http://localhost:3000/perfil").then( (respuesta) => respuesta.json())
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

export const clientServices = {
    autenticarUsuario,
    agregarProducto,
}