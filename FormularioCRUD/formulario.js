
window.addEventListener('load', () => { 

    let formulario = document.getElementById("formulario");

    let nombre = document.getElementById("nombre");

    let apellidos = document.getElementById("apellidos");

    let dni = document.getElementById("dni");
 
    let email = document.getElementById("email");
    

    function validarFormulario() {

            if (condition) {
                
            }

    }   

    function validarNombre() {

        if (!(nombre.value.length < 2 && nombre.value.lengt > 10)) {
            
            let errorNombre = errorNombre.textcontent = "El nombre no puede ser menor que dos caracteres, ni mayor que 10.";

        }

    }

    nombre.addEventListener(validarNombre);






});
