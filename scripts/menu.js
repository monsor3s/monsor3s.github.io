let show = true;

const menuSection = document.querySelector(".main-header")
const menuToggle = menuSection.querySelector(".menu")

menuToggle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show
})