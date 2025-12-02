window.addEventListener("load", () => {

let editando = false;

let editarrr = document.getElementsByClassName("editar");

    editarrr.addEventListener("click", (e) => {

        e.preventDefault();
        transformarEnEditable(nodo);

    });


function transformarEnEditable(nodo) {

    //El nodo recibido es SPAN

    if (editando == false) {

        let nodoTd = nodo.parentNode; //Nodo TD

        let nodoTr = nodoTd.parentNode; //Nodo TR

        let nodoContenedorForm = document.getElementById('contenedorForm'); //Nodo DIV

        let nodosEnTr = nodoTr.getElementsByTagName('td');

        let alimento = nodosEnTr[0].textContent; let calorias = nodosEnTr[1].textContent;

        let grasas = nodosEnTr[2].textContent; let proteina = nodosEnTr[3].textContent;

        let carbohidratos = nodosEnTr[4].textContent; let opciones = nodosEnTr[5].textContent;

        let nuevoCodigoHtml = ' <td><input type="text" name="alimento" id="alimento" value="' + alimento + '" size="10"></td>' +

            '<td><input type="text" name="calorias" id="calorias" value="' + calorias + '" size="5"</td>' +

            '<td><input type="text" name="grasas" id="grasas" value="' + grasas + '" size="5"</td>' +

            '<td><input type="text" name="proteina" id="proteina" value="' + proteina + '" size="5"</td>' +

            '<td><input type="text" name="carbohidratos" id="carbohidratos" value="' + carbohidratos + '" size="5"</td> <td>En edición</td>';



        nodoTr.innerHTML = nuevoCodigoHtml;



        nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos' +

            '<form name = "formulario" action="#" method="get" onsubmit="actualizar()" onreset="anular()">' +

            '<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';

        editando = "true";
    }

    else {

        alert('Solo se puede editar una línea. Recargue la página para poder editar otra');

    }

}

function actualizar(){

   codigoActualizado= '<td>'+nodoTr.children[0].children[0].value+'</td>' +

           '<td>'+nodoTr.children[1].children[0].value+'</td>' +

            '<td>'+nodoTr.children[2].children[0].value+'</td>' +

           '<td>'+nodoTr.children[3].children[0].value+'</td>' +

           '<td>'+nodoTr.children[4].children[0].value+'</td>';

    nodoTr.innerHTML = codigoActualizado;

}


function capturarEnvio() {

    let nodoContenedorForm = document.getElementById('contenedorForm'); //Nodo DIV

    nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos' +

        '<form name = "formulario" action="#" method="get" onsubmit="actualizar()" onreset="anular()">' +

        '<input type="hidden" name="alimento" value="' + document.querySelector('#alimento').value + '">' +

        '<input type="hidden" name="calorias" value="' + document.querySelector('#calorias').value + '">' +

        '<input type="hidden" name="grasas" value="' + document.querySelector('#grasas').value + '">' +

        '<input type="hidden" name="proteina" value="' + document.querySelector('#proteina').value + '">' +

        '<input type="hidden" name="carbohidratos" value="' + document.querySelector('#carbohidratos').value + '">' +

        '<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';

    document.formulario.submit();

}




function anular() {

    window.location.reload();

}

});