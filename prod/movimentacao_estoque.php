<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id_produto = $_POST['id_produto'];
    $tipo = $_POST['tipo'];
    $quantidade = $_POST['quantidade'];
    $data = $_POST['data'];
    $id_usuario = $_SESSION['usuario_id'];

    $sql = "INSERT INTO movimentacoes (id_produto, tipo, quantidade, data, id_usuario) 
            VALUES ($id_produto, '$tipo', $quantidade, '$data', $id_usuario)";
    
    if (mysqli_query($conn, $sql)) {
        if ($tipo == 'saida') {
            $sql_verifica = "SELECT quantidade, estoque_minimo FROM produtos WHERE id = $id_produto";
            $result = mysqli_query($conn, $sql_verifica);
            $produto = mysqli_fetch_assoc($result);
            
            if ($produto['quantidade'] < $produto['estoque_minimo']) {
                echo "Atenção: Estoque abaixo do mínimo!";
            }
        }
        echo "Movimentação registrada com sucesso!";
    } else {
        echo "Erro ao registrar movimentação: " . mysqli_error($conn);
    }
}
?>
