var dashPorcentagemModel = require("../models/dashPorcentagemModel");

function buscarPorcentagem(req, res) {
    var idUsuario = req.params.idUsuario

    dashPorcentagemModel.buscarPorcentagem(idUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    buscarPorcentagem
}