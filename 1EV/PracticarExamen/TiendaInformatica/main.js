window.addEventListener("load", () => {

    let url = "http://localhost:3000/productos";

    let añadirProducto = document.getElementById("añadirProducto");

    let mostrarProductos = document.getElementById("mostrarProductos");

    let botonTraerProductos = document.getElementById("traerProductos");

    añadirProducto.addEventListener("submit", (e) => {

        e.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let precio = document.getElementById("precio").value.trim();

        let producto = {

            nombre: nombre,
            precio: precio

        };

        enviarProducto(producto);

    });

    botonTraerProductos.addEventListener("click", () => {
       
        mostrarProductos.innerHTML = `
                
            <table id="tablica"> 
               <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>      
                </tr>
               </thead>
            </table>
                
        `;

        mostrarProductos.style.border = "2px solid black";
        mostrarProductos.style.textAlign = "center";
        mostrarProductos.style.padding = "10px";
        
        mostrarProductos.style.display = "block";

        mostrarProducto();

    });

    let botonLimpiar = document.createElement("button");
        
        botonLimpiar.innerHTML = "Limpiar productos";

        botonLimpiar.addEventListener("click", () => {

            mostrarProductos.innerHTML = " ";
            mostrarProductos.style.display = "none";

        });

        botonLimpiar.style.margin = "10px";
        
        añadirProducto.appendChild(botonLimpiar);

    let botonBorrar = document.createElement("button");
        
        botonBorrar.innerHTML = "Borrar productos";

        botonBorrar.addEventListener("click", () => {

           

        });

        botonBorrar.style.margin = "10px";
        
        añadirProducto.appendChild(botonBorrar);        


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
                
                console.error("Errorr al intentare traer los productos");

            }
            let mandar = await respuesta.json();
            console.log(mandar);

        } catch (error) {
            
            throw new Error("Algo has liao, yo? como que yo, si tu, la habras liao tu que eres el programador no? pues tambien");
            
        }

    }

    async function mostrarProducto() {

        try {

            let respuesta = await fetch(url);

            if (!respuesta.ok) {
                
                console.error("No va");

            }

            let productos = await respuesta.json();
            console.log(productos);

            for (let elemento of productos) {
             
                let tr = document.createElement("tr");

                tr.innerHTML = `

                  <tr>
                    <td>${elemento.nombre}</td>
                    <td>${elemento.precio}</td>
                 </tr>

                `;

                tr.style.border = "2px solid black";
                tr.style.padding = "10px";

                mostrarProductos.appendChild(tr);

            }

       
        } catch (error) {
            
            console.error("Error al pintar usuarios:", error);
                tabla.innerHTML = `
                    <tr>
                        <td>Ha ocurrido un error al cargar los productos.</td>
                    </tr>
                    `;

        }

        
    }




});