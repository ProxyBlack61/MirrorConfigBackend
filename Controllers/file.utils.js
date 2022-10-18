const process = require("process");
const fs = require("fs");

let fileText = "Hello World";

const saveFile = (fileName, fileContent) => {
  console.log(process.platform);
  if (process.platform === "win32") {
    fileText = "let config =" +
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
  } else if (process.platform === "linux") {
    console.log("linux");
  }
};

module.exports = {
  saveFile,
};
