<?php
// Conexão com o banco de dados
$servername = "localhost"; // Nome do servidor
$username = "root"; // Nome de usuário do banco de dados
$password = ""; // Senha do banco de dados
$dbname = "dados"; // Nome do banco de dados

// Criando a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se houve erro na conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error); // Mensagem de erro
}

// Captura os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['mensagem'];

// SQL para inserir os dados na tabela
$sql = "INSERT INTO contatos (nome, email, telefone, mensagem) VALUES ('$nome', '$email', '$telefone', '$mensagem')";

// Executa a consulta e verifica se foi bem-sucedida
if ($conn->query($sql) === TRUE) {
    echo "Novo registro criado com sucesso"; // Mensagem de sucesso
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error; // Mensagem de erro
}

// Fecha a conexão
$conn->close();
?>
