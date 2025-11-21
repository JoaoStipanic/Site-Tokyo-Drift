var database = require("../database/config")

function buscarKpiMediaTotal(idUsuario) {
    var instrucaoSql = `
        SELECT ROUND(AVG(pontuacao), 2) AS mediaTotal, (SELECT ROUND(AVG(pontuacao), 2) FROM Resultado WHERE fkUsuario = ${idUsuario}) AS mediaUsuario FROM Resultado;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarKpiMediaTotal
};