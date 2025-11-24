window.addEventListener("load", () => {

let galeria = document.getElementById("Galeria");

let imagenes = [];

traerFotos();

    async function traerFotos() {
        console.log("Entra");
        try {

            let respuesta = await fetch("https://picsum.photos/v2/list?page=2&limit=18");

            if (!respuesta.ok) {

                throw new Error("Error al traer las imagenes");
                
            }

            imagenes = await respuesta.json();

            console.log(imagenes);

            for (let imagen of imagenes) {
                
                let fotico = document.createElement("img");

                fotico.style.margin = "20px";

                fotico.src = `https://picsum.photos/id/${imagen.id}/150/150`;
                fotico.alt = imagen.title;

                fotico.addEventListener("mouseenter", () => {

                fotico.style.transform = "scale(1.2)";
                fotico.style.transition = "transform 0.3s";

                setTimeout(() => {

                    fotico.style.transform = "scale(1)";

                }, 900);

            })

                galeria.appendChild(fotico);

            }

           
            
        } catch (error) {
            
            console.error("Algo has liao", error);
            galeria.innerHTML = `
            
            <h2>El programador no sabe hacer su trabajo, y tu no vas a recicbir tus imagenes.</h2>
            
            `;

        }



    }




});