// Mobil menü

const menuBtn = document.querySelector("#menu-btn");

const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {

menu.classList.toggle("active");

});



// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior: "smooth"

});

});

});
