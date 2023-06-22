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
  },
  yearReleased: {
    required: false,
    type: "number",
  },
});

module.exports = mongoose.model("Game", gameSchema);
