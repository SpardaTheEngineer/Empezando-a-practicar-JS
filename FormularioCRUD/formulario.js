
window.addEventListener('load', () => { 

    let formulario = document.getElementById("formulario");

    let nombre = document.getElementById("nombre").value;

    let apellidos = document.getElementById("apellidos").value;

    let cdni = document.getElementById("dni");

    let dni = cdni.value;
 
    let email = document.getElementById("email").value;
    

    let enviar = document.getElementById("enviar");

    
    cdni.addEventListener("change", ()=> {

        verificarDNI(dni);

    });

   

    enviar.addEventListener('click', function(event) {

        event.preventDefault();
        validarFormulario();

    });

    function validarFormulario() {                
            

    }   


    
    //FUNCION PARA VALIDAR EL DNI:
   function verificarDNI(dni) {
    
    if (dni.length > 0 && dni.length < 9) {
        console.log("TodoJoya");
    }else {
        alert("Debes introducir un Dni valido")
    }


}



});
