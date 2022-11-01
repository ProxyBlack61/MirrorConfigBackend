const MasterData = require("../Models/master.config");
const fileUtils = require("../Controllers/file.utils");

const getClockSettings = (req, res) => {
  console.log("GET CLOCK SETTINGS");
  const settings = {};
  const clockModule = MasterData.findModule("clock", MasterData.savedConfig);

  settings.clockSettings = clockModule.config;
  res.json(settings);
};
const postClockSettings = (req, res) => {
  console.log("POST CLOCK SETTINGS");
  let clockModule = MasterData.findModule("clock", MasterData.savedConfig);
  clockModule.config = req.body.settings;
  clockModule = MasterData.findModule("clock", MasterData.activeConfig);
  if (req.body.enabled) {
    // TODO: Build a function to add a module to the active config if it doens't exist yet
    clockModule.config = req.body.settings;
  } else {
    // TODO: Build a function to remove a module from the active config
    console.log("CLOCK DISABLED");
    clockModule = {};
  }
  console.log(MasterData.savedConfig.modules);
  console.log("--------------------");
  console.log(MasterData.activeConfig.modules);

  fileUtils.saveFile(MasterData.defaultPath, MasterData.activeConfig);
  res.end();
};

module.exports = {
  getClockSettings,
  postClockSettings,
};
