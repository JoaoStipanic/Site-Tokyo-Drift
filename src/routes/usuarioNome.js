var express = require("express");
var router = express.Router();

var usuarioNomeController = require("../controllers/usuarioNomeController");

router.get("/buscarNomeUsuario/:idUsuario", function (req, res) {
    usuarioNomeController.buscarNomeUsuario(req, res);
});

module.exports = router;