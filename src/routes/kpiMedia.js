var express = require("express");
var router = express.Router();

var kpiMediaController = require("../controllers/kpiMediaController");

router.get("/buscarKpiMedia/:idUsuario", function (req, res) {
    kpiMediaController.buscarKpiMedia(req, res);
});

module.exports = router;