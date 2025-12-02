document.addEventListener("DOMContentLoaded", () => {

let API_URL = "http://localhost:3000/productos";
let idMayor = 0;

async function cargarProductos() {
    let contenedor = document.getElementById("contenedor");   
    contenedor.innerHTML = "";//Me limpia antes de volver a pintar

    try {
        let respuesta = await fetch ("http://localhost:3000/productos");
        let productos = await respuesta.json();

        let tabla = document.createElement("table");
        tabla.style.borderCollapse = "collapse";

        let thead = document.createElement("thead");
        let filaHead = document.createElement("tr");

        let columnas = ["ID", "Nombre", "Precio", "Categoria", "Stock", "Acciones"];

        columnas.forEach(texto => {
            let th = document.createElement("th");
            th.textContent = texto;
            th.style.border = "1px solid black";
            th.style.padding = "8px";
            filaHead.appendChild(th);
        });

        thead.appendChild(filaHead);
        tabla.appendChild(thead);

        //Creamos el cuerpo
        let tbody = document.createElement("tbody");

        productos.forEach(producto => {
            let fila = document.createElement("tr");

            fila.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.categoria}</td>
            <td>${producto.stock}</td>
            <td></td>

            `;

            if (idMayor < Number.parseInt(producto.id)) {
                idMayor = Number.parseInt(producto.id);
            }

            let celdaAcciones = fila.lastElementChild;

            let botonEditar = document.createElement("button");
            botonEditar.textContent = "editar";

            let botonEliminar = document.createElement("button");
            botonEliminar.textContent = "eliminar";
            botonEliminar.style.marginLeft = "5px";

            botonEditar.onclick = () => editarProducto(producto);
            botonEliminar.onclick = () => eliminarProducto(producto.id);

            celdaAcciones.appendChild(botonEditar);
            celdaAcciones.appendChild(botonEliminar);

            //Le damos estilos a las celdas
            fila.querySelectorAll("td").forEach(td =>{
                td.style.border = "1px solid black"
                td.style.padding = "6px";
            });

            tbody.appendChild(fila);
        });

        tabla.appendChild(tbody);
        contenedor.appendChild(tabla);

    } catch (error) {
        console.error("Error", error);
    }
}

    //Empezamos a editar el producto
    async function editarProducto(producto) {
        let nuevoNombre = prompt("Nuevo nombre", producto.nombre);
        let nuevoPrecio = parseFloat(prompt("Nuevo precio", producto.precio));
        let nuevoStock = parseInt(prompt("Nuevo stock", producto.stock));

        if (!nuevoNombre || isNaN(nuevoPrecio) || isNaN(nuevoStock)) return;

        let actualizado = {
            ...producto,
            nombre: nuevoNombre,
            precio: nuevoPrecio,
            stock: nuevoStock
        };

        await fetch(`http://localhost:3000/productos/${producto.id}`,{
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(actualizado)
        });

        cargarProductos();
    }

    //Funcion Eliminar Productos
    async function eliminarProducto(id) {
        if (!confirm("¿Eliminar este producto?")) return;

            await fetch(`http://localhost:3000/productos/${id}`,{
            method : "DELETE"
        });

        cargarProductos();
    }


        //Funcion Crear Nuevos Productos
    let form = document.getElementById("formProducto");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        let id =  String(1 + idMayor);
        let nombre = document.getElementById("nombre").value;
        let precio = parseFloat(document.getElementById("precio").value);
        let categoria = document.getElementById("categoria").value;
        let stock = parseInt(document.getElementById("stock").value);

        if (!nombre || isNaN(precio) || !categoria || isNaN(stock)) {
            alert("Datos incorrectos");
            return;
        }

        let nuevoProducto = {
            id,
            nombre,
            precio,
            categoria,
            stock
        };

        await fetch ("http://localhost:3000/productos", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(nuevoProducto)
        });

        form.reset();

        cargarProductos();
    });


cargarProductos();

});