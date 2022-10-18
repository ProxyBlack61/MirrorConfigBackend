const express = require("express");
const clockController = require("../Controllers/clock.controllers");
const router = express.Router();

router.get("/clockSettings", clockController.getClockSettings);
router.post("/clockSettings", clockController.postClockSettings);

module.exports = router;
