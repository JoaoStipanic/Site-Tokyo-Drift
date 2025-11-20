var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/buscar/:idUsuario", function (req, res) {
    dashController.buscar(req, res);
});

module.exports = router;