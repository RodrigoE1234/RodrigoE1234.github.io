document.addEventListener("DOMContentLoaded", function(){
    juegos1 = JSON.parse(juegos1);

    var listado = document.getElementById("lista-juegos");

    for(var i = 0; i < juegos1.length; i++){
        listado.innerHTML = listado.innerHTML + "<li><a href='" + juegos1[i].link + "'><img src='" + juegos1[i].foto + "'></a><figcaption><a href='" + juegos1[i].link + "'><h4>" + juegos1[i].titulo + "</h4></a></figcaption><p>" + juegos1[i].valoracion + "</p></li>";
    }
    });