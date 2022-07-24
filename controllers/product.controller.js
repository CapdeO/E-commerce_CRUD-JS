//interacción entre html y js

import { productServices } from "../service/product-service.js";


const crearNuevoProducto = (nombre,precio,clase,imagen,id) => {
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
                            <div class="verproducto">
                                <a href="../screens/producto.html?id=${id}">
                                    Ver producto
                                </a>
                            </div>
                        </div>`;
        card.innerHTML = contenido;
        return card;
};

const productos = document.querySelector(".productos");


productServices.listaHeroes().then((data) => {
    data.forEach( ({nombre,precio,clase,imagen,id}) => {
        const nuevoProducto = crearNuevoProducto(nombre,precio,clase,imagen,id);
        productos.appendChild(nuevoProducto);
    });
}).catch((error) => alert("Ocurrió un error"));








