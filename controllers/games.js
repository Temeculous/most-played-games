const Game = require("../models/game");

module.exports = { index, newGame };

function index(req, res, next) {
  const games = Game.find();
  res.render("games/index", { games, title: "Games" });
}

function newGame(req, res, next) {
  res.render("games/new", { title: "New Game" });
}
