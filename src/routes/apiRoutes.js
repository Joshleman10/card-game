const apiRouter = require("express").Router();
const savedGameController = require("../controllers/savedGameController");

apiRouter
    .route("/api/savedGame")
    .get(savedGameController.findAll)
    .post(savedGameController.create);

apiRouter
    .route("/api/savedGame/:id")
    .get(savedGameController.findById)
    .put(savedGameController.update)
    .delete(savedGameController.remove);

module.exports = apiRouter;