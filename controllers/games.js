const Game = require("../models/game");

module.exports = { index, newGame, createGame };

function index(req, res, next) {
  const games = Game.find();
  res.render("games/index", { games, title: "Games" });
}

function newGame(req, res, next) {
  res.render("games/new", { title: "New Game" });
}

async function createGame(req, res, next) {
  try {
    await Game.create(req.body);
    console.log(req.body);
    res.redirect("/");
  } catch (err) {
    res.render("games/new", { errMsg: err });
  }
}
