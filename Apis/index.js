
window.addEventListener("load", () => {
    
    const tablaDiv = document.getElementById('tabla');
    const modal = document.createElement('dialog');
    modal.innerHTML = `<h1>Introduce el numero de objetos que quieres mostrar en la tabla: </h1>
                         <br> <input type="number" id="numero"></input>   
                         <input type="button" value="Aceptar" id="boton"></input> ` ;

    tablaDiv.appendChild(modal);
    modal.setAttribute("open","open");
    modal.style.textAlign = 'center';

    const aceptar = document.getElementById("boton");
    aceptar.addEventListener("click", hacerCosas);
    aceptar.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            hacerCosas();
        }
    });

    const numero = document.getElementById("numero");

    function hacerCosas() {
        
    fetch('https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/50902?nult=5')

    .then(response => {

        if (response.ok) {

            console.log(response)
            return response.json();

        }
 
    }
        
        
    )
    .then(datos => {

        console.log("hola");
        let objeto = datos[numero.value];
        console.log(numero.value);
        console.log(objeto);
        
        
    
        const tablica = document.createElement('table');
        


        let tr = document.createElement('tr');
    
            for (let prop in objeto) {

                if (objeto[prop] instanceof Array){

                    console.log("es un array");
                    for (subObjeto of objeto[prop]){
                    for (subDato in subObjeto) {
                        
                        let celda = document.createElement("td");
                        celda.innerHTML=`${subDato}: ${subObjeto[subDato]}`;
                        tr.appendChild(celda);
                        
                    }
                } 
                }else{

                let celda = document.createElement("td");
                celda.innerHTML=`${prop}: ${objeto[prop]}`;
                tr.appendChild(celda);
                
                }

            }

            tablica.appendChild(tr); 
             
            tablica.appendChild(tr); 


            //Poner en Negrita
             
            let botonNegrita = document.createElement('button');

            botonNegrita.innerHTML = `<input type="button" value="Poner en negrita" id="botonNegrita"></input> ` ;

            tablica.appendChild(botonNegrita);
         
            botonNegrita.addEventListener("click", (e) => {

                tablica.style.fontWeight = 'bold';

            });

          

 
            


        
        tablica.setAttribute("border", "2")
        tablaDiv.innerHTML = "";
        tablaDiv.appendChild(tablica);
      

    })
    .catch(error => {
        console.error('Error:', error);
    });

    }

    numero.focus();



})