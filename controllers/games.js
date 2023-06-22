const Game = require("../models/game");

module.exports = { index, newGame, createGame };

async function index(req, res, next) {
  const games = await Game.find({});
  res.render("games/index", { games, title: "Games" });
}

function newGame(req, res, next) {
  res.render("games/new", { title: "New Game" });
}

async function createGame(req, res, next) {
  try {
    await Game.create(req.body);
    console.log(req.body);
    res.redirect("/games");
  } catch (err) {
    res.render("games/new", { errMsg: err });
  }
}
