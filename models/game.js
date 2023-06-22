const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: {
    type: String,
  },
  hoursPlayed: {
    type: Number,
    min: 1,
  },
  yearReleased: {
    type: Date,
  },
});

module.exports = mongoose.model("Game", gameSchema);
