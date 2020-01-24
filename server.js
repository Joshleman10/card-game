const express = require("express");
require("dotenv").config();
// const apiRoutes = require("./src/routes/apiRoutes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require('cors')
// const db = require("./src/models/savedGames");
const savedGameRoutes = express.Router();
const app = express();
const PORT = process.env.PORT || 3001;

let SavedGames = require('./src/models/savedGames');

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json());
app.use(cors);
app.use('/savedGames', savedGameRoutes);
// app.use(apiRoutes);

savedGameRoutes.route('/').get(function (req, res) {
  SavedGames.find(function (err, savedGames) {
    if (err) {
      console.log(err);
    } else {
      res.json(savedGames);
    }
  });
});

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ageofantiquity",
  { useNewUrlParser: true },
  () => console.log("connected to DB: " + mongoose.connection.readyState),
);

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});