const MasterData = require("../Models/master.config");
const fileUtils = require("../Controllers/file.utils");

const getNewsFeedSettings = (req, res) => {
  console.log("GET NEWS FEED SETTINGS");

  const settings = {};
  settings.module = MasterData.findModule("newsfeed", MasterData.activeConfig);

  res.json(settings);
};

const postNewsFeedSettings = (req, res) => {
  console.log("POST NEWS FEED SETTINGS");

  MasterData.removeModule("newsfeed", MasterData.activeConfig);
  MasterData.activeConfig.modules.push(req.body.module);

  fileUtils.saveFile();
  res.end();
};

module.exports = {
  getNewsFeedSettings,
  postNewsFeedSettings,
};
