<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "produtos";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Verifica ação e executa conforme necessário
$action = $_GET['action'];

switch ($action) {
    case 'get_items':
        $sql = "SELECT * FROM estoque";
        $result = $conn->query($sql);
        $items = array();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $items[] = $row;
            }
        }
        echo json_encode($items);
        break;
    
    case 'add_item':
        $data = json_decode(file_get_contents('php://input'), true);
        $nome = $data['nome'];
        $quantidade = $data['quantidade'];
        $preco = $data['preco'];

        $sql = "INSERT INTO estoque (nome, quantidade, preco) VALUES ('$nome', '$quantidade', '$preco')";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(array('success' => true));
        } else {
            echo json_encode(array('success' => false));
        }
        break;

    default:
        echo json_encode(array('error' => 'Ação desconhecida.'));
        break;
}

$conn->close();

?>
