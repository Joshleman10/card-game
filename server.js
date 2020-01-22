const express = require("express");
require("dotenv").config();
const apiRoutes = require("./src/routes/apiRoutes");
const mongoose = require("mongoose");
// const db = require("./src/models/savedGames");

const app = express();
const PORT = process.env.PORT || 3001;

console.log(mongoose.connection.readyState);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(apiRoutes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ageofantiquity",
  { useNewUrlParser: true },
  () => console.log("connected to DB: " + mongoose.connection.readyState),
);

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
