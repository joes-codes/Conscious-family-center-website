// ============================================================
//   CONSCIOUS FAMILY CENTRE — script.js
// ============================================================

// ---- Mobile Nav Toggle ----
function toggleNav() {
  document.getElementById('nlinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(function(a) {
  a.addEventListener('click', function() {
    document.getElementById('nlinks').classList.remove('open');
  });
});

// ---- Sticky Nav on Scroll ----
window.addEventListener('scroll', function() {
  document.getElementById('mnav').classList.toggle('scrolled', window.scrollY > 55);
});

// ---- Scroll Reveal ----
var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(function(el) {
  revealObserver.observe(el);
});

// ---- FAQ Accordion ----
function toggleFaq(btn) {
  var ans = btn.nextElementSibling;
  var isOpen = btn.classList.contains('open');
  // Close all
  document.querySelectorAll('.f-q.open').forEach(function(q) {
    q.classList.remove('open');
    q.nextElementSibling.style.maxHeight = null;
  });
  // Open clicked if it was closed
  if (!isOpen) {
    btn.classList.add('open');
    ans.style.maxHeight = ans.scrollHeight + 'px';
  }
}

// ---- Generate Stars ----
window.addEventListener('DOMContentLoaded', function() {
  var starsEl = document.getElementById('stars-layer');
  if (!starsEl) return;
  for (var i = 0; i < 75; i++) {
    var s = document.createElement('div');
    s.className = 'star';
    s.style.left = Math.random() * 100 + '%';
    s.style.top  = Math.random() * 100 + '%';
    s.style.animationDuration  = (Math.random() * 3 + 1.5) + 's';
    s.style.animationDelay     = (Math.random() * 4) + 's';
    if (Math.random() > 0.7) { s.style.width = '3px'; s.style.height = '3px'; }
    starsEl.appendChild(s);
  }
});
