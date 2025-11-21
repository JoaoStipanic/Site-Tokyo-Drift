var kpiMediaModel = require("../models/kpiMediaModel");

function buscarKpiMedia(req, res) {
    var idUsuario = req.params.idUsuario

    kpiMediaModel.buscarKpiMedia(idUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    buscarKpiMedia
}
