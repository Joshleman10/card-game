const mongoose = require("mongoose");

let savedGame = new mongoose.Schema({

  playerName: {
    type: String
  },
  playerDeck: {
    type: Array
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
}, {
  collection: 'users'
});

const SavedGame = mongoose.model("Task", savedGame);

module.exports = SavedGame