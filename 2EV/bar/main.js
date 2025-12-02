window.addEventListener("load", () =>  {

    //Donde va a aparecer la mesa
    let ponerMesa = document.getElementById("ponerMesa");

//----------------------Boton de añadir mesa---------------------------
    
    let botonAñadir = document.getElementById("botonAñadirMesa")

    let botonAñadirMesa = document.createElement("img");

    botonAñadirMesa.src = "/bar/asserts/BotonAñadir.png";
    botonAñadirMesa.style.width = "30px";

    botonAñadir.appendChild(botonAñadirMesa);

//----------------------------------------------------------------------

//----------------------Añadir la mesa----------------------------------

    let mesa = document.createElement("img");

    let pinchada = false;

    mesa.src = "/bar/asserts/mesa.png";
    mesa.style.width = "70px";
    mesa.classList.add("mesa");
    
    botonAñadir.addEventListener("mousedown", (e) => {

        if (e.button==2){
            pinchada = true;
        });

        ponerMesa.appendChild(mesa);

    //----------------------Mover la mesa----------------------------------

    if (pinchada) {
        
    
        mesa.addEventListener("mousemove", (e) => {

            mesa.style.top = e.clientY + "px";
            mesa.style.left = e.clientX + "px";

        });

    }else {

        mesa.addEventListener("mouseout", (e) => {



        });


    }

    //----------------------------------------------------------------------


   

//----------------------------------------------------------------------











});