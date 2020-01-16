import axios from "axios";

export default {
    getSavedGames: function() {
        return axios.get("/api/savedGame");
    },
    saveGame: function(gameProgressData) {
        return axios.post("/api/savedGame", gameProgressData);
    },
    deleteSavedGame: function(id) {
        return axios.delete("/api/savedGame" + id);
    },
    updatePlayerDeck: function(id) {
        return axios.put("/api/savedGame/" + id);
    }
};