// ========== ACTIVE NAV LINK ==========
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ========== BACK TO TOP ==========
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ========== COUNTER ANIMATION ==========
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start) + (el.dataset.suffix || '');
  }, 16);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target, parseInt(e.target.dataset.count));
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

// ========== FADE IN SCROLL ANIMATION ==========
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ========== CONTACT FORM ==========
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Message Sent!';
    btn.disabled = true;
    btn.style.background = '#00C9A7';
    setTimeout(() => {
      btn.innerHTML = original;
      btn.disabled = false;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// ========== GALLERY LIGHTBOX ==========
function initGallery() {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const label = item.querySelector('.gallery-label')?.textContent || 'Gallery';
      const modal = document.createElement('div');
      modal.style.cssText = `
        position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:9999;
        display:flex;align-items:center;justify-content:center;cursor:pointer;
        animation:fadeIn 0.3s ease;
      `;
      modal.innerHTML = `
        <div style="text-align:center;max-width:80vw;">
          <div style="font-family:'Syne',sans-serif;color:white;font-size:1.2rem;margin-bottom:1rem;">${label}</div>
          <div style="width:500px;max-width:80vw;height:350px;border-radius:16px;overflow:hidden;border:2px solid rgba(255,107,43,0.3);">
            ${item.querySelector('.gallery-ph') ? item.querySelector('.gallery-ph').outerHTML.replace('style=""','style="height:350px;font-size:1.5rem;"') : ''}
          </div>
          <div style="color:rgba(255,255,255,0.4);font-size:0.8rem;margin-top:1rem;">Click anywhere to close</div>
        </div>
      `;
      const style = document.createElement('style');
      style.textContent = '@keyframes fadeIn{from{opacity:0}to{opacity:1}}';
      document.head.appendChild(style);
      modal.addEventListener('click', () => { modal.remove(); style.remove(); });
      document.body.appendChild(modal);
    });
  });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initBackToTop();
  initCounters();
  initScrollReveal();
  initContactForm();
  initGallery();
});
