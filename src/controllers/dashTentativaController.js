var dashTentativaModel = require("../models/dashTentativaModel");

function buscarTentativa(req, res) {
    var idUsuario = req.params.idUsuario

    dashTentativaModel.buscarTentativa(idUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    buscarTentativa
}