function indice(x){
	$(".agregar").eq(x).click( function(){
		var titulo= $("h3").eq(x).html();
		$("#divEleccion").append(titulo + "<br>");
	})
}
for(i=0; i<5; i++){
	indice(i);
}