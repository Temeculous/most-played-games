var express = require("express");
var router = express.Router();
var gamesCtrl = require("../controllers/games");

//GET index
router.get("/", gamesCtrl.index);

module.exports = router;
