
window.addEventListener('load', () => { 

    let formulario = document.getElementById("formulario");

    formulario.addEventListener('submit', (event) => {

        event.preventDefault();
        validarFormulario(); 
    
    });
    

    function validarFormulario() {                
            
        let nombre = document.getElementById("nombre").value.trim();

        let apellidos = document.getElementById("apellidos").value.trim();

        let cdni = document.getElementById("dni");

        let dni = cdni.value.trim().toUpperCase();
 
        let email = document.getElementById("email").value.trim();

        let usu = {

            nombre: nombre,
            apellidos: apellidos,
            dni: dni,
            email: email

        };

        guardarUsuario(usu);

    }   

     function guardarUsuario(usu) {

        fetch("http://localhost:3000/usuarios", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usu)
        })
        .then(respuesta => {

            return respuesta.json();

        })
        .then(data => {

            alert("Usario guardao");

        })
        .catch(err => {

            console.error("Que haces bobo", err)

        });

     }


});
