// DARK MODE
const toggle = document.getElementById("modeToggle");
toggle.addEventListener("click", () => {
document.body.classList.toggle("light");
});


// NAVBAR ANIMATION
gsap.from(".navbar", {
y: -80,
opacity: 0,
duration: 1.2,
ease: "power3.out"
});


// HERO TEXT
gsap.from(".hero-content h1", {
y: 40,
opacity: 0,
duration: 1.5,
ease: "power4.out"
});


gsap.from(".hero-content p", {
y: 40,
opacity: 0,
duration: 1.5,
delay: 0.3,
ease: "power4.out"
});


gsap.from(".btn", {
scale: 0,
opacity: 0,
duration: 1,
delay: 0.6,
ease: "back.out(1.7)"
});


// FADE SECTIONS
const fadeSections = document.querySelectorAll(".section");
fadeSections.forEach((sec) => {
gsap.from(sec, {
scrollTrigger: {
trigger: sec,
start: "top 85%",
},
y: 50,
opacity: 0,
duration: 1,
ease: "power2.out"
});
});


// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(anchor => {
anchor.addEventListener("click", function (e) {
