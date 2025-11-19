var quizModel = require("../models/quizModel");

function resultadoSalvar(req, res) {
    var fkUsuario = req.body.idUsuario;
    var fkQuiz = req.body.idQuiz;
    var pontuacao = req.body.pontuacao;

    if (fkUsuario == undefined || fkQuiz == undefined || pontuacao == undefined) {
        res.status(400).send("Dados undefined");
    } else {
        quizModel.resultadoSalvar(fkUsuario, fkQuiz, pontuacao)
            .then(function (resultado) {
                res.status(200).json({
                    mensagem: "Dados inseridos com sucesso",
                    dados: resultado
                });
            })
            .catch(function (erro){
                console.log("Erro ao salvar resultado:", erro);
                res.status(500).json(erro);
            });
    }
}

module.exports = {
    resultadoSalvar
};