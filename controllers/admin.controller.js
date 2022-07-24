import { productServices } from "../service/product-service.js";


const crearProductoAdmin = (nombre,precio,clase,imagen,id) => {
    const card = document.createElement("div");
    const contenido = `<div class="producto">
                            <div class="imagenproducto">
                                <img class="imagen" src="${imagen}">
                            </div>
                            <div class="tituloproducto">
                                ${nombre}
                            </div>
                            <div class="precioproducto">
                                ${precio} BNB
                            </div>
                            <div class="btnEditar">
                                <a href="../screens/editar.html?id=${id}">
                                    <button class="" type="button" id="${id}">
                                    Editar
                                </a>
                            </div>
                            <div class="btnEliminar">
                                <button class="btn" type="button" id="${id}">
                                Eliminar
                            </button>
                            </div>
                            <div class="verproducto">
                                <a href="../screens/editar_cliente.html?id=${id}">
                                    Ver producto
                                </a>
                            </div>
                        </div>`;
                        card.innerHTML = contenido;
                        const btn = card.querySelector(".btn");
                        btn.addEventListener("click", () => {
                            const id = btn.id;
                            productServices.eliminarProducto(id).then( () => {
                                alert("Eliminado.")
                            }).catch( () => alert("Error."));
                        });
                        return card;       
};

const productos = document.querySelector(".productos");


productServices.listaHeroes().then((data) => {
    data.forEach( ({nombre,precio,clase,imagen,id}) => {
        const nuevoProducto = crearProductoAdmin(nombre,precio,clase,imagen,id);
        productos.appendChild(nuevoProducto);
    });
}).catch((error) => alert("Ocurrió un error"));