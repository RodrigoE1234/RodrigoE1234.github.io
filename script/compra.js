document.addEventListener("DOMContentLoaded", function(){
/* Formato del juego */
    var divFormato = document.getElementById("formato");
    var radioFisico = document.getElementById("fisico");
    var radioDigital = document.getElementById("digital");
    var totalEnvio = document.getElementById("total-envio");

/*var numb = 123.34535;
numb = numb.toFixed(2); 
*/

    radioFisico.addEventListener("change", function(){
        divFormato.style.display = "block";
    });
    radioDigital.addEventListener("change", function(){
        divFormato.style.display = "none";
        costoEnvio = 0;
        totalEnvio.innerHTML = costoEnvio;
    }); 
    
    /* Precios */
    var precioJuego = 619;
    var costoEnvio = 0;
    var subtotal = 0;
    var num;
    var cant

    var campoCantidad = document.getElementById("cantidad");
    var encabezadoSubtotal = document.getElementById("subtotal");
    var encabezadoTotal = document.getElementById("total");
    var envioComun = document.getElementById("comun")
    var envioEspecial = document.getElementById("especial");
    var envioPremium = document.getElementById("premium");
    var totalEnvio = document.getElementById("total-envio");

    campoCantidad.addEventListener("change",function(){
        var cantidad = campoCantidad.value;
        cantidad = parseInt(cantidad);
        subtotal = cantidad * precioJuego;
        encabezadoSubtotal.innerHTML = subtotal.toFixed(2);
        num = subtotal * 1.22;
        encabezadoTotal.innerHTML = num.toFixed(2);
    }); 
    envioComun.addEventListener("change", function(){
        var cantidad = campoCantidad.value;
        cantidad = parseInt(cantidad);
        subtotal = cantidad * precioJuego;
        
        costoEnvio = subtotal * 0.005;
        totalEnvio.innerHTML = costoEnvio;
        encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
        num = subtotal * 1.22 + costoEnvio;
        encabezadoTotal.innerHTML = num.toFixed(2);
    });
    envioEspecial.addEventListener("change", function(){
        var cantidad = campoCantidad.value;
        cantidad = parseInt(cantidad);
        subtotal = cantidad * precioJuego;

        costoEnvio = subtotal * 0.02;
        totalEnvio.innerHTML = costoEnvio;
        encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
        num = subtotal * 1.22 + costoEnvio;
        encabezadoTotal.innerHTML = num.toFixed(2);

    });
    envioPremium.addEventListener("change", function(){
        var cantidad = campoCantidad.value;
        cantidad = parseInt(cantidad);
        subtotal = cantidad * precioJuego;

        costoEnvio = subtotal * 0.05;
        cant = subtotal * 0.05;
        totalEnvio.innerHTML = cant.toFixed(2);
        encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
        num = subtotal * 1.22 + costoEnvio;
        encabezadoTotal.innerHTML = num.toFixed(2);
    });
}); 