<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nume = strip_tags($_POST["nume"]);
    $email = strip_tags($_POST["email"]);
    $mesaj = strip_tags($_POST["mesaj"]);

    $data = date("Y-m-d H:i:s");
    $linie = "[$data] Nume: $nume | Email: $email | Mesaj: $mesaj\n";

    $fisier = "contacte.txt";

    if (file_put_contents($fisier, $linie, FILE_APPEND | LOCK_EX)) {
        echo "Datele au fost transmise cu succes!";
    } else {
        echo "Eroare la salvarea datelor.";
    }
}
?>
