const navMenu = document.querySelector(".elemtFrt")
const navToggle = document.querySelector(".menuToggle")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("blockft")
}) 


ScrollReveal().reveal()
window.sr = ScrollReveal();
    sr.reveal('.rvlimg', {
    duration: 4000,
    reset: true,
    });