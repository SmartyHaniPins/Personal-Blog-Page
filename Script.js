// Welcome popup
window.addEventListener('load', () => {
  alert("👋 Welcome to my Lavender & Dark Multimedia Portfolio!");
});

// Toggle skills section
function toggleSkills() {
  const skills = document.querySelector('.skills-list');
  if (skills.style.display === 'none' || skills.style.display === '') {
    skills.style.display = 'block';
  } else {
    skills.style.display = 'none';
  }
}

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = "⬆️ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.background = "#dba8f5";
scrollBtn.style.color = "#1e1e1e";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "8px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.fontWeight = "bold";
scrollBtn.style.zIndex = "1000";

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.body.appendChild(scrollBtn);
