import { productServices } from "../service/product-service.js";


const crearProductoAdmin = (nombre,precio,clase,imagen,id) => {
    const card = document.createElement("div");
    const contenido = `<div class="producto">
                            <div class="imagenProducto">    
                                <img class="imagen" src="${imagen}">
                                <div class="botonera">
                                    <a href="../screens/editar.html?id=${id}">
                                        <img class="editBtn" src="../assets/img/edit.png">
                                    </a>
                                
                                    <img class="deleteBtn" src="../assets/img/delete.png" id="${id}">
                                    
                                </div>
                                
                            </div>
                            <div class="tituloProducto">
                                ${nombre}
                            </div>
                            <div class="precioProducto">
                                ${precio} BNB
                            </div>
                    
                            <div class="verProducto">
                                <a href="../screens/editar_cliente.html?id=${id}">
                                    Ver producto
                                </a>
                            </div>
                        </div>`;
                        card.innerHTML = contenido;
                        const btn = card.querySelector(".deleteBtn");
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
