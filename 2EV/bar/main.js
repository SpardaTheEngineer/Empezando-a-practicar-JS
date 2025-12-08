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

//----------------------Boton de ver comandas---------------------------
    
    let botonVerComandas = document.getElementById("comandas")

    let botonComandas = document.createElement("img");

    botonComandas.src = "/asserts/comandas.png";
    botonComandas.style.width = "40px";
    botonComandas.style.marginLeft = "-5px";
    botonComandas.style.marginTop = "5px";

    botonVerComandas.appendChild(botonComandas);

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
    botonAñadirMesa.addEventListener("click", (e) => {
             
        modal.showModal();

        //creamos la mesa
        let mesa = document.createElement("img");
        mesa.classList.add("mesa");

        //BOTON ACEPTARRRRR
        let btnAceptar = document.getElementById("btnAceptar");
        let btnCancelar = document.getElementById("btnCancelar");

        btnAceptar.addEventListener("click", (e) => {
            e.preventDefault();
            //el numero de comens
            let personas = document.getElementById("numComensales").value.trim();

            if (personas <= 2) {
                mesa.src = "/asserts/mesa2.png";
            } else if (personas <= 4 && personas > 2) {
                mesa.src = "/asserts/mesa4.png";
            } else {
                alert("Sois demasiados llama a la camarera y juntar dos mesas");
                return;
            }

            modal.close();

            // pintamos la mesa
            ponerMesa.appendChild(mesa);

            // eitar menú contextual sobre la mesa
            mesa.addEventListener("contextmenu", (e) => { 
                
                e.preventDefault();
            
            });

//----------------------------------------------------------------------------------

//--------------------------Numero y pedidos de la mesa----------------------------------

            //Ahora te voy a pedir el numero de mesa y la comanda, 
            // las cuales almacenaremos en una variable

            let numeroMesa;
            let comanda;
            let listaComandas = [];

            mesa.addEventListener("click", (e) => { 
                
                e.preventDefault();

                if (numeroMesa != null) {

                    alert("Número de mesa: " + numeroMesa);

                }else {

                numeroMesa = prompt("Indica el número de mesa:");

                }

                mesa.alt = numeroMesa;

                comanda = prompt("Indica la comanda para esta mesa:");

                if (comanda != null) {

                    listaComandas = JSON.parse(localStorage.getItem("mesa_" + numeroMesa)) || [];

                    listaComandas.push(comanda);

                    localStorage.setItem("mesa_" + numeroMesa, JSON.stringify(listaComandas));
                    
                    alert("La mesa " + numeroMesa + " ha pedido hasta ahora: \n" + listaComandas.join("\n"));
                    
                }else {

                    alert("Comanda para la mesa: " + comanda);
                    
                };
            
            });

//-----------------------------------------------------------------------------

//----------------------------Limpiar la mesa----------------------------------------

            //Ahora vamos a limpiar la mesica con el boton de la rueda del raton pa dentro

            mesa.addEventListener("mousedown", function(e) {

                if (e.button === 1) {

                    e.preventDefault();

                    if (confirm("¿Quieres limpiar la mesa " + numeroMesa + "?")) {

                        localStorage.removeItem("mesa_" + numeroMesa);

                    }

                }

            });

//-----------------------------------------------------------------------------

//----------------------------Ver comandas----------------------------------------

        botonComandas.addEventListener("click", (e) => {

            console.log(listaComandas);
            e.preventDefault();

            for (let elemento of listaComandas) {
                    
            let comandos = document.createElement("dialog");

            comandos.innerHTML = `
    
            <h2>Aqui estan todos los comandos de todas las mesas</h2>

            <br><br>

            <ul>

                <li>Mesa ${numeroMesa}: </li>
                <li>${elemento}</li>
   
            </ul>

            <button id="btnCerrar">Cerrar</button>

            `;

            let btnCerrar = comandos.querySelector("#btnCerrar");
            botonVerComandas.appendChild(comandos);

            comandos.showModal();

            btnCerrar.addEventListener("click", (e) => {

                e.preventDefault();

                comandos.close();
                
            });

            }

        });



//-----------------------------------------------------------------------------

//-----------------------------Mover la mesa----------------------------------

            mesa.draggable = false;

            // ARRASTRE CON CLIC DERECHO
            let dragging = false;
            let offsetX = 0;
            let offsetY = 0;

            function onMouseMove(e) {
                if (!dragging) return;
                e.preventDefault();
                mesa.style.left = (e.clientX - offsetX) + "px";
                mesa.style.top = (e.clientY - offsetY) + "px";
            }

            function onMouseUp(e) {
                if (e.button === 2) dragging = false;
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            }

            mesa.addEventListener("mousedown", function(e) {
                if (e.button === 2) {
                    e.preventDefault();
                    dragging = true;
                    // usar offsetLeft/offsetTop más simples
                    offsetX = e.clientX - mesa.offsetLeft;
                    offsetY = e.clientY - mesa.offsetTop;
                    document.addEventListener("mousemove", onMouseMove);
                    document.addEventListener("mouseup", onMouseUp);
                }
            });
        }, { once: true });

        btnCancelar.addEventListener("click", (e) => {
            e.preventDefault();
            modal.close();
        }, { once: true });



    //----------------------------------------------------------------------

      });  

    });

