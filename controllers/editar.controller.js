import { productServices } from "../service/product-service.js";

const formulario = document.querySelector("#editar");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null) {
        window.location.href = "/screens/error.html";
    }

    const tipo = document.querySelector("#tipo");
    const nombre = document.querySelector("#nombre");
    const precio = document.querySelector("#precio");
    const imagen = document.querySelector("#imagen");

    try {
        const producto = await productServices.detalleProducto(id);
        if(producto.nombre && producto.precio) {
            tipo.value = producto.tipo;
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            imagen.value = producto.imagen;
        } else {
            throw new Error();
        }
    } catch (error) {
        
    }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const tipo = document.querySelector("#tipo").value;
    const nombre = document.querySelector("#nombre").value;
    const precio = document.querySelector("#precio").value;
    const imagen = document.querySelector("#imagen").value;
    productServices.editarProducto(tipo, nombre, precio, imagen, id).then(() => {
        window.location.href = "/screens/admin.html";
    });
});