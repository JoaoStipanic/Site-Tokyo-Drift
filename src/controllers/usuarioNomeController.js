var usuarioNomeModel = require("../models/usuarioNomeModel");

function buscarNomeUsuario(req, res) {
    var idUsuario = req.params.idUsuario

    usuarioNomeModel.buscarNomeUsuario(idUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    buscarNomeUsuario
}
