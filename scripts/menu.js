let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".icon-menu")
const buttonClose = document.querySelector(".icon-close")
const menuClose = document.querySelector(".wrapper-menu")

menuToggle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show;
})

buttonClose.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = show;
})

menuClose.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = show;
})