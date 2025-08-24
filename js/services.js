// zoom
// const zoom = document.createElement("div");
// zoom.classList.add("zoom");
// document.body.appendChild(zoom);
// window.addEventListener("resize", () => {
//     zoom.innerHTML = `${window.innerWidth} x ${window.innerHeight}`;
// });
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
// toggle menu
let sidebarToggle = document.querySelector(".sidebar-icon");
// let sidebar = document.querySelector(".sidebar");

sidebarToggle.onclick = function (e) {
    e.stopPropagation();
    sidebar.classList.toggle("active");
    console.log("active sidebar");
};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && e.target !== sidebarToggle) {
        if (sidebar.classList.contains("active")) {
            sidebar.classList.toggle("active");
        }
    }
});

let sidebarLinks = document.querySelectorAll(".sidebar .first a");
let sidebarLinkListItems = document.querySelectorAll(".sidebar .first li");
sidebarLinks.forEach((link) => {
    link.addEventListener("click", (s) => {
        sidebarLinkListItems.forEach((e) => {
            e.classList.remove("active");
        });
        link.parentElement.classList.add("active");    
    });
});
/* Services Page */
