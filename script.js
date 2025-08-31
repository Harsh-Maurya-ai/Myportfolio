// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Simple form handler (no backend)
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent! (This is frontend only)");
});
