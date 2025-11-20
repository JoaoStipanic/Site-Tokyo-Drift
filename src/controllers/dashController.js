var dashModel = require("../models/dashModel");

function buscar(req, res) {
    var idUsuario = req.params.idUsuario

    dashModel.buscar(idUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    buscar
}