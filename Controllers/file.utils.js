const process = require("process");
const MasterData = require("../Models/master.config");
const fs = require("fs");

const doSaveFile = (fileName, fileContent) => {
  const fileText = "let config =" +
      "" + JSON.stringify(fileContent, null, 2) + "" +
      ";\n" +
      "/*************** DO NOT EDIT THE LINE BELOW ***************/\n" +
      "if (typeof module !== \"undefined\") {module.exports = config;}";
  fs.writeFile("./textconfig.txt", fileText, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File saved");
    }
  });
};

const saveFile = (fileName, fileContent) => {
  if (process.platform === "win32") {
    console.log("CREATED WINDOWS DEBUG FILE");
    doSaveFile("./textconfig.txt", fileContent);
  } else if (process.platform === "linux") {
    doSaveFile(fileName, fileContent);
  }
};

const doReadFile = (fileName) => {
  fs.readFile("./textconfig.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Couldn't read file using default config");
      MasterData.activeConfig = MasterData.defaultConfig;
      MasterData.savedConfig = MasterData.defaultConfig;
    } else {
      try {
        MasterData.savedConfig = JSON.parse(data.substring(data.indexOf("{"), data.lastIndexOf("};") + 1));
        MasterData.activeConfig = JSON.parse(data.substring(data.indexOf("{"), data.lastIndexOf("};") + 1));
      } catch (e) {
        console.log("Couldn't parse file using default config");
        MasterData.config = MasterData.defaultConfig;
      }
      console.log("Loaded file!");
    }
  });
};

const readFile = (fileName) => {
  if (process.platform === "win32") {
    console.log("READ WINDOWS DEBUG FILE");
    doReadFile("./textconfig.txt");
  } else if (process.platform === "linux") {
    doReadFile(fileName);
  }
};

module.exports = {
  saveFile,
  readFile,
};
