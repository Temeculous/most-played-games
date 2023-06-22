const Game = require("../models/game");

module.exports = { index };

function index(req, res, next) {
  const games = Game.find();
  res.render("games/index", { games, title: "Games" });
}
