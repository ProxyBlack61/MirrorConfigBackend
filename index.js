const express = require("express");
const bodyParser = require("body-parser");
const MasterData = require("./Models/master.config");
const cors = require("cors");
const clockRoutes = require("./Routes/clock.routes");
const fileUtils = require("./Controllers/file.utils");

fileUtils.readFile(MasterData.defaultPath);

const app = express();
const port = 3000;
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  }),
);

app.use("/", bodyParser.json(), clockRoutes);

app.listen(port, () => {
  console.log(
    `Example app listening on port http://localhost:${port}/clockSettings`,
  );
});
