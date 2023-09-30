const nav = document.querySelector("nav");
const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

let pageYStart = 0;
let offsetTopStart = 0;
let isDragging = false;

navBtn.addEventListener("mousedown", e => {
    pageYStart = e.pageY;
    offsetTopStart = nav.offsetTop;
    isDragging = true;
    nav.classList.add("dragging");
});

window.addEventListener("mouseup", () => {
    isDragging = false;
    nav.classList.remove("dragging");

    let windowHeight = window.innerHeight;
    let navHeight = nav.offsetHeight;
    let navTop = parseInt(nav.style.top);

    if (navTop < 0)
        nav.style.top = "20px";

    if (navTop > windowHeight - navHeight)
        nav.style.top = `${windowHeight - navHeight - 20}px`;

});

window.addEventListener("mousemove", e => {
    if (!isDragging)
        return;

    let distance = e.pageY - pageYStart;
    nav.style.top = `${offsetTopStart + distance}px`;
})