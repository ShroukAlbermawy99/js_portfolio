// zoom
const zoom = document.createElement("div");
zoom.classList.add("zoom");
document.body.appendChild(zoom);
window.addEventListener("resize", () => {
    zoom.innerHTML = `${window.innerWidth} x ${window.innerHeight}`;
});
//
const sidebar = document.querySelector(".sidebar");
//
const openBtns = document.querySelectorAll(".open-btn");
for(const btn of openBtns) {
    btn.addEventListener("click", () => {
        btn.classList.remove("active");
        btn.parentElement.classList.add("open");
        if(btn.previousElementSibling) {
            btn.previousElementSibling.classList.add("active");
        }
        let sidebarHeight = parseInt(getComputedStyle(sidebar).height);
        if(sidebarHeight < 1520) {
            sidebar.style.height =  `${sidebarHeight + 204}px`;
        }
    })
}

const closeBtns = document.querySelectorAll(".close-btn");
for(const btn of closeBtns) {
    btn.addEventListener("click", () => {
        btn.classList.remove("active");
        btn.parentElement.classList.remove("open");
        if(btn.nextElementSibling) {
            btn.nextElementSibling.classList.add("active");
        }
        let sidebarHeight = parseInt(getComputedStyle(sidebar).height);
        if(sidebarHeight - 204 > 1025) {
            sidebar.style.height =  `${sidebarHeight - 204}px`;
        }
    })
}
