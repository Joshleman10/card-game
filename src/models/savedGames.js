const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedGames = new Schema({
  savedGame1: {
    type: Object,
    playernName: {
      type: String,
      // required: true 
    },
    playerDeck: {
      type: Array,
      // required: true 
    }
  },
  savedGame2: {
    type: Object,
    playernName: {
      type: String,
      // required: true 
    },
    playerDeck: {
      type: Array,
      // required: true 
    }
  },
  savedGame3: {
    type: Object,
    playernName: {
      type: String,
      // required: true 
    },
    playerDeck: {
      type: Array,
      // required: true 
    }
  }
});

const PlayerDeck = mongoose.model("SavedGame", savedGames);

module.exports = PlayerDeck;