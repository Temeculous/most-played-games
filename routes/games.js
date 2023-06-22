var express = require("express");
var router = express.Router();
var gamesCtrl = require("../controllers/games");

//GET index
router.get("/", gamesCtrl.index);
//GET new game form
router.get("/new", gamesCtrl.newGame);
module.exports = router;
