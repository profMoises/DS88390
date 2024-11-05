<?php
session_start();
include 'config.php';

// Verifica se o usuário está logado
if (!isset($_SESSION['usuario'])) {
    header("Location: login.html");
    exit;
}

// Recupera o nome do usuário logado
$nome_usuario = $_SESSION['usuario'];
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Página Principal</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            padding-top: 50px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            border-radius: 8px;
        }
        h1 {
            color: #333;
        }
        .welcome {
            font-size: 1.2em;
            color: #666;
            margin-bottom: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 1em;
            color: #fff;
            background-color: #007BFF;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Bem-vindo à Página Principal</h1>
        <p class="welcome">Olá, <?php echo htmlspecialchars($nome_usuario); ?>! Você está logado no sistema.</p>
        
        <!-- Links para navegar pelo sistema -->
        <a href="cadastro_produto.html" class="button">Cadastrar Produto</a>
        <a href="movimentacao_estoque.html" class="button">Movimentação de Estoque</a>
        
        <!-- Botão de logout -->
        <p><a href="logout.php" class="button">Logout</a></p>
    </div>
</body>
</html>
