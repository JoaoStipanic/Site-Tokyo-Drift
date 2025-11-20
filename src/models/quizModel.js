var database = require("../database/config");

function resultadoSalvar(fkUsuario, fkQuiz, pontuacao) {
    var instrucao = `
        INSERT INTO Resultado (fkUsuario, fkQuiz, pontuacao) VALUES (${fkUsuario}, ${fkQuiz}, ${pontuacao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    resultadoSalvar
};