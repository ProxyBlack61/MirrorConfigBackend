const MasterData = require("../Models/master.config");
const fileUtils = require("../Controllers/file.utils");

const getCalendarSettings = (req, res) => {
  console.log("GET CALENDAR SETTINGS");

  const settings = {};
  settings.module = MasterData.findModule("calendar", MasterData.activeConfig);

  res.json(settings);
};

const postCalendarSettings = (req, res) => {
  console.log("POST CALENDAR SETTINGS");

  MasterData.removeModule("calendar", MasterData.activeConfig);
  MasterData.activeConfig.modules.push(req.body.module);

  fileUtils.saveFile();
  res.end();
};

module.exports = {
  getCalendarSettings,
  postCalendarSettings,
};
