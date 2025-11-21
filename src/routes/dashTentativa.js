var express = require("express");
var router = express.Router();

var dashTentativaController = require("../controllers/dashTentativaController");

router.get("/buscarTentativa/:idUsuario", function (req, res) {
    dashTentativaController.buscarTentativa(req, res);
});

module.exports = router;