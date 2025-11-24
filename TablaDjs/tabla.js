let edicion = false;
let campoTr; //VARIABLE GLOBAL QUE USAREMOS PARA METER DATOS DENTRO DEL TR
let guardarFila; //VARIABLE GLOBAL PARA GUARDAR EL ESTADO ANTES DE CAMBIAR LOS DATOS DE LA FILA
function modoEdicion(campo) {
    if(edicion == false){
    let campoTd = campo.parentNode; //NODO TD
    campoTr = campoTd.parentNode; // NODO TR
    guardarFila = campoTr.innerHTML; //CON ESTO GUARDAMOS EL ESTADO DE LA FILA SIN RETOCAR
    let contenedorFormulario = document.getElementById('contenedorFormulario'); //OBTIENE DEL ID DEL DIV
    let camposEnTr = campoTr.getElementsByTagName('td'); //OBTIENE TODOS LOS TD DE CADA TR
    let nombre = camposEnTr[0].textContent; //COGE EL CONTENIDO DEL CAMPO NOMBRE
    let pais = camposEnTr[1].textContent; //COGE EL CONTENIDO DEL CAMPO PAIS
    let generoPrincipal = camposEnTr[2].textContent; //COGE EL CONTENIDO DEL CAMPO GENERO PRINCIPAL
    let anoNacimiento = camposEnTr[3].textContent; //COGE EL CONTENIDO DEL CAMPO AÑO NACIMIENTO
    let cambioHtml = //AQUI CREAMOS EL CAMBIO DE LA FILA A UN MODO DE EDICION PONIENDO POR DEFECTO LOS CONTENIDOS DE LOS CAMPOS PREDEFINIDOS
    '<td><input type="text" name="nombre" id="nombre" value="' + nombre + '" size=15px></td>' +
    '<td><input type="text" name="pais" id="pais" value="' + pais + '" size=15px></td>' +
    '<td><input type="text" name="generoPrincipal" id="generoPrincipal" value="' + generoPrincipal + '" size=15px></td>' +
    '<td><input type="text" name="anoNacimiento" id="anoNacimiento" value="' + anoNacimiento + '" size=15px></td>' +
    '<td>En edicion</td>'; //ESTE CAMPO YA NO TIENE LA OPCION DE EDITAR

    campoTr.innerHTML = cambioHtml; //AQUI SUSTITUIMOS LO QUE TENIA LA FILA POR EL MODO EDICION
    contenedorFormulario.innerHTML = //AQUI LE METEMOS UN FORMULARIO AL DIV PARA TENER LA OPCION DE APLICAR LOS CAMBIOS QUE LE HAGAMOS
    //A LA FILA O CANCELAR LA EDICION(CANCELAR AHORA MISMO SOLO RECARGA LA PAGINA, YA LO IMPLEMENTARË BIEN MAS TARDE)
    '<p>Aceptar para Aplicar cambios, cancelar para no aplicar cambios a medias</p>' +
    '<form name="formularito" method="get" onsubmit="aplicarCambios()" onreset="cancelar()">' +
    '<input class="boton" type="submit" value="Aceptar cambios"><input class="boton" type="reset" value="Cancelar cambios">';
    edicion = true; //CON ESTO HABILITAMOS LA OPCION DE EDICION
    }else {
        alert('SOLO PUEDES HACER UN CAMBIO A UNA FILA CAMPEON');
    }
}

function aplicarCambios(){
    let contenedorFormulario = document.getElementById('contenedorFormulario'); //OBTIENE DEL ID DEL DIV
    let nombre = document.querySelector('#nombre').value; //OBTIENE AHORA EL VALOR DE LO QUE HEMOS PUESTO EN LA EDICION DE NOMBRE A TRAVES DE SU ID
    let pais = document.querySelector('#pais').value; //OBTIENE AHORA EL VALOR DE LO QUE HEMOS PUESTO EN LA EDICION DE PAIS A TRAVES DE SU ID
    let generoPrincipal = document.querySelector('#generoPrincipal').value; //OBTIENE AHORA EL VALOR DE LO QUE HEMOS PUESTO EN LA EDICION DE GENERO PRINCIPAL A TRAVES DE SU ID
    let anoNacimiento = document.querySelector('#anoNacimiento').value; //OBTIENE AHORA EL VALOR DE LO QUE HEMOS PUESTO EN LA EDICION DE AÑO NACIMIENTO A TRAVES DE SU ID
    campoTr.innerHTML = //HACEMOS EL CAMBIO DE LOS CAMPOS PARA QUE AHORA SOLO SEAN TEXTO INDEDITABLE CON LOS NUEVOS VALORES APLICADOS
    '<td>' + nombre + '</td>' +
    '<td>' + pais + '</td>' +
    '<td>' + generoPrincipal + '</td>' +
    '<td>' + anoNacimiento + '</td>' +
    '<td><span class="editar" onclick="modoEdicion(this)">Editar</span></td>';
    contenedorFormulario.innerHTML = ""; //PARA QUE NO HAYA COSAS RARAS VOLVEMOS A VACIAR EL DIV PARA QUE NO APAREZCA EL FORMULARIO DESPUES DE HABER APLICADO LOS CAMBIOS
    edicion = false; //Y CON ESTO VOLVEMOS A DESHABILITAR LA EDICION
}
function cancelar(){
   campoTr.innerHTML = guardarFila; //AQUI VOLVEMOS AL ESTADO ANTERIOR GUARDADO EN NUESTRA VARIABLE GLOBAL
   contenedorFormulario.innerHTML = ""; //QUITAMOS EL FORUMLARIO
   edicion = false;// YA VOLVEMOS A LA PARTE DE VISTA SOLO
}