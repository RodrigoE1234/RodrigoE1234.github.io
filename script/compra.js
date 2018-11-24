document.addEventListener("DOMContentLoaded", function(){
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
            totalEnvio.innerHTML = costoEnvio;
            h4Costoe.style.display = "none";
        }); 
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
    
        campoCantidad.addEventListener("change",function(){
            var cantidad = campoCantidad.value;
            cantidad = parseInt(cantidad);
            subtotal = cantidad * precioJuego;
            encabezadoSubtotal.innerHTML = subtotal.toFixed(2);
            num = subtotal * 1.22;
            encabezadoTotal.innerHTML = num.toFixed(2);
        }); 
        document.addEventListener("change", function(){
            if (envioComun.checked == true){
            var cantidad = campoCantidad.value;
            cantidad = parseInt(cantidad);
            subtotal = cantidad * precioJuego;
            costoEnvio = subtotal * 0.005;
            totalEnvio.innerHTML = costoEnvio;
        }
            encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
            num = subtotal * 1.22 + costoEnvio;
            encabezadoTotal.innerHTML = num.toFixed(2);
        });
        document.addEventListener("change", function(){
            if (envioEspecial.checked == true){
            var cantidad = campoCantidad.value;
            cantidad = parseInt(cantidad);
            subtotal = cantidad * precioJuego;
            costoEnvio = subtotal * 0.02;
            totalEnvio.innerHTML = costoEnvio;
        }
            encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
            num = subtotal * 1.22 + costoEnvio;
            encabezadoTotal.innerHTML = num.toFixed(2);

        });
        document.addEventListener("change", function(){
            if (envioPremium.checked == true){
            var cantidad = campoCantidad.value;
            cantidad = parseInt(cantidad);
            subtotal = cantidad * precioJuego;
            costoEnvio = subtotal * 0.05;
            cant = subtotal * 0.05;
            totalEnvio.innerHTML = cant.toFixed(2);
            }
            encabezadoSubtotal.innerHTML = subtotal + costoEnvio;
            num = subtotal * 1.22 + costoEnvio;
            encabezadoTotal.innerHTML = num.toFixed(2);
        });
    }); 