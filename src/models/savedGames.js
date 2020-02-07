const mongoose = require("mongoose");
var moment = require('moment');

let savedGame = new mongoose.Schema({

  playerName: {
    type: String
  },
  currentLevel:{
    type: String
  },
  playerDeck: {
    type: Array
  },
  created: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm:ss a')
  },
}, {
  collection: 'SavedGames'
});

const SavedGame = mongoose.model("Task", savedGame);

module.exports = SavedGame