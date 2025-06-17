// Smooth scroll (if not using CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// You can add more JS interactions here later (lightbox, tabs, etc.)
console.log("Multimedia Portfolio script loaded.");
