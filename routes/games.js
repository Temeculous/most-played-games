var express = require("express");
var router = express.Router();
var gamesCtrl = require("../controllers/games");

//GET index
router.get("/", gamesCtrl.index);
//GET new game form
router.get("/new", gamesCtrl.newGame);
//POST new game
router.post("/", gamesCtrl.createGame);
//GET single game
router.get("/:id", gamesCtrl.show);
//GET update form
router.get("/:id/edit", gamesCtrl.editGame);
//POST update
router.put("/:id", gamesCtrl.updateGame);
//DELETE game
router.delete("/:id", gamesCtrl.deleteGame);
module.exports = router;
