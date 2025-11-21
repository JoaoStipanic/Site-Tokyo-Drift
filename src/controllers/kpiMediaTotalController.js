var kpiMediaTotalModel = require("../models/kpiMediaTotalModel");

function buscarKpiMediaTotal(req, res) {
    var idUsuario = req.params.idUsuario

    kpiMediaTotalModel.buscarKpiMediaTotal(idUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    buscarKpiMediaTotal
}