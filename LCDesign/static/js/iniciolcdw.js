$(document).on("scroll", function(){
    var medidas = $(document).scrollTop();
    
    if (screen.width > 768){
    	
    	if(medidas > 60){
    		$('#cabecera2').fadeIn(100)
    	} else {
    		$('#cabecera2').fadeOut(100)
    	}
    	
    	if(medidas >= 550){
    		$('#imagen_nosotros2').fadeIn(1000)
    	}
    
    	if(medidas > 2400){
    		a = $('#bocadillo2').css('display')
    		b = $('#formulario_contacto').css('display')
    		if (a == 'none' && b == 'none') {
    			$('#bocadillo').fadeIn(1000)
    			setTimeout("$('#bocadillo').fadeOut(1000)",2000);
    			setTimeout("$('#bocadillo2').fadeIn(1000)",2000);
    			setTimeout("$('#boton_contactar').fadeIn(1000)",2500);
    		}
    	}
    } else {
    	if(medidas >= 700){
    		$('#imagen_nosotros2').fadeIn(1000)
    	}
    }
});

function mover_scroll(num) {
	window.scrollTo(0,num);
	}
	
function mostrar_puntos() {
	$('#programador').fadeIn(1000)
	setTimeout("mostrar_folios()",1200);
	 }
	 
function mostrar_folios() {
	$('#programador3').fadeIn(1000)
	 }
	 
	 
function mostrar_servicios(caja) {
	if (screen.width > 768){
		$('#fondo_translucido').fadeIn(1000)
		$(caja).fadeIn(1000)
	} else {
		$(caja).slideToggle(1000)
		}
	}
	
function ocultar_servicios(caja) {
	if (screen.width > 768){
		$(caja).fadeOut(1000)
		$('#fondo_translucido').fadeOut(1000)
	} else {
		$(caja).slideToggle(1000)
		}
	}
	
function cerrar_cookies() {
	$('#mensaje_cookies').fadeOut(500)
	}
	
function contactar () {
	$('.bocadillos').fadeOut(500)
	$('#boton_contactar').fadeOut(500)
	$('#formulario_contacto').fadeIn(500)
	}