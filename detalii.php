<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AutoCost - Contact</title>
    <link rel="stylesheet" href="css/detalii.css"> 
</head>

<body>


    <div class="container">
        <div id="raspuns"></div>

        
        <h1>Contactați-ne</h1>
        <p>Pentru orice întrebări, ne puteți contacta folosind formularul de mai jos:</p>

        <form id="contact-form">
            <label for="nume">Nume:</label>
            <input type="text" id="nume" name="nume" required><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|ru)$" title="Emailul trebuie să conțină @ și să se termine cu .com sau .ru"><br>

            <label for="mesaj">Mesaj:</label><br>
            <textarea id="mesaj" name="mesaj" rows="5" required></textarea><br>

            <input type="submit" value="Trimite">
        </form>

        <div id="raspuns"></div>

        <div class="contact-info">
            <h2>Informații de contact</h2>
            <p>Email: detalii@utm.md</p>
            <p>Telefon: +373 123 456 789</p>
        </div>
          <div class="back-button">
                <a href="index.php" id="backButton" class="btn">Înapoi</a>
            </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="js/detalii.js"></script>
</body>
</html>
