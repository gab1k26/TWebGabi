document.addEventListener("DOMContentLoaded", function () {
    // 1. Animație pe scroll pentru elemente
    const elements = document.querySelectorAll('.utm-text, .utm-image img'); // Selectează elementele care trebuie animate
    function checkVisibility() {
        elements.forEach(function (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                element.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verifică imediat la încărcare

    // 2. Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // 3. Validare formular (dacă vrei să adaugi un formular)
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name')?.value;
        const email = document.getElementById('email')?.value;
        const message = document.getElementById('message')?.value;

        if (name && email && message) {
            alert('Formular trimis cu succes!');
        } else {
            alert('Te rugăm să completezi toate câmpurile.');
        }
    });

    // 4. Modificarea butonului de "Înapoi"
    document.querySelector('.back-button').addEventListener('click', function() {
        this.style.backgroundColor = '#0056b3';
        this.style.boxShadow = '0 0 15px rgba(0, 183, 255, 0.7)';
    });

    // 5. Smooth Scroll pentru navigare (dacă folosești link-uri interne)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
