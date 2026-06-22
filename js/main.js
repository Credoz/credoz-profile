// ===== Cursor Glow Follow =====
const cursorGlow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    if (!cursorGlow.classList.contains('active')) {
        cursorGlow.classList.add('active');
    }
});

document.addEventListener('mouseleave', () => {
    cursorGlow.classList.remove('active');
});

// ===== Mobile Menu =====
const menuBtn = document.getElementById('menuBtn');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileOverlay.classList.toggle('open');
    document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        mobileOverlay.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ===== Scroll-based Animations =====
const animElements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .split-fade');

const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
});

animElements.forEach(el => animObserver.observe(el));

// ===== Active Sidebar Link on Scroll =====
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const panels = document.querySelectorAll('.panel');

function updateActiveLink() {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    panels.forEach(panel => {
        const top = panel.offsetTop;
        const bottom = top + panel.offsetHeight;
        const id = panel.getAttribute('id');

        if (scrollPos >= top && scrollPos < bottom) {
            sidebarLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// ===== Smooth Scroll for Sidebar & Mobile Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Subtle parallax on hero graphic =====
const heroGraphic = document.querySelector('.hero-graphic');
if (heroGraphic) {
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;
        heroGraphic.style.transform = `translate(${x}px, ${y}px)`;
    });
}