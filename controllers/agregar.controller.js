import { productServices } from "../service/product-service.js";
const formulario = document.querySelector(".agregarProducto");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const tipo = document.querySelector("#tipo").value;
    const nombre = document.querySelector("#nombre").value;
    const precio = document.querySelector("#precio").value;
    const imagen = document.querySelector("#imagen").value;
    productServices.crearProducto(tipo,nombre,precio,imagen,).then( () => {
        window.location.href = "/E-commerce_CRUD-JS/screens/admin.html"
    }).catch( err => console.log(err));
});
