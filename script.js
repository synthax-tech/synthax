var faq = document.getElementsByClassName("faq-page");

var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    var body = this.nextElementSibling;

    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
}

// Removed an older unused countdown targeting non-existent element IDs

const timestamp = Date.now();

const css = document.createElement("link");
css.rel = "stylesheet";
css.href = "style.css?v=" + timestamp;
document.head.appendChild(css);

const js = document.createElement("script");
js.src = "script.js?v=" + timestamp;
document.body.appendChild(js);

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function () {
  const faqBoxes = document.querySelectorAll('.faq-box');

  faqBoxes.forEach(box => {
    box.addEventListener('click', () => {
      box.classList.toggle('active');
    });
  });
});

// Countdown Timer Script
(function() {
  const eventDate = new Date('2025-11-15T00:00:00');

  function updateTimer() {
    const now = new Date();
    let diff = eventDate - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    document.getElementById('timer-days').textContent = days;
    document.getElementById('timer-hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('timer-mins').textContent = mins.toString().padStart(2, '0');
    document.getElementById('timer-secs').textContent = secs.toString().padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
})();
