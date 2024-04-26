/**
 * 
 */

let baseDatos = [];


/* Funcion encargado de la opertiva de añadir todos los datos del usuario a la base de datos (ARRAY)*/ 
function aniadirEnvio() {


// Seccion que solicita al usuario todos los datos necesarios.

	let nombreCliente = prompt("Nombre Cliente: "); 

	let costeEnvio = prompt("Cost Envio");
	let diaRecibido = prompt("Dia Recibido");
	let mes = prompt("Mes Recibido");
	let anio = prompt("Año Recibido");
	
////////////////////////////////////////////////////////////////
	
	
// Seccion encargado de calcular si el dia del mes es mayor a 30, el mes aumenta en 1, y calcula los dias restantes.
	diaRecibido = Number(diaRecibido);
	mes = Number(mes);


	let fechaCompleto = diaRecibido + "/" + mes + "/" + anio;

	costeEnvio += "€";

	let diaNuevo = diaRecibido;
	let mesNuevo = mes;
	if ((diaNuevo +5) > 30) {

		mesNuevo += 1;
		diaNuevo = Math.abs(diaRecibido -30 +5 );
		
	}


	else if((diaNuevo+5) < 30) {
		
		diaNuevo= diaNuevo+5;
	}

/////////////////////////////////////////////////////////////////////////////



// Seccion de concatenar todos el dia, mes y año de la fecha de entrega.
	let fechaSalia = diaNuevo + "/" + mesNuevo + "/" + anio;


// Seccion de añadir todos los campos del cliente a la base de datos.
	baseDatos.push(nombreCliente);
	baseDatos.push(costeEnvio);
	baseDatos.push(fechaCompleto);
	baseDatos.push(fechaSalia);



// Seccion encargado de la concatenacion de todos los campos, recorriendo toda la base de datos. Y mostrandola en un dia en el HTML.
	let cna = " ";
	
	
	for (let i = 0; i < baseDatos.length; i++) {

		cna += "Nombre: " + baseDatos[i]  + " " + "Coste:  " + baseDatos[i + 1] + " " + "fechaEntrega:" + baseDatos[i + 2]  + " " + "fechaSalida: " + baseDatos[i + 3] + "<br>";
	 
	 i=i+3
	}
	



	document.getElementById(id = "todo").innerHTML = cna;
/////////////////////////////////////////////////////////////////////////////


}


// Funcion de solicitar al cliente el nombre del cliente.
function eliminarEnvio() {


	let usuarioEliminado = prompt("Nombre de usuario a eliminar");
	
// Seccion en la que recorre todas las posiciones de la base de datos. Y si el nombre introducido, concuerda con uno en la base de datos. Sustituye todos los campos de ese cliente, por valores vacios.

	for (let i = 0; i < baseDatos.length; i++) {

		if (baseDatos[i] == usuarioEliminado) {
			baseDatos[i] = "";
			baseDatos[i + 1] = "";
			baseDatos[i + 2] = "";
			baseDatos[i + 3] = "";

		}

		
	}


// Seccion la cual imprime en un div, todos los clientes, una vez la base de datos ha sido actualizada con los valores del cliente en vacio.
let cna = " ";
	
	
	for (let i = 0; i < baseDatos.length; i++) {

		cna += "Nombre: " + baseDatos[i]  + " " + "Coste:  " + baseDatos[i + 1] + " " + "fechaEntrega:" + baseDatos[i + 2]  + " " + "fechaSalida: " + baseDatos[i + 3] + "<br>";
	 
	 i=i+3
	}
	



	document.getElementById(id = "todo").innerHTML = cna;


}


// Funcion encargada de mostrar el pedido que debe de salir primero.
function colaSalida(){

// Recorre toda la base de datos, buscando el campo de fechaSalida, y lo muestra en la seccion de Proximo Envio.

let arrayFechas = [];

	let cna = " ";
	for (let i = 0; i < baseDatos.length; i++) {

		cna +="fechaSalida: " + baseDatos[i + 3] + "<br>";
		arrayFechas.push(baseDatos[i +3])
	 
	 i=i+3
	}
	
	document.getElementById(id = "proximoEnvio").innerHTML = cna;
	
	
	
	
}


