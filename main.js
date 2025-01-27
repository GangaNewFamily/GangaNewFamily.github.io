// Obtiene la URL actual del documento
const currentPage = window.location.pathname;

// Selecciona los enlaces de la navegación
const linkInicio = document.getElementById("link-inicio");
const linkBiografia = document.getElementById("link-biografia");
const linkArtistas = document.getElementById("link-artistas");
const linkProyectos = document.getElementById("link-proyectos");

// Compara la URL actual con los enlaces y añade la clase 'active'
if (currentPage.includes("index.html")) {
    linkInicio.classList.add("active");
} else if (currentPage.includes("Biografia.html")) {
    linkBiografia.classList.add("active");
} else if (currentPage.includes("Artistas.html")) {
    linkArtistas.classList.add("active");
} else if (currentPage.includes("Proyectos.html")) {
    linkProyectos.classList.add("active");
}

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// Cierra el menú hamburguesa cuando se hace clic en un enlace del menú
const menuItems = document.querySelectorAll("#nav a");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});
