var express = require("express");
var router = express.Router();

var dashPorcentagemController = require("../controllers/dashPorcentagemController");

router.get("/buscarPorcentagem/:idUsuario", function (req, res) {
    dashPorcentagemController.buscarPorcentagem(req, res);
});

module.exports = router;