$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'salveaza_contact.php',
            data: $(this).serialize(),
            success: function (raspuns) {
                $('#raspuns').html('<div class="success-box">' + raspuns + '</div>');
                $('#contact-form')[0].reset();
            },
            error: function () {
                $('#raspuns').html('<div class="error-box">A apărut o eroare. Încercați din nou.</div>');
            }
        });
    });
});
