const MasterData = require("../Models/master.config");
const fileUtils = require("../Controllers/file.utils");

const getHelloWorldSettings = (req, res) => {
  console.log("GET SETTINGS");

  const settings = {};
  settings.module = MasterData.findModule("helloworld", MasterData.activeConfig);

  res.json(settings);
};

const postHelloWorldSettings = (req, res) => {
  console.log("POST SETTINGS");

  MasterData.removeModule("helloworld", MasterData.activeConfig);
  MasterData.activeConfig.modules.push(req.body.module);

  fileUtils.saveFile();
  res.end();
};

module.exports = {
  getHelloWorldSettings,
  postHelloWorldSettings,
};
