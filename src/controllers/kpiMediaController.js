var kpiMediaModel = require("../models/kpiMediaModel");

function buscarMedia(req, res) {
    var idUsuario = req.params.idUsuario

    kpiMediaModel.buscarMedia(idUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    buscarMedia
}
