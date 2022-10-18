const express = require("express");
const cors = require("cors");
const clockRoutes = require("./Routes/clock.routes");

const app = express();
const port = 3000;
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  }),
);

app.use("/", clockRoutes);

app.listen(port, () => {
  console.log(
    `Example app listening on port http://localhost:${port}/clockSettings`,
  );
});
