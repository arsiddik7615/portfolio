// Show Menu Mobile

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");


// If The Menu Mobile exited

if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}

// Menu Mobile Removed 
if(navClose){
    navClose.addEventListener("click", () => {
       navMenu.classList.remove("show-menu")
    })
}


const navLink = document.querySelectorAll(".nav__link");

const linkAction =  () => {
    navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener("click", linkAction))