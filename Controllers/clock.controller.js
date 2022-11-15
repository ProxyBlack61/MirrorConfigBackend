const MasterData = require("../Models/master.config");
const fileUtils = require("../Controllers/file.utils");

const getClockSettings = (req, res) => {
  console.log("GET CLOCK SETTINGS");

  const settings = {};
  settings.module = MasterData.findModule("clock", MasterData.activeConfig);

  res.json(settings);
};

const postClockSettings = (req, res) => {
  console.log("POST CLOCK SETTINGS");

  MasterData.removeModule("clock", MasterData.activeConfig);
  MasterData.activeConfig.modules.push(req.body.module);

  fileUtils.saveFile();
  res.end();
};

module.exports = {
  getClockSettings,
  postClockSettings,
};
