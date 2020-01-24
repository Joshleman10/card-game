const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SavedGames = new Schema({

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


module.exports = mongoose.model("SavedGames", SavedGames);
