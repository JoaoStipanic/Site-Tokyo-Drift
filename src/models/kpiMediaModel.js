var database = require("../database/config")

function buscarKpiMedia(idUsuario) {
    var instrucaoSql = `
        SELECT ROUND(AVG(pontuacao)) AS media FROM Resultado;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarKpiMedia
};