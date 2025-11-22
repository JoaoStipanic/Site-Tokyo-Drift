var database = require("../database/config")

function buscarNomeUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT CONCAT(nome, ' ', sobrenome) AS nomeCompleto FROM Usuario WHERE id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarNomeUsuario
};