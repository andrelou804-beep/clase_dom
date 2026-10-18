const inputnombreProducto = document.querySelector("#nombreProducto");
const inputprecioProducto = document.querySelector("#precioProducto");
const btnagregar = document.querySelector("#btnAgregar");
const contenedor = document.querySelector("#productos");
btnagregar.addEventListener("click", function () {
    const nombreProducto = inputnombreProducto.value.trim();
    const precioProducto = inputprecioProducto.value.trim();
    if (nombreProducto === "" || precioProducto === "") {
        alert("Por favor completa ambos campos antes de agregar el producto.");
        return;
    }
    const tarjeta = document.createElement("div");
    const nombreProductotarjeta = document.createElement("p");
    const precioProductotarjeta = document.createElement("p");
    const BotonEliminar = document.createElement("button");
    BotonEliminar.textContent = "Eliminar";
    nombreProductotarjeta.textContent = "Nombre: " + nombreProducto;
    precioProductotarjeta.textContent = "Precio: $" + precioProducto;
    BotonEliminar.addEventListener("click", function () {
        tarjeta.remove();
    });
    tarjeta.appendChild(nombreProductotarjeta);
    tarjeta.appendChild(precioProductotarjeta);
    tarjeta.appendChild(BotonEliminar);
    contenedor.appendChild(tarjeta);
    inputnombreProducto.value = "";
    inputprecioProducto.value = "";

});