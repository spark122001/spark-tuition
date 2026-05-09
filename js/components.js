// Shared components injected into every page

const NAVBAR_HTML = `
<nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <div class="brand-icon">S⚡</div>
      <div class="brand-text">
        SPARK
        <span class="brand-sub">Tuition Center</span>
      </div>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="results.html">Results</a></li>
        <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        <li class="nav-item ms-2">
          <a class="btn-primary-custom" href="contact.html" style="padding:0.5rem 1.2rem;font-size:0.85rem;">
            <i class="bi bi-person-plus"></i> Enroll Now
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-4">
        <div class="d-flex align-items-center gap-2 mb-3">
          <div class="brand-icon" style="transform:rotate(-5deg);">S⚡</div>
          <span class="footer-brand-text">SPARK</span>
        </div>
        <p style="font-size:0.9rem;line-height:1.8;max-width:280px;">Igniting young minds with excellence in Mathematics & Science from Class 6 to 12.</p>
        <div class="mt-3">
          <a href="#" class="social-link"><i class="bi bi-facebook"></i></a>
          <a href="#" class="social-link"><i class="bi bi-instagram"></i></a>
          <a href="#" class="social-link"><i class="bi bi-youtube"></i></a>
          <a href="#" class="social-link"><i class="bi bi-whatsapp"></i></a>
        </div>
      </div>
      <div class="col-lg-2 col-6 footer-links">
        <h6>Quick Links</h6>
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="results.html">Student Results</a>
        <a href="gallery.html">Gallery</a>
        <a href="contact.html">Contact Us</a>
      </div>
      <div class="col-lg-3 col-6 footer-links">
        <h6>Classes</h6>
        <a href="#">Class 6 – 8 (Middle)</a>
        <a href="#">Class 9 – 10 (Secondary)</a>
        <a href="#">Class 11 – 12 (Senior)</a>
        <a href="#">Mathematics</a>
        <a href="#">Science</a>
      </div>
      <div class="col-lg-3 footer-links">
        <h6>Contact</h6>
        <p style="font-size:0.88rem;line-height:1.7;">📍 Maruti Vihar<br>Gurugram, Haryana – 122001</p>
        <p style="font-size:0.88rem;margin-top:0.7rem;">📞 +91 98112 34306</p>
        <p style="font-size:0.88rem;">✉️ **@sparktuition.in</p>
        <p style="font-size:0.88rem;">🕐 Mon–Sat: 6AM–8PM</p>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p style="color:rgba(255,255,255,0.3);font-size:0.82rem;">© 2024 Spark Tuition Center, Gurugram, Haryana. All rights reserved.</p>
  </div>
</footer>
<button class="back-top" id="backToTop" title="Back to Top">
  <i class="bi bi-arrow-up"></i>
</button>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('navbar-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.innerHTML = NAVBAR_HTML;
  if (footEl) footEl.innerHTML = FOOTER_HTML;
});
