-- Criação da tabela para armazenar os dados do formulário
CREATE DATABASE IF NOT EXISTS dados; -- Cria o banco de dados se não existir
USE dados; -- Usa o banco de dados

CREATE TABLE IF NOT EXISTS contatos (
    id INT(11) AUTO_INCREMENT PRIMARY KEY, -- ID auto-incremento
    nome VARCHAR(100) NOT NULL, -- Nome do contato
    email VARCHAR(100) NOT NULL, -- Email do contato
    telefone VARCHAR(15) NOT NULL, -- Telefone do contato
    mensagem TEXT NOT NULL, -- Mensagem do contato
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Data de criação
);
