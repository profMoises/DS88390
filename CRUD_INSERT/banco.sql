-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS dados_usuarios;

-- Seleciona o banco de dados
USE dados_usuarios;

-- Criação da tabela 'usuarios'
CREATE TABLE IF NOT EXISTS usuarios (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

