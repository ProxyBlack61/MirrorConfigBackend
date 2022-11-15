const MasterData = require("../Models/master.config");
const fileUtils = require("../Controllers/file.utils");

const getWeatherSettings = (req, res) => {
  console.log("GET WEATHER SETTINGS");

  const settings = {};
  settings.module = MasterData.findModule("weather", MasterData.activeConfig);

  res.json(settings);
};

const postWeatherSettings = (req, res) => {
  console.log("POST WEATHER SETTINGS");

  MasterData.removeModule("weather", MasterData.activeConfig);
  MasterData.activeConfig.modules.push(req.body.module);

  fileUtils.saveFile();
  res.end();
};

module.exports = {
  getWeatherSettings,
  postWeatherSettings,
};
