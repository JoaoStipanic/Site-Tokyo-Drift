var database = require("../database/config")

function buscar(idUsuario) {
    var instrucaoSql = `
        SELECT pontuacao FROM Resultado WHERE fkUsuario = ${idUsuario} ORDER BY idResultado DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
};