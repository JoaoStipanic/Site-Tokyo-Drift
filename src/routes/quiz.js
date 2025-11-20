var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/resultadoSalvar", function (req, res) {
    quizController.resultadoSalvar(req, res);
});

module.exports = router;