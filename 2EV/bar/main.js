window.addEventListener("load", () =>  {

    //Donde va a aparecer la mesa
    let ponerMesa = document.getElementById("ponerMesa");

//----------------------Boton de añadir mesa---------------------------
    
    let botonAñadir = document.getElementById("botonAñadirMesa")

    let botonAñadirMesa = document.createElement("img");

    botonAñadirMesa.src = "/asserts/BotonAñadir.png";
    botonAñadirMesa.style.width = "30px";

    botonAñadir.appendChild(botonAñadirMesa);

//----------------------------------------------------------------------

//----------------------Añadir la mesa----------------------------------

    let modal = document.createElement("dialog");

    modal.innerHTML = `
    
    <h2>Indica el número de comensales</h2>

    <input 
        type="number" 
        id="numComensales" 
        placeholder="Indica el numero aqui..."
        min="1"
    >

    <br><br>

    <button id="btnAceptar">Aceptar</button>
    <button id="btnCancelar">Cancelar</button>

    `;

    let ventanaModal = document.getElementById("ventanaModal");

    ventanaModal.appendChild(modal);

    let pinchada = false;

    let x;
    let y;

    //EMPEZAR
    botonAñadir.addEventListener("click", (e) => {
     
        pinchada = true;
        
        modal.showModal();

        //creamos la mesa
        let mesa = document.createElement("img");
        mesa.classList.add("mesa");

        //BOTON ACEPTARRRRR
        let btnAceptar = document.getElementById("btnAceptar");

        btnAceptar.addEventListener("click", (e) => {

            //el numero de comens
            let personas = document.getElementById("numComensales").value.trim();

            console.log(personas);
            if (personas <= 2) {
            
            mesa.src = "/asserts/mesa2.png";

            }else if (personas <= 4 && personas > 2) {
            
            mesa.src = "/asserts/mesa4.png";

            }else {

                alert("Sois demasiados llama a la camarera y juntar dos mesas");

            }

            modal.close();

        //pintamos la mesa
        ponerMesa.appendChild(mesa);

        });


        //Comprobamos el numero de comens e imponemos una imagen u otra
        

    });


    //----------------------Mover la mesa----------------------------------

        mesa.addEventListener("mosuedown", (e) => {

            if (e.button === 2) {
                
                pinchada = true;
                x = e.clientX - mesa.offsetLeft;
                y = e.clientY - mesa.offsetRight;
            }

        });

        mesa.addEventListener("mosuemove", (e) => {

            



        });
    

 

    //----------------------------------------------------------------------


   

//----------------------------------------------------------------------











 });