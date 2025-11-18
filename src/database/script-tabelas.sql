CREATE DATABASE tokyodrift;

USE tokyodrift;

CREATE TABLE Usuário (
	idUsuario INT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45),
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone CHAR(11),
    senha VARCHAR(100) NOT NULL
);