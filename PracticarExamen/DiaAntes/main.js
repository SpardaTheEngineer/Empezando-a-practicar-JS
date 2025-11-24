window.addEventListener("load", () => {


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

    






});