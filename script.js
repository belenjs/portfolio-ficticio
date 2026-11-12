// Menú navegación hamburguesa en pantalla móvil

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



const boomLetters = document.querySelectorAll(".explosion-text span");

if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {

    gsap.from(boomLetters, {
        y: 80,
        opacity: 0,
        rotation: () => gsap.utils.random(-35, 35),
        scale: 0.4,
        duration: 0.9,
        stagger: 0.1,
        ease: "back.out(2)"
    });

    gsap.to(boomLetters, {
        y: () => gsap.utils.random(-8, 8),
        rotation: () => gsap.utils.random(-10, 10),
        duration: () => gsap.utils.random(1.5, 2.5),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.12,
        delay: 1.2
    });
}
