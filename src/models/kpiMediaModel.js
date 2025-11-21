var database = require("../database/config")

function buscarKpiMedia(idUsuario) {
    var instrucaoSql = `
        SELECT ROUND(AVG(pontuacao), 2) AS media FROM Resultado WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarKpiMedia
};