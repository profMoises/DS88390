<?php
// Configuração de resposta JSON para ser usada pelo JavaScript
header('Content-Type: application/json');

// Inclui o arquivo de conexão
require_once 'db.php';

// Verifica se o formulário foi enviado via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Captura e sanitiza os dados enviados pelo formulário
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $details = filter_input(INPUT_POST, 'details', FILTER_SANITIZE_STRING);

    // Verifica se todos os campos foram preenchidos
    if ($name && $email && $details) {
        // Prepara o comando SQL para inserção
        $stmt = $pdo->prepare('INSERT INTO solicitacoes (name, email, details) VALUES (?, ?, ?)');
        
        // Executa o comando com os valores capturados
        if ($stmt->execute([$name, $email, $details])) {
            // Retorna mensagem de sucesso em JSON
            echo json_encode(['status' => 'success', 'message' => 'Cadastro realizado com sucesso!']);
        } else {
            // Retorna mensagem de erro em JSON
            echo json_encode(['status' => 'error', 'message' => 'Erro ao cadastrar. Tente novamente.']);
        }
    } else {
        // Retorna mensagem de erro para campos vazios
        echo json_encode(['status' => 'error', 'message' => 'Por favor, preencha todos os campos.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método de requisição inválido.']);
}
?>
