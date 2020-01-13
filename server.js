var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

let currentPlayerDeck = [];
let userName = "";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var savedGamesDatabase = db.db("savedGamesDatabase");
    if (currentPlayerDeck) {
        savedGamesDatabase.collection("customers").insertOne(currentPlayerDeck, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted: " + currentPlayerDeck);
            db.close();
        });
    }
    else if (currentPlayerDeck) {
        savedGamesDatabase.collection("customers").insertOne(userName, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted: " + userName);
            db.close();
        });
    }
});