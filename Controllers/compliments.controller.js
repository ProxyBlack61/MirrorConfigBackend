const MasterData = require("../Models/master.config");
const fileUtils = require("../Controllers/file.utils");

const getComplimentsSettings = (req, res) => {
  console.log("GET COMPLIMENTS SETTINGS");

  const settings = {};
  settings.module = MasterData.findModule("compliments", MasterData.activeConfig);

  res.json(settings);
};

const postComplimentsSettings = (req, res) => {
  console.log("POST COMPLIMENTS SETTINGS");

  MasterData.removeModule("compliments", MasterData.activeConfig);
  MasterData.activeConfig.modules.push(req.body.module);

  fileUtils.saveFile();
  res.end();
};

module.exports = {
  getComplimentsSettings,
  postComplimentsSettings,
};
