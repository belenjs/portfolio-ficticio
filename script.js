const botonMenu = document.querySelector(".menu-toggle");
const menuNavegacion = document.querySelector("#main-nav");
const enlacesMenu = document.querySelectorAll("#main-nav a");


console.log(botonMenu);
console.log(enlacesMenu);

botonMenu.addEventListener("click", function(){
    menuNavegacion.classList.toggle("menu-open")

    const estaAbierto = menuNavegacion.classList.contains("menu-open");
    botonMenu.setAttribute("aria-expanded", estaAbierto);
});

enlacesMenu.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        menuNavegacion.classList.remove("menu-open");
        botonMenu.setAttribute("aria-expanded", "false");
    });
});

