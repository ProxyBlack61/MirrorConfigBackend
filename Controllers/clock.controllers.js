const MasterData = require("../Models/master.config");
const fileUtils = require("../Controllers/file.utils");

const getClockSettings = (req, res) => {
  console.log("GET CLOCK SETTINGS");

  const settings = {};
  const clockModule = MasterData.findModule("clock", MasterData.activeConfig);

  settings.moduleEnabled = true;
  settings.module = clockModule;

  res.json(settings);
};

const postClockSettings = (req, res) => {
  console.log("POST CLOCK SETTINGS");

  // Retrieve module from savedConfig & and always save settings to savedConfig
  MasterData.removeModule("clock", MasterData.activeConfig);
  MasterData.activeConfig.modules.push(req.body.module);

  fileUtils.saveFile();
  res.end();
};

module.exports = {
  getClockSettings,
  postClockSettings,
};
