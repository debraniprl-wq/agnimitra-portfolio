// ==============================
// PORTFOLIO JS
// ==============================

// Navbar Shadow

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.style.background = "rgba(7,17,31,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        header.style.background = "rgba(7,17,31,.75)";
        header.style.boxShadow = "none";
    }
});

// ==============================
// Smooth Active Nav
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(
".about,.skills,.projects,.contact,.project-card,.about-card,.skill,.contact-card"
);

function reveal(){

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/* ================= MOBILE MENU ================= */

const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* ================= CLOSE MENU AFTER CLICK ================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});

// ==============================
// Scroll To Top on Logo Click
// ==============================

document.querySelector(".logo").addEventListener("click",(e)=>{

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

