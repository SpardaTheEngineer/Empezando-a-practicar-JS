
window.addEventListener("load", () => {


    //Asigno mis variables guapas

   let contenedor = document.getElementById("contenedor");

   let tabla = document.getElementById("tabla");

   let formulario = document.getElementById("formulario");


   formulario.innerHTML = `
   
   <fieldset>

    <legend>Formulario clientes guapos</legend>

    <br>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" minlength="2" maxlength="10" required><br><br>

    <label for="apellidos">Apellidos:</label>
    <input type="text" id="apellidos" name="apellidos" maxlength="25" required><br><br>

    <label for="dni">DNI:</label>
    <input type="text" id="dni" name="dni" pattern="^[0-9]{8}[A-Z]$" required><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>

    <button id="enviarUsuario" type="submit">Enviar</button>
    <button id="obtenerUsuarios" type="button">Traer usuarios</button>

    </fieldset>
   
   
   `;

    let obtenerUsuarios = document.getElementById("obtenerUsuarios");


   //Enviar usuario
    formulario.addEventListener("submit", (event) => {

        //Prevengo la accion por defecto del submit del formulario
        event.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let apellidos = document.getElementById("apellidos").value.trim();
        let dni = document.getElementById("dni").value.trim();
        let email = document.getElementById("email").value.trim();


        let usu = {

            nombre: nombre,
            apellidos: apellidos,
            dni: dni,
            email: email

        };

        enviarUsuarios(usu);

    })

    //Traer a todos los usuarios
    obtenerUsuarios.addEventListener("click", () => {

        tabla.innerHTML = `
        
            <table> 
               <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>DNI</th>
                    <th>Email</th>
                </tr>
               </thead>
            </table>

        `;
        
        pintarUsuarios();

        
        let volver = document.createElement("a");
        volver.innerHTML = `
        
        <a href="index.html">Volver</a>
        
        `;

        tabla.appendChild(volver);

    })



//----------------------------------FUNCIONES------------------------------------------

    //Funcion de enviar el usuaruio
     async function enviarUsuarios(usu) {

        try {
            
        let respuesta = await fetch("http://localhost:3000/personas", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usu)

        });

            if (!respuesta.ok) {

                throw new Error("Errorrrrr");

            }

            let personas = await respuesta.json();
            console.log(personas);
            alert("Usuario enviado correctamente.");
      
        }

        catch (error) {
            
            console.log("Erorr loco");

        }
        
    }

    //Funcion de traer a los usuarios
    async function pintarUsuarios() {

        try {

            let respuesta = await fetch("http://localhost:3000/personas");
            

                if (!respuesta.ok) {

                    throw new Error("Error en la peticion.");
                    
                
                }

                let personas = await respuesta.json();
                console.log(personas);

                tabla.innerHTML = " ";

                for (let persona of personas) {
                    
                    let elemento = document.createElement("tr")

                    elemento.innerHTML = `
                    
                        <td>${persona.nombre}</td>
                        <td>${persona.apellidos}</td>
                        <td>${persona.dni}</td>
                        <td>${persona.email}</td>

                    `
                
                 tabla.appendChild(elemento);

                }
                
            }
            catch(error) {

                console.error("Error al pintar usuarios:", error);
                tabla.innerHTML = `
                    <tr>
                        <td>Ha ocurrido un error al cargar los usuarios.</td>
                    </tr>
                    `;

            }


    }



});