//conexion con el servidor tomando la lista de héroes, y pasando a formato json
const listaHeroes = () => fetch("https://my-json-server-crud.herokuapp.com/heroes").then((respuesta) => respuesta.json());

const crearProducto = (tipo,nombre,precio,imagen) => {
    return fetch("https://my-json-server-crud.herokuapp.com/heroes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({tipo,nombre,precio,imagen, id:uuid.v4()})
    });
};

const editarProducto = (tipo,nombre,precio,imagen,id) => {
    return fetch(`https://my-json-server-crud.herokuapp.com/heroes/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ tipo, nombre, precio, imagen })
    }).then( () => window.location.href = "/screens/agregado.html" ).catch( () => alert("Ocurrió un error.") );
};

const detalleProducto = (id) => {
    return fetch(`https://my-json-server-crud.herokuapp.com/heroes/${id}`).then((respuesta) => respuesta.json());
};

const eliminarProducto = (id) => {
    return fetch(`https://my-json-server-crud.herokuapp.com/heroes/${id}`, {
        method: "DELETE",
    });
};



export const productServices = {
    listaHeroes,
    crearProducto,
    editarProducto,
    detalleProducto,
    eliminarProducto,
};
