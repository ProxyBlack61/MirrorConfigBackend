const MasterData = require("../Models/master.config");
const fileUtils = require("../Controllers/file.utils");

const getClockSettings = (req, res) => {
  const clockSettings = {};
  clockSettings.clockSettings = MasterData.config.modules[0].config;
  console.log(clockSettings);
  res.json(clockSettings);
};
const postClockSettings = (req, res) => {
  MasterData.config.modules[0].config = req.body;
  fileUtils.saveFile("./test.txt", MasterData.config);
  res.send("");
};

module.exports = {
  getClockSettings,
  postClockSettings,
};
