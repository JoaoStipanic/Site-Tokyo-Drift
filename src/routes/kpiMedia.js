var express = require("express");
var router = express.Router();

var kpiMediaController = require("../controllers/kpiMediaController");

router.get("/buscarMedia/:idUsuario", function (req, res) {
    kpiMediaController.buscarMedia(req, res);
});

module.exports = router;