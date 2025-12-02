//Ejercicio del puzzle facilito:

window.addEventListener("load", () => {

//Para cuando haga el fecth lñamar a url directamente
  let url = "https://picsum.photos/450/330";

  let elementoArrastrado = null;

  let botonEmpezar = document.getElementById("botonEmpezar");

  botonEmpezar.addEventListener("click", () => {

    //Empezar el juego, traigo la imagen troceada y pongo display none al boton de empezar.
    traerImagen();

  });

  //-------------------------------Boton para reiniciar:--------------------------------------------

  //Nada que comentar, lee el codigo coño, no van a poner instrucciones en el champu.
  let divBotonReiniciar = document.getElementById("botonReiniciar");

  let botonReiniciar = document.createElement("button");

  botonReiniciar.style.margin = "10px";

  botonReiniciar.addEventListener("click", () => {

    location.reload();

  });

  botonReiniciar.innerHTML = "Reiniciar";

  divBotonReiniciar.appendChild(botonReiniciar);

  //-------------------------------------------------------------------------------------------------

  //-------------------------------Traer imagen:--------------------------------------------

  async function traerImagen() {

    console.log("Entra");
    try {

      botonEmpezar.style.display = "none";

      let respuesta = await fetch(url);

      if (!respuesta.ok) {

        console.error("Errorrrrr");

      }

      let imagen = respuesta.url;

      console.log(imagen);
      console.log("Entra");

//-------------------------------Creamos tablero de juego:--------------------------------------------

      let tableroTrozos = document.getElementById("tableroTrozos");

      tableroTrozos.style.display = "flex";
      tableroTrozos.style.flexWrap = "wrap";

      for (let i = 0; i < 9; i++) {

        let elemento = document.createElement("div");
        elemento.classList.add("trozo");

        elemento.style.width = "150px";
        elemento.style.height = "110px";

        elemento.style.boxSizing = "border-box";


//-----------Codigo de internet  para partir la imagen en trozos------------------
        elemento.style.backgroundImage = `url(${imagen})`;

        const fila = Math.floor(i / 3); // 0,1,2
        const col = i % 3; // 0,1,2

        // mover “la ventana” sobre la imagen
        const x = -col * 150; // 0, -100, -200
        const y = -fila * 110; // 0, -100, -200

        elemento.style.backgroundPosition = `${x}px ${y}px`;
//---------------------------------------------------------------------------------
        // que se pueda arrastrar
        elemento.draggable = true;

        elemento.addEventListener("dragstart", (e) => {

           elementoArrastrado = elemento;
        
        });

        tableroTrozos.appendChild(elemento);

      }

    } catch (error) {

      console.error("Nos hemos ido a la mierda");

    }

  }

  //-------------------------------------------------------------------------------------------------

  //-------------------------------Creamos la tabla:-------------------------------------------------

  let tabla = document.getElementById("tablero");

  let table = document.createElement("table");

  //Añadimos la tablica
  tabla.appendChild(table);

  //Tabla made by Juan Pedro, dinamica niño, dos for anidados pa que nos vamos a marear la cabeza.

  for (let fila = 0; fila < 3; fila++) {

    let tr = document.createElement("tr");

    for (let columna = 0; columna < 3; columna++) {

      let td = document.createElement("td");

      //CSS
      td.style.width = "150px";
      td.style.height = "110px";
      td.style.border = "2px solid black";
      td.style.padding = "0px";
      td.style.margin = "0px";
      td.style.boxSizing = "border-box";
      td.style.overflow = "hidden";


      //Añado lo eventicos del draggable al soltar encima del cuadrado
      td.addEventListener("dragover", (ev) => {

        ev.preventDefault();

      });

      td.addEventListener("drop", (ev) => {

        ev.preventDefault();

        if (!elementoArrastrado) return;

        let piezaDestino = td.firstElementChild;        // lo que hubiera
        let origen = elementoArrastrado.parentElement;  // de dónde viene

        if (!piezaDestino) {
        // casilla vacía → solo movemos
        td.appendChild(elementoArrastrado);

        } else {

        // intercambiamos
        td.replaceChild(elementoArrastrado, piezaDestino);
        origen.appendChild(piezaDestino);

    }

    elementoArrastrado = null;

      });

        tr.appendChild(td);

    }

    //Añadimos a la tablica
    table.appendChild(tr);
  }

//-------------------------------------------------------------------------------------------------

});

//--------------------------------------------Fin--------------------------------------------------
