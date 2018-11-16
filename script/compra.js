document.addEventListener("DOMContentLoaded", function(){
/* Formato del juego */
    var divFormato = document.getElementById("formato");
    var radioFisico = document.getElementById("fisico");
    var radioDigital = document.getElementById("digital");
    var totalEnvio = document.getElementById("total-envio");

    radioFisico.addEventListener("change", function(){
        divFormato.style.display = "block";
    });
    radioDigital.addEventListener("change", function(){
        divFormato.style.display = "none";
        costoEnvio = 0;
    }); 
    
    /* Precios */
    var precioJuego = 619;
    var costoEnvio = 0;
    var subtotal = 0;

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
        encabezadoSubtotal.innerHTML = subtotal;
        encabezadoTotal.innerHTML = subtotal * 1.22;
    }); 
    envioComun.addEventListener("change", function(){
        costoEnvio = subtotal * 0.005;
        totalEnvio.innerHTML = costoEnvio;
        encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
    });
    envioEspecial.addEventListener("change", function(){
        costoEnvio = subtotal * 0.02;
        totalEnvio.innerHTML = costoEnvio;
        encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
    });
    envioPremium.addEventListener("change", function(){
        costoEnvio = subtotal * 0.05;
        totalEnvio.innerHTML = costoEnvio;
        encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
    });
}); 