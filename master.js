// dot generator
const rightDotContainer = document.querySelector(".content .right");
const dotContainer = document.createElement("div");
    dotContainer.classList.add("dot-container");
    rightDotContainer.appendChild(dotContainer);

    for (let i = 0; i < 8; i++) {
        const dotLine = document.createElement('div');
        dotLine.classList.add("dot-line");
        for (let j = 0; j < 5; j++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            dotLine.appendChild(dot);
        }
        dotContainer.appendChild(dotLine);
    }
// const zoom = document.createElement("div");
// zoom.classList.add("zoom");
// document.body.appendChild(zoom);
// window.addEventListener("resize", () => {
//     zoom.innerHTML = `${window.innerWidth} x ${window.innerHeight}`;
// });

// toggle menu
let sidebarToggle = document.querySelector(".sidebar-icon");
let sidebar = document.querySelector(".sidebar");

sidebarToggle.onclick = function (e) {
    e.stopPropagation();
    sidebar.classList.toggle("active");
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
