const express = require("express");
require("dotenv").config();
const apiRoutes = require("./src/routes/apiRoutes");
const mongoose = require("mongoose");
const savedGameRoutes = express.Router();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apiRoutes);
app.use('/api/savedGame', savedGameRoutes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ageofantiquity",
  { useNewUrlParser: true },
  // { useUnifiedTopology: true },
  () => console.log("connected to DB: " + mongoose.connection.db.databaseName),
);

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
