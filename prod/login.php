<?php
session_start();
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $senha = md5($_POST['senha']);
    $sql = "SELECT * FROM usuarios WHERE nome = '$nome' AND senha = '$senha'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);
        $_SESSION['usuario'] = $user['nome'];
        $_SESSION['papel'] = $user['papel'];
        header("Location: principal.php");
    } else {
        echo "Login falhou. Verifique nome e senha.";
    }
}
?>
