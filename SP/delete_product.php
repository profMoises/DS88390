<?php
// Conectar ao banco de dados
$mysqli = new mysqli("localhost", "root", "", "produtos");

// Verificar conexão
if ($mysqli->connect_error) {
    die("Falha na conexão: " . $mysqli->connect_error);
}

// Receber o ID do produto a ser excluído
$id = $_GET['id'];

// Excluir produto do banco de dados
$stmt = $mysqli->prepare("DELETE FROM produtos WHERE id = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo "Produto excluído com sucesso!";
} else {
    echo "Erro: " . $stmt->error;
}
?>