// Welcome alert on page load
window.addEventListener('load', function () {
  alert("Welcome to my Black & Gold Multimedia Blog!");
});

// Hover shadow effect for project sections
document.querySelectorAll('.project-section').forEach(section => {
  section.addEventListener('mouseenter', () => {
    section.style.boxShadow = "0 8px 25px rgba(255, 215, 0, 0.2)";
  });
  section.addEventListener('mouseleave', () => {
    section.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.6)";
  });
});

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = "⬆️ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.background = "#ffd700";
scrollBtn.style.color = "black";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "8px";
scrollBtn.style.cursor = "pointer";

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.body.appendChild(scrollBtn);
