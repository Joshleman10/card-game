const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedGames = new Schema({

    playernName: {
      type: String,
      required: true 
    },
    playerDeck: {
      type: Array,
      required: true 
    },
    gameProgressPoint:{
      type: Number,
    }
});

const PlayerDeck = mongoose.model("SavedGame", savedGames);

module.exports = PlayerDeck;