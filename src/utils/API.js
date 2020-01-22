import axios from "axios";

export default {
    getSavedGames: function() {
        return axios.get("/api/savedGame");
    },
    createNewSavedGame: function(gameProgressData) {
        return axios.post("/api/savedGame", gameProgressData);
    },
    deleteSavedGame: function(id) {
        return axios.delete("/api/savedGame" + id);
    },
    updateSavedGameFile: function(id) {
        return axios.put("/api/savedGame/" + id);
    }
};
