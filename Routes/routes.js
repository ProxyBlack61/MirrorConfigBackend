const express = require("express");
const clockController = require("../Controllers/clock.controller");
const newsFeedController = require("../Controllers/newsFeed.controller");
const weatherController = require("../Controllers/weather.controller");
const helloWorldController = require("../Controllers/helloWorld.controller");
const calendarController = require("../Controllers/calendar.controller");
const complimentsController = require("../Controllers/compliments.controller");
const router = express.Router();

router.get("/clockSettings", clockController.getClockSettings);
router.post("/clockSettings", clockController.postClockSettings);

router.get("/newsFeedSettings", newsFeedController.getNewsFeedSettings);
router.post("/newsFeedSettings", newsFeedController.postNewsFeedSettings);

router.get("/weatherSettings", weatherController.getWeatherSettings);
router.post("/weatherSettings", weatherController.postWeatherSettings);

router.get("/helloWorldSettings", helloWorldController.getHelloWorldSettings);
router.post("/helloWorldSettings", helloWorldController.postHelloWorldSettings);

router.get("/calendarSettings", calendarController.getCalendarSettings);
router.post("/calendarSettings", calendarController.postCalendarSettings);

router.get("/complimentsSettings", complimentsController.getComplimentsSettings);
router.post("/complimentsSettings", complimentsController.postComplimentsSettings);

module.exports = router;
