var quizModel = require("../models/quizModel");

function resultadoSalvar(req, res) {
    var fkUsuario = req.body.idUsuario;
    var fkQuiz = req.body.idQuiz;
    var pontuacao = req.body.pontuacao;

    if (fkUsuario == undefined || fkQuiz == undefined || pontuacao == undefined) {
        res.status(400).send("Dados undefined");
    } 
    // else {
        quizModel.resultadoSalvar(fkUsuario, fkQuiz, pontuacao)
            .then(function (resposta) {
                res.status(200).send("Dados salvos com sucesso");
            })
            .catch(function(erro){
                // console.log("Erro ao salvar resultado:", erro);
                res.status(500).json(erro.sqlMessage);
            });
    // }
}

module.exports = {
    resultadoSalvar
};