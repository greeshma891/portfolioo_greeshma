const cursor = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector("#navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("pointermove", e => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * .15;
    const y = (e.clientY - r.top - r.height / 2) * .15;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
  btn.addEventListener("pointerleave", () => btn.style.transform = "");
});

// Subtle parallax for the SVG hero artwork
const orbit = document.querySelector(".hero-orbit");
window.addEventListener("scroll", () => {
  orbit.style.transform = `translateY(${window.scrollY * .08}px)`;
});

// Project hover motion
document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("pointermove", e => {
    const r = project.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 5;
    const y = ((e.clientY - r.top) / r.height - .5) * 5;
    project.querySelector(".project-visual").style.transform = `perspective(700px) rotateY(${x}deg) rotateX(${-y}deg)`;
  });
  project.addEventListener("pointerleave", () => {
    project.querySelector(".project-visual").style.transform = "";
  });
});

// Replace # with the user's LinkedIn URL when they have it.
document.querySelector("#linkedinLink").addEventListener("click", e => {
  e.preventDefault();
  alert("Add your LinkedIn profile URL in index.html.");
});
