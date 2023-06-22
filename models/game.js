const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: {
    required: true,
    type: "string",
  },
  hoursPlayed: {
    required: true,
    type: "number",
    min: 1,
  },
  yearReleased: {
    required: false,
    type: "number",
    min: 1960,
  },
});

module.exports = mongoose.model("Game", gameSchema);
