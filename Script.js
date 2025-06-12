// Show welcome message when the page loads
window.addEventListener('load', function () {
  alert("Welcome to my multimedia blog!");
});

// Hover animation for each blog post
document.querySelectorAll('.blog-post').forEach(post => {
  post.addEventListener('mouseenter', () => {
    post.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
  });
  post.addEventListener('mouseleave', () => {
    post.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.1)";
  });
});

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = "⬆️ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.background = "#6a0dad";
scrollBtn.style.color = "white";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "8px";
scrollBtn.style.cursor = "pointer";

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.body.appendChild(scrollBtn);