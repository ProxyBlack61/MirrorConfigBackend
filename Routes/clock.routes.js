const express = require("express");
const clockController = require("../Controllers/clock.controllers");
const newsFeedController = require("../Controllers/newsFeed.controllers");
const router = express.Router();

router.get("/clockSettings", clockController.getClockSettings);
router.post("/clockSettings", clockController.postClockSettings);

router.get("/newsFeedSettings", newsFeedController.getNewsFeedSettings);
router.post("/newsFeedSettings", newsFeedController.postNewsFeedSettings);

module.exports = router;
