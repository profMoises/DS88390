 
CREATE DATABASE saep_db;
USE saep_db;


CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    papel ENUM('admin', 'usuario') DEFAULT 'usuario'
);


CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    quantidade INT DEFAULT 0,
    validade DATE,
    unidade VARCHAR(10),
    estoque_minimo INT DEFAULT 10
);


CREATE TABLE movimentacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_produto INT,
    tipo ENUM('entrada', 'saida') NOT NULL,
    quantidade INT NOT NULL,
    data DATE NOT NULL,
    id_usuario INT,
    FOREIGN KEY (id_produto) REFERENCES produtos(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);


INSERT INTO usuarios (nome, senha, papel) VALUES 
('admin', MD5('admin123'), 'admin'),
('usuario1', MD5('usuario123'), 'usuario');

INSERT INTO produtos (nome, categoria, quantidade, validade, unidade, estoque_minimo) VALUES
('Cimento', 'Fundação', 50, '2024-12-31', 'kg', 20),
('Tinta Branca', 'Acabamento', 100, '2025-01-15', 'l', 30),
('Argamassa', 'Estrutura', 200, '2024-11-30', 'kg', 15);
