CREATE DATABASE tokyodrift;

USE tokyodrift;

CREATE TABLE Usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone CHAR(11) NOT NULL,
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE Quiz (
    idQuiz INT PRIMARY KEY,
    titulo VARCHAR(100)
);

CREATE TABLE Pergunta (
    idPergunta INT PRIMARY KEY,
    fkQuiz INT NOT NULL,
		CONSTRAINT fkQuizPergunta
			FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz),
    enunciado VARCHAR(200) NOT NULL
);

CREATE TABLE Resposta (
    idResposta INT NOT NULL,
    fkPergunta INT NOT NULL,
		CONSTRAINT fkPerguntaResposta
			FOREIGN KEY (fkPergunta) REFERENCES Pergunta(idPergunta),
		CONSTRAINT pkComposta
			PRIMARY KEY (idResposta, fkPergunta),
    opcao CHAR(1) NOT NULL,
    texto VARCHAR(50) NOT NULL,
    validacao TINYINT NOT NULL
);

CREATE TABLE Resultado (
    idResultado INT AUTO_INCREMENT,
    fkUsuario INT,
    fkQuiz INT,
    pontuacao INT,
		CONSTRAINT fkUsuarioResultado
			FOREIGN KEY (fkUsuario) REFERENCES Usuario(id),
		CONSTRAINT fkQuizResultado
			FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz),
		CONSTRAINT pkComposta
			PRIMARY KEY (idResultado, fkUsuario, fkQuiz)
);

INSERT INTO Quiz VALUES
	(1, 'Teste seu conhecimento sobre o filme Velozes e Furiosos: Desafio em Tóquio');
    
INSERT INTO Pergunta VALUES
	(1, 1, 'Em qual ano o filme Velozes e Furiosos: Desafio em Tóquio foi lançado?'),
    (2, 1, 'Qual o modelo do carro o personagem Han Lue dirige no filme?'),
    (3, 1, 'Qual o nome da mulher que o personagem Sean Boswell se apaixona?'),
    (4, 1, 'Em ordem cronológica de lançamendo, qual seria o número do filme Velozes e Furioso: Desafio em Tóquio?'),
    (5, 1, 'No filme Velozes e Furiosos: Desafio em Tóquio, quem dirige esse carro?'),
    (6, 1, 'Em qual cidade se passa o filme Velozes e Furiosos: Desafio em Tóquio?'),
    (7, 1, 'Que tipo de corrida é o foco central do filme Velozes e Furiosos: Desafio em Tóquio?'),
    (8, 1, 'Qual o nome do vilão principal do filme?'),
    (9, 1, 'Sean Boswell vai para Tóquio para morar com quem?'),
    (10, 1, 'Onde se passa o início do filme Velozes e Furiosos: Desafio em Tóquio?');

INSERT INTO Resposta VALUES
-- Pergunta 1
	(1, 1, 'A', '2004', 0),
	(2, 1, 'B', '2000', 0),
	(3, 1, 'C', '2006', 1),
	(4, 1, 'D', '2001', 0),
-- Pergunta 2
	(1, 2, 'A', 'Mazda RX-7', 1),
	(2, 2, 'B', 'Nissan 350Z', 0),
	(3, 2, 'C', 'Mazda RX-8', 0),
	(4, 2, 'D', 'Mitsubishi Lancer EVO IX', 0),
-- Pergunta 3
	(1, 3, 'A', 'Mia', 0),
	(2, 3, 'B', 'Neela', 1),
	(3, 3, 'C', 'Letty', 0),
	(4, 3, 'D', 'Suki', 0),
-- Pergunta 4
	(1, 4, 'A', '1', 0),
	(2, 4, 'B', '4', 0),
	(3, 4, 'C', '2', 0),
	(4, 4, 'D', '3', 1),
-- Pergunta 5
	(1, 5, 'A', 'Twinkie', 0),
	(2, 5, 'B', 'Han', 0),
	(3, 5, 'C', 'Takashi', 1),
	(4, 5, 'D', 'Roman', 0),
-- Pergunta 6
	(1, 6, 'A', 'Tóquio', 1),
	(2, 6, 'B', 'Rio de Janeiro', 0),
	(3, 6, 'C', 'Los Angeles', 0),
	(4, 6, 'D', 'Dubai', 0),
-- Pergunta 7
	(1, 7, 'A', 'Racha', 0),
	(2, 7, 'B', 'Rali', 0),
	(3, 7, 'C', 'Drift', 1),
	(4, 7, 'D', 'Stock Car', 0),
-- Pergunta 8
	(1, 8, 'A', 'Cipher', 0),
	(2, 8, 'B', 'Shawn', 0),
	(3, 8, 'C', 'DK', 0),
	(4, 8, 'D', 'Takashi', 1),
-- Pergunta 9
	(1, 9, 'A', 'Pai', 1),
	(2, 9, 'B', 'Mãe', 0),
	(3, 9, 'C', 'Irmão', 0),
	(4, 9, 'D', 'Amigo', 0),
-- Pergunta 10
	(1, 10, 'A', 'Japão', 0),
	(2, 10, 'B', 'Estados Unidos', 1),
	(3, 10, 'C', 'Brasil', 0),
	(4, 10, 'D', 'China', 0);
    
SELECT * FROM Resultado;