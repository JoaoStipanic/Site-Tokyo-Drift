var database = require("../database/config")

function buscarPorcentagem(idUsuario) {
    var instrucaoSql = `
        SELECT pontuacao FROM Resultado WHERE fkUsuario = ${idUsuario} AND pontuacao >= (SELECT MAX(pontuacao) FROM Resultado WHERE fkUsuario = ${idUsuario}); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPorcentagem
};