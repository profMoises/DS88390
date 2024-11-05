<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $categoria = $_POST['categoria'];
    $quantidade = $_POST['quantidade'];
    $validade = $_POST['validade'];
    $unidade = $_POST['unidade'];
    $estoque_minimo = $_POST['estoque_minimo'];

    $sql = "INSERT INTO produtos (nome, categoria, quantidade, validade, unidade, estoque_minimo) 
            VALUES ('$nome', '$categoria', $quantidade, '$validade', '$unidade', $estoque_minimo)";

    if (mysqli_query($conn, $sql)) {
        echo "Produto cadastrado com sucesso!";
    } else {
        echo "Erro ao cadastrar o produto: " . mysqli_error($conn);
        header  ("cadastro_produto.html") ;
    
    }
}
?>
