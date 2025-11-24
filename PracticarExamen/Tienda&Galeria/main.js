window.addEventListener("load", () => {

    let url = "http://localhost:3000/productos";

    let tabla = document.getElementById("tabla");

    let añadirProducto = document.getElementById("añadirProducto");

    let formulario = document.createElement("form");

    tabla.innerHTML = `

        <table>
            <tbody>   
              <tr>     
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoria</th>
                <th>Stock</th>                
              </tr>
            </tbody>
        </table>

    `;

    traerProductos();

    //Boton para añadir productos
    let botonAñadir = document.createElement("button");
    botonAñadir.innerHTML = "Añade un producto";

    añadirProducto.appendChild(botonAñadir);

    botonAñadir.style.marginRight = "10px";
    

    botonAñadir.addEventListener("click", (ev) => {

        botonAñadir.style.display = "none";
        ev.preventDefault();
        formulario.innerHTML = `
        
            <fieldset>

            <legend>Formulario añadir producto</legend>

            <br>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" minlength="2" required><br><br>

            <label for="precio">Precio:</label>
            <input type="number" id="precio" name="precio" required><br><br>

            <label for="categoria">Categoria:</label>
            <input type="text" id="categoria" name="categoria" required><br><br>

            <label for="stock">Stock:</label>
            <input type="stock" id="stock" name="stock" required><br><br>

            <button id="enviarProducto" type="submit">Enviar</button>

            </fieldset>
    
        
        `;

        añadirProducto.appendChild(formulario);
    
    });

   
    //Formulario para enviar productos
    formulario.addEventListener("submit" , (e) => {

            e.preventDefault();
            console.log("entra");

            let nombre = document.getElementById("nombre").value.trim();
            let precio = document.getElementById("precio").value.trim();
            let categoria = document.getElementById("categoria").value.trim();
            let stock = document.getElementById("stock").value.trim();

            let producto = {

                nombre: nombre,
                precio: precio,
                categoria: categoria,
                stock: stock

            };

            enviarProducto(producto);

        });



    async function traerProductos() {

        try {

            let respuesta = await fetch(url);

            if (!respuesta.ok) {

                console.error("Error al traer los productos");
                
            }

            let productos = await respuesta.json();

            for (let producto of productos) {
                
                let tr = document.createElement("tr");

             
                tr.innerHTML = `
                
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.categoria}</td>
                    <td>${producto.stock}</td>
                    <td><button class="btn-eliminar"">Eliminar</button></td>
                                
                `;

                let botonEliminar = tr.querySelector(".btn-eliminar");
                botonEliminar.addEventListener("click", (e) => {

                e.preventDefault();
                eliminarProducto(producto.id);
                tr.remove();
                
                });

                tabla.appendChild(tr);

            }

        } catch (error) {
            
                console.error("Error al enviar producto:", error);
                añadirProducto.innerHTML = `
                    <tr>
                        <td>Ha ocurrido un error al traer los productos.</td>
                    </tr>
                    `;

        }

    }

    async function enviarProducto(producto) {
       
        try {
            
            let respuesta = await fetch(url, {

                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)

            });

                if (!respuesta.ok) {
                
                    console.error("ERRORRRR AL ENVIAR PRODUCTO");

            }

            let productoEnviado = await respuesta.json();
            console.log(productoEnviado);

            alert("Producto Enviado");

        } catch (error) {
          
                console.error("Error al enviar producto:", error);
                añadirProducto.innerHTML = `
                    <tr>
                        <td>Ha ocurrido un error al enviar el producto.</td>
                    </tr>
                    `;
            
        }

    }

    // function enviarProducto(producto) {

    //     fetch(url, {
    //
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(producto)
    //
    //     })
    //     .then(respuesta => {
    //    
    //         if (!respuesta.ok) {
    //             throw new Error("Error al enviar el producto");
    //         }
    //
    //         return respuesta.json();
    //     })
    //     .then(productoEnviado => {
    //
    //         console.log("Producto enviado:", productoEnviado);
    //         alert("Producto Enviado");
    //     })
    //     .catch(error => {
    //
    //         console.error("Error al enviar producto:", error);
    //         añadirProducto.innerHTML = `
    //             <tr>
    //                 <td>Ha ocurrido un error al enviar el producto.</td>
    //             </tr>
    //             `;
    //     });
    //     }
        

    async function eliminarProducto(id) {

         try {
            
            let respuesta = await fetch(`http://localhost:3000/productos/${id}`, {

                method: 'DELETE',

            });

                if (!respuesta.ok) {
                
                    console.error("ERRORRRR AL ELIMINAR PRODUCTO");

            }

            console.log(nombreProducto);

        } catch (error) {
          
                console.error("Error al eliminar producto:", error);
                añadirProducto.innerHTML = `
                    <tr>
                        <td>Ha ocurrido un error al eliminar el producto.</td>
                    </tr>
                    `;
            
        }


        
    }

});