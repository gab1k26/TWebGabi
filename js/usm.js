document.addEventListener('DOMContentLoaded', function () {
    // 1. Afișează un mesaj de bun venit
    alert("Bine ai venit la Universitatea de Stat din Moldova!");

    // 2. Derulare lină când se apasă pe butonul „Înapoi”
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function (event) {
        event.preventDefault(); // Previne acțiunea de redirecționare normală
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Derulare lină către începutul paginii
        });
        
        // După derulare, așteptăm 1 secundă și redirecționăm către pagina „start.html”
        setTimeout(function() {
            window.location.href = backButton.getAttribute('href');
        }, 1000);
    });

    // 3. Efect la hover pe imagine: schimbă opacitatea (similar cu hover din CSS)
    const usmImage = document.querySelector('.usm-image img');
    usmImage.addEventListener('mouseover', function () {
        usmImage.style.opacity = '0.8';  // Diminuează opacitatea la hover
    });
    usmImage.addEventListener('mouseout', function () {
        usmImage.style.opacity = '1';    // Restabilește opacitatea la ieșirea din hover
    });
});
