<?php
// Configuração da conexão
$host = 'localhost'; // Servidor do banco de dados
$dbname = 'techstore'; // Nome do banco de dados
$user = 'root'; // Nome do usuário do banco de dados
$pass = ''; // Senha do usuário do banco de dados

try {
    // Conexão com o banco de dados usando PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Exibe erro caso a conexão falhe
    echo 'Erro de conexão: ' . $e->getMessage();
}
?>
