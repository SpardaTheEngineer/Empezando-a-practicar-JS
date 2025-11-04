
//Ejercicio del puzzle facilito:

window.addEventListener('load', () => {

//-------------------------------Boton para reiniciar:--------------------------------------------

    //Nada que comentar, lee el codigo coño, no van a poner instrucciones en el champu.
    let divBotonReiniciar = document.getElementById("botonReiniciar");

    let botonReiniciar = document.createElement('button');

    botonReiniciar.addEventListener('click', () => {

        location.reload();

    });

    botonReiniciar.innerHTML = "Reiniciar";

    divBotonReiniciar.appendChild(botonReiniciar);

//-------------------------------------------------------------------------------------------------


//-------------------------------Creamos la tabla:-------------------------------------------------

//Aqui no hace falta explicar nada tampoco
let tabla = document.getElementById("tablero");

let table = document.createElement('table');

let piezaArrastra = null; //Variable global, cada dia yo te quiero mas, djobi djobi djobi djoba... 

//Añadimos la tablica 
tabla.appendChild(table);


//Tabla made by Juan Pedro, dinamica niño, dos for anidados pa que nos vamos a marear la cabeza.

for (let fila = 0; fila < 3; fila++) {

    let tr = document.createElement('tr');
    
    for (let columna = 0; columna < 3; columna++) {

        let td = document.createElement('td');
        
        //Le ponemos una clase a las celdas pa dejarlas niquelas en el css
        td.classList.add('celda');
        tr.appendChild(td);


        //Añado lo eventicos del draggable al soltar encima del cuadrado

        td.addEventListener("dragover",(ev)=>{

            ev.preventDefault(); 

        });

        td.addEventListener("drop",(ev)=>{

            ev.preventDefault(); 

            //Aqui igual si que hay que comentar que hay que usar el current target
            //porque si no no se engancha la pieza...
            //El current te garantiza que siempre estas apuntando al td entero,
            //y asi al soltar cae dentro 100%, porque el target solo es literalmente
            //donde esta el pulsor, corrigeme si me equivoco.
            ev.currentTarget.appendChild(piezaArrastra);

        });

    }
    
    //Añadimos la tablica
    table.appendChild(tr);
    
}

//-------------------------------------------------------------------------------------------------


//------------------------Añadimos eventos del draggable a las fotos:------------------------------

//Importante y toca pelotas al seleccionar el elemento en este caso poner > div
//prueba a ver que pasa si no lo pones JAJAJAJ.

let todosLosTrocicos = document.querySelectorAll('#trozos > div');

//Aqui, en vez de tener que ir foto por foto añadiendo los eventos, 
//ps un for each coño.

//(Ya se que a Juan Pedro le gustan mas los for of)
todosLosTrocicos.forEach((trozo) => {

   trozo.addEventListener('dragstart', () => {

    //Igualamos no? si no pa que hemos hecho el for each
    piezaArrastra = trozo;             

  });

  trozo.addEventListener('dragend', () => {

    //Al soltar volvemos a dejar la pieza vacia y asi desaparece
    //fooogmidable foooooooogmidable.
    piezaArrastra = null;    

  });

});

//-------------------------------------------------------------------------------------------------


}); 


//--------------------------------------------Fin--------------------------------------------------