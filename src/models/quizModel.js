var database = require("../database/config");

function resultadoSalvar(fkUsuario, fkQuiz, pontuacao) {
    var insertSQL = `
        INSERT INTO Resultado VALUES (${fkUsuario}, ${fkQuiz}, ${pontuacao});
    `

    return database.executar(insertSQL);
}

module.exports = {
    resultadoSalvar
}