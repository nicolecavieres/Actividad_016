
/* 1- Crear un input donde el usuario escribirá un color en inglés y un botón. El usuario
al presionar el botón se debe cambiar el color de la página al color especificado.*/

var texto="";
 	$("#textColor").val(texto);

 $("#BotonCambio").click( function(){
 	texto= $("#textColor").val().toLowerCase();
 	$("body").css("backgroundColor", texto);
 	if(texto == "black"){
 		$("body").css("color", "white");
 	}
 });



/* 2- Crear dos input y un botón, el usuario debe ingresar su altura en uno de los
inputs y el peso en el otro, se debe mostrar un mensaje con IMC resultante, si es
normal, mostrar en verde, si es alto o bajo mostrar en rojo.*/

var peso="";
 	$("#peso").val(peso);
var altura="";
 	$("#altura").val(altura);


 $("#calcularIMC").click( function(){

 	peso = parseFloat($("#peso").val());
 	altura = parseFloat($("#altura").val());
 	calculo = peso /(altura * altura);

 	$("#subt").text("Tu imc es:");
 	$("#imc").text(calculo.toFixed(2));

 	if (calculo > 24){
 		$("#resultado").text("Tienes sobrepeso").css("color", "red");
	} 
	else if (calculo > 19) {
		 $("#resultado").text("Tu peso es normal").css("color", "green");
	} 
	else if (calculo < 19) {
		 $("#resultado").text("Tienes bajo peso").css("color", "red");
	} 
	else {
		$("#imc").text("Error");
        $("#resultado").text("Ingresa los datos de nuevo").css("color", "grey");
	}
 });

 /*Crear un input, un botón y otro input. El usuario debe ingresar un valor numérico
en el primero, y al presionar el botón en el segundo input debe aparecer de forma
automática el valor más el IVA (incremento del 19%)*/

var cantidad ="";
 	$("#cantidad").val(cantidad);

var masIva ="";
 	$("#masIva").val(masIva);


$("#calcularIVA").click( function(){
	cantidad = parseFloat($("#cantidad").val());
	calculoIva = cantidad + (cantidad*0.19);
	masIva = parseFloat($("#masIva").val(Math.trunc(calculoIva)));
})


/*Crear tres inputs y un botón, los dos primeros inputs son para que el usuario
ingrese su nombre y su apellido, al presionar el botón el texto del tercer input
debe ser remplazado por la concatenación de los dos primeros.*/

var nombre ="";
 	$("#nombre").val(nombre);

var apellido ="";
 	$("#apellido").val(apellido);

var final ="";
 	$("#final").val(final);

$("#unir").click( function(){
	nombre = $("#nombre").val();
	apellido = $("#apellido").val();
	$("#final").val(nombre + " " + apellido);
})

/*Cambiar el código anterior para que el texto del tercer input se modifique
automáticamente cada vez que alguien escriba en los inputs sin necesidad
de presionar algún botón.*/

var nombre2 ="";
 	$("#nombre2").val(nombre2);

var apellido2 ="";
 	$("#apellido2").val(apellido2);

var final2 ="";
 	$("#final2").val(final2);


$("body").keyup( function(){
	nombre2 = $("#nombre2").val();
	apellido2 = $("#apellido2").val();
	final2 = $("#final2").val(nombre2 + " " + apellido2) ;
})

/*Utilizar lightbox2 para construir una galería de imágenes link lightbox*/