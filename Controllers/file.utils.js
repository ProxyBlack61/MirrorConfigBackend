const process = require("process");
const MasterData = require("../Models/master.config");
const fs = require("fs");

function doSaveFile (fileName, fileContent) {
  const fileText = "let config =" +
      "" + JSON.stringify(fileContent, null, 2) + "" +
      ";\n" +
      "/*************** DO NOT EDIT THE LINE BELOW ***************/\n" +
      "if (typeof module !== \"undefined\") {module.exports = config;}";
  fs.writeFile(fileName, fileText, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File saved");
    }
  });
}

function saveFile () {
  if (process.platform === "win32") {
    console.log("CREATED WINDOWS DEBUG FILE");

    // Save to activeConfig
    // Filepath not final yet
    doSaveFile("A:\\MirrorSoftware\\MagicMirror\\config\\config.js", MasterData.activeConfig);
  } else if (process.platform === "linux") {
    // Save to activeConfig
    doSaveFile(MasterData.defaultPathActive, MasterData.activeConfig);
  }
}

function doReadFile (fileName) {
  let returnValue = null;
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log("Couldn't read file using default config");
      returnValue = MasterData.defaultConfig;
    } else {
      try {
        returnValue = JSON.parse(data.substring(data.indexOf("{"), data.lastIndexOf("};") + 1));
      } catch (e) {
        console.log("Couldn't parse file using default config");
        returnValue = MasterData.defaultConfig;
      }
    }
    MasterData.activeConfig = returnValue;
  });
}

function readFile () {
  if (process.platform === "win32") {
    console.log("READ WINDOWS DEBUG FILE");

    // Read activeConfig
    // Filepath not final yet
    doReadFile("A:\\MirrorSoftware\\MagicMirror\\config\\config.js");
  } else if (process.platform === "linux") {
    // Read activeConfig
    doReadFile(MasterData.defaultPathActive);
  }
}

module.exports = {
  saveFile,
  readFile,
};
