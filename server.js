const express = require("express");
require("dotenv").config();
const apiRoutes = require("./routes/api");
const email = require("./routes/email");
const mongoose = require("mongoose");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRoutes);
app.use(email);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/ageofantiquity",
    { useNewUrlParser: true }
  );

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});