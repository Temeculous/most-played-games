const Game = require("../models/game");

module.exports = {
  index,
  newGame,
  createGame,
  show,
  editGame,
  updateGame,
  deleteGame,
};

async function index(req, res, next) {
  const games = await Game.find({});
  res.render("games/index", { games, title: "Games" });
}

async function show(req, res, next) {
  const game = await Game.findById(req.params.id);
  res.render("games/show", { game, title: game.name });
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

async function editGame(req, res, next) {
  try {
    const game = await Game.findById(req.params.id);
    res.render("games/edit", { title: game.name, game });
  } catch (err) {
    console.log(err);
  }
}

async function updateGame(req, res, next) {
    const id = req.params.id;
  await Game.findByIdAndUpdate(id, req.body);
  res.redirect('/games')

}

async function deleteGame(req, res, next) {
  await Game.findByIdAndRemove(req.params.id);
  res.redirect("/games");
}
