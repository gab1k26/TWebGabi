document.addEventListener("DOMContentLoaded", function () {
    const inspiratieBtn = document.getElementById("inspiratieBtn");

    inspiratieBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Previne comportamentul implicit al linkului

        alert("Educația este cheia viitorului tău! Alege să înveți la cele mai bune universități din Chișinău.");
    });
});
