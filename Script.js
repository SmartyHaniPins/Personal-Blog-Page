// Welcome popup
window.addEventListener('load', () => {
  alert("👋 Welcome to my Lavender & Dark Multimedia Portfolio!");
});

// Tab-style Skills toggle
const skillTab = document.getElementById('skill-tab');
const skillContent = document.getElementById('skills-content');

if (skillTab && skillContent) {
  skillTab.addEventListener('click', () => {
    const isHidden = skillContent.style.display === 'none' || skillContent.style.display === '';
    skillContent.style.display = isHidden ? 'block' : 'none';
    skillTab.innerText = isHidden ? '❌ Hide My Skills' : '🛠 Show My Skills';
  });
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
