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
    titulo VARCHAR(45)
);

CREATE TABLE Pergunta (
    idPergunta INT PRIMARY KEY,
    fkQuiz INT NOT NULL,
		CONSTRAINT fkQuizPergunta
			FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz),
    enunciado VARCHAR(100) NOT NULL
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
    idResultado INT,
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

