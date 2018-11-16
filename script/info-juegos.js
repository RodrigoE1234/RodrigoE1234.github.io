document.addEventListener("DOMContentLoaded", function(){
    juegos1 = JSON.parse(juegos1);

    var imgPortada = document.getElementById("img-portada");
        imgPortada.setAttribute("src", juegos1[0].cover);

    var listado = document.getElementById("info-juego1");
        listado.innerHTML = juegos1[0].descripcion1;

    var listado = document.getElementById("info-juego2");
        listado.innerHTML  = juegos1[0].descripcion2;

    var listado = document.getElementById("info-juego3");
        listado.innerHTML  = juegos1[0].descripcion3;

    var imgPortada = document.getElementById("image1");
        imgPortada.setAttribute("src", juegos1[0].galeria1);

    var imgPortada = document.getElementById("image2");
        imgPortada.setAttribute("src", juegos1[0].galeria2);

    var imgPortada = document.getElementById("image3");
        imgPortada.setAttribute("src", juegos1[0].galeria3);

    var imgPortada = document.getElementById("image4");
        imgPortada.setAttribute("src", juegos1[0].galeria4);

    var imgPortada = document.getElementById("image5");
        imgPortada.setAttribute("src", juegos1[0].galeria5);

    var imgPortada = document.getElementById("image6");
        imgPortada.setAttribute("src", juegos1[0].galeria6);

    var imgPortada = document.getElementById("image7");
        imgPortada.setAttribute("src", juegos1[0].galeria7);

    var listado = document.getElementById("categoria");
        listado.innerHTML = juegos1[0].categoria;

    var listado = document.getElementById("valoracion");
        listado.innerHTML = juegos1[0].valoracion;

    var listado = document.getElementById("precio");
        listado.innerHTML = juegos1[0].precio;
    });