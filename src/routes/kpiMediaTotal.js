var express = require("express");
var router = express.Router();

var kpiMediaTotalController = require("../controllers/kpiMediaTotalController");

router.get("/buscarKpiMediaTotal/:idUsuario", function (req, res) {
    kpiMediaTotalController.buscarKpiMediaTotal(req, res);
});

module.exports = router;