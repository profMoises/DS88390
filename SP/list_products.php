<?php
// Conectar ao banco de dados
$mysqli = new mysqli("localhost", "root", "", "produtos");

// Verificar conexão
if ($mysqli->connect_error) {
    die("Falha na conexão: " . $mysqli->connect_error);
}

// Buscar todos os produtos
$result = $mysqli->query("SELECT * FROM produtos");

// Transformar os dados em um array
$products = [];
while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

// Retornar os dados em formato JSON
echo json_encode($products);
?>