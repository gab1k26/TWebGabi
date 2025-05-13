document.addEventListener('DOMContentLoaded', function () {

    // 2. Derulare lină atunci când se apasă pe butonul „Înapoi”
    const backButton = document.querySelector('.back-button a');
    backButton.addEventListener('click', function (event) {
        event.preventDefault(); // Previne comportamentul implicit al linkului
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Derulare lină către începutul paginii
        });
        
        // După o mică întârziere (1 secundă), redirecționează utilizatorul
        setTimeout(function() {
            window.location.href = backButton.getAttribute('href');
        }, 1000);
    });

    // 3. Efectul hover pe imagine
    const usmfImage = document.querySelector('.usmf-image img');
    usmfImage.addEventListener('mouseover', function () {
        usmfImage.style.opacity = '0.8';  // Diminuează opacitatea imaginii
    });
    usmfImage.addEventListener('mouseout', function () {
        usmfImage.style.opacity = '1';  // Revine la opacitate normală
    });
});
