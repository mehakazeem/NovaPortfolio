/* ==========================================
   NovaPortfolio Ultimate
   Developed by Mehak Azeem
========================================== */

// ==========================
// Theme Toggle
// ==========================

const themeBtn = document.querySelector(".theme-btn");

let darkMode = true;

themeBtn.addEventListener("click", () => {

    if (darkMode) {

        document.body.style.background = "#F8FAFC";
        document.body.style.color = "#111827";

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        darkMode = false;

    } else {

        document.body.style.background =
            "linear-gradient(180deg,#030712,#081120,#030712)";

        document.body.style.color = "#ffffff";

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        darkMode = true;

    }

});


// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ==========================
// Navbar Shadow
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.background="rgba(3,7,18,.95)";

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.35)";

    }

    else{

        header.style.background="rgba(3,7,18,.85)";

        header.style.boxShadow="none";

    }

});


// ==========================
// Active Navigation
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.offsetHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
".skill-card, .project-card, .goal-card, .about-image, .about-text"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all .8s ease";

    revealObserver.observe(element);

});


/* ==========================================
   HERO COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".hero-stats h2");

counters.forEach(counter => {

    const target = counter.innerText;

    if (!isNaN(parseInt(target))) {

        let count = 0;

        const end = parseInt(target);

        const speed = Math.max(10, Math.floor(2000 / end));

        const updateCounter = () => {

            if (count < end) {

                count++;

                counter.innerText = count + (target.includes("+") ? "+" : "");

                setTimeout(updateCounter, speed);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    }

});


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you! Your message has been received.");

    contactForm.reset();

});


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#00E5FF";
topButton.style.color = "#000";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.boxShadow = "0 0 20px rgba(0,229,255,.4)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* ==========================================
   CURRENT YEAR IN FOOTER (OPTIONAL)
========================================== */

const yearElement = document.querySelector(".current-year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("==================================");
console.log("NovaPortfolio Ultimate");
console.log("Designed & Developed by Mehak Azeem");
console.log("Founder & CEO");
console.log("==================================");